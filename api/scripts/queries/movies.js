var fs = require('fs');

function getItemsCount(req, res, next, db, tvshow) {
  let q = req.query['q'];
  if (q != undefined) {
    q = q.toUpperCase();
  }
  let sql =
    'SELECT' +
    ' count(id) as "count"' +
    ' FROM movie' +
    ' WHERE (id >= 1000)';
  if (tvshow) {
    sql = sql + ' AND (show=true AND movie=false)';
  } else {
    sql = sql + ' AND (show=false AND movie=true)';
  }
  if (q != undefined) {
    sql = sql +
      'AND (' +
      '(UPPER(name) LIKE \'%' + q + '%\')' +
      ')';
  }
  db.one(sql)
    .then(function (data) {
      res.status(200)
        .json({
          "count": data.count
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getItems(req, res, next, db, url, tvshow) {
  let formatting = 'MM/DD/YYYY';
  let offset_req = req.query['offset'];
  let limit_req = req.query['limit'];
  let limit = 10;
  let offset = 0;
  if ((limit_req == undefined) || (offset_req == undefined)) {
    limit = 10;
    offset = 0;
  }
  let q = req.query['q'];
  if (q != undefined) {
    q = q.toUpperCase();
  }
  let sql =
    'SELECT' +
    ' id' +
    ',name' +
    ',to_char(release_date, \'' + formatting + '\') as "releaseDate"' +
    ',wikipedia_link as "wikipediaLink"' +
    ',file_name as "fileName"' +
    ' FROM movie WHERE (id > 111)';
  if (tvshow) {
    sql = sql + ' AND (show=true AND movie=false)';
  } else {
    sql = sql + ' AND (show=false AND movie=true)';
  }
  if (q != undefined) {
    sql = sql +
      'AND (' +
      '(UPPER(name) LIKE \'%' + q + '%\')' +
      ')';
  }
  sql = sql +
    ' ORDER BY name ASC';
  if ((limit_req != undefined) && (offset_req != undefined)) {
    sql = sql + ' LIMIT ' + limit_req + ' OFFSET ' + offset_req;
  }
  db.any(sql)
    .then(data => {
      let link = "movies";
      var dataTmp = [];
      data.map((row, index, data) => {
        var imagepath = null;
        imagepath = url + link + '/img/' + data[index].fileName;
        dataTmp.push(
          {
            "id": data[index].id,
            "name": data[index].name,
            "releaseDate": data[index].releaseDate,
            "wikipediaLink": data[index].wikipediaLink,
            "img": imagepath,
            "links":
              [{
                "rel": "self",
                "href": url + link + '/' + data[index].id
              }]
          });
      })
      res.status(200)
        .json(dataTmp);
    })
    .catch(function (err) {
      return next(err);
    });
}

function getItem(req, res, next, db, url, tvshow) {
  let formatting = 'MM/DD/YYYY';
  var id = parseInt(req.params.id);
  let sql =
    'SELECT' +
    ' id' +
    ',name' +
    ',show' +
    ',movie' +
    ',to_char(release_date, \'' + formatting + '\') as "releaseDate"' +
    ',wikipedia_link as "wikipediaLink"' +
    ',file_name as "fileName"' +
    ' FROM movie t1 WHERE (t1.id = $1)';
  db.one(sql, id)
    .then(function (data) {
      let link = "movies";
      let imagepath = url + link + '/img/' + data.fileName;
      res.status(200)
        .json({
          "id": data.id,
          "name": data.name,
          "show": data.show,
          "movie": data.movie,
          "releaseDate": data.releaseDate,
          "wikipediaLink": data.wikipediaLink,
          "fileName": data.fileName,
          "img": imagepath,
        });
    })
    .catch(function (err) {
      res.status(200)
        .json({
          "id": null,
          "name": null,
          "releaseDate": null,
          "fileName": null,
          "img": null,
        });
    });
}

function createItem(req, res, next, db, url, tvshow) {
  let item = {
    name: req.body.name,
    wikipediaLink: req.body.wikipediaLink,
    fileName: req.body.fileName,
    show: tvshow,
    movie: !tvshow,
  }
  let sql =
    'INSERT INTO movie' +
    ' (' +
    ' name' +
    ',wikipedia_link' +
    ',file_name' +
    ',show' +
    ',movie' +
    ' ) VALUES' +
    ' (' +
    ' ${name}' +
    ',${wikipediaLink}' +
    ',${fileName}' +
    ',${show}' +
    ',${movie}' +
    ' ) RETURNING' +
    ' id' +
    ',name' +
    ',release_date as"releaseDate"' +
    ',wikipedia_link as"wikipediaLink"' +
    ',file_name as"fileName"' +
    ',show' +
    ',movie';
  db.one(sql, item)
    .then(function (data) {
      res.status(200)
        .json({
          "id": data.id,
          "name": data.name,
          "releaseDate": data.releaseDate,
          "fileName": data.fileName,
          "img": null,
          "show": data.show,
          "movie": data.movie,
          "wikipediaLink": data.wikipediaLink,
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateItem(req, res, next, db, url, tvshow) {
  let item = {
    id: req.body.id,
    name: req.body.name,
    show: req.body.show,
    movie: req.body.movie,
    wikipediaLink: req.body.wikipediaLink,
    fileName: req.body.fileName,
  }
  let sql =
    'UPDATE movie SET' +
    ' name=${name}' +
    ',show=${show}' +
    ',movie=${movie}' +
    ',wikipedia_link=${wikipediaLink}' +
    ',file_name=${fileName}' +
    ' WHERE id=${id}' +
    ' RETURNING' +
    ' id' +
    ',name' +
    ',release_date as"releaseDate"' +
    ',wikipedia_link as"wikipediaLink"' +
    ',file_name as"fileName"' +
    ',show' +
    ',movie';
  db.one(sql, item).then(function (data) {
    res.status(200)
      .json({
        "id": data.id,
        "name": data.name,
        "releaseDate": data.releaseDate,
        "fileName": data.fileName,
        "img": null,
        "show": data.show,
        "movie": data.movie,
        "wikipediaLink": data.wikipediaLink,
      });
  })
    .catch(function (err) {
      return next(err);
    });
}

function deleteItem(req, res, next, db, tvshow) {
  var id = parseInt(req.params.id);
  db.result('DELETE FROM movie WHERE id = $1', id)
    .then(function (result) {
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} continent`
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

/*function getItemImage(req, res, next, db, tvshow) {
  console.log('getItemImage');
  let poster = './data/images/movies/';
  var options = {
    root: poster,
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };
  var fileName = req.params.name;
  fs.exists(options.root + fileName, function (exists) {
    if (exists) {
    } else {
      fileName = '0000.jpg';
    }
    res.sendFile(fileName, options, function (err) {
      if (err) {
        next(err);
      } else {
      }
    });
  });
};*/

function getItemImage(req, res, next, db, tvshow) {
  let poster = './data/images/movies/';
  var options = {
    root: poster,
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };
  var fileName = req.params.name;
  fs.exists(options.root + fileName, function (exists) {
    if (exists) {
    } else {
      fileName = '0000.jpg';
    }
    res.sendFile(fileName, options, function (err) {
      if (err) {
        next(err);
      } else {
      }
    });
  });
};

module.exports = {
  getItemsCount: getItemsCount,
  getItems: getItems,
  getItem: getItem,
  createItem: createItem,
  updateItem: updateItem,
  deleteItem: deleteItem,
  getItemImage: getItemImage,
};
