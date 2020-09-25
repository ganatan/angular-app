export function functionExport1(param: string): any {
  return 'functionExport1 : ' + param;
}

function function2(): any {
  return 'function2';
}

function function3(): any {
  return 'function3';
}

export {
  functionExport1 as function1,
  function2,
  function3
};
