import angular from "angular";

class base {

  static properties () {
    return [];
  }

  // TODO: resolve complexity issue
  // eslint-disable-next-line complexity
  static validate(o, cb, conc) {
    if (angular.isArray(cb)) {
      cb = null;
      conc = cb;
    }
    if (!cb)
      cb = (p,o) => {
        return !(String(o[p]) === "");
      };
    let props = this.properties();
    if (conc)
      props = props.concat(conc);
    for (let p of props) {
      if (!o.hasOwnProperty(p) || !cb.call(this,p,o,props)) {
        return false;
      }
    }
    return true;
  }

  static resolvePrivateKey(pk) {
    if (angular.isObject(pk)) {
      if (pk.pk)
        pk = pk.pk;
      else
        return null;
    }
    if (isNaN(pk))
      return null;
    return pk;
  }
  constructor() {}
}

export default base;
