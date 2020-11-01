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
  if (q != undefined) {
    sql = sql +
      'AND (' +
      '(UPPER(name) LIKE \'%' + q + '%\')' +
      ')';
  }
  sql = sql +
    ' ORDER BY release_date ASC';
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
  getItemImage: getItemImage,
};
