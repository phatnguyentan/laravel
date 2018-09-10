export function Mixins(baseCtors) {
  return function(derivedCtor) {
    baseCtors.forEach(baseCtor => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
        const descriptor = Object.getOwnPropertyDescriptor(
          baseCtor.prototype,
          name
        );

        if (name === "constructor") return;

        if (
          descriptor &&
          (!descriptor.writable ||
            !descriptor.configurable ||
            !descriptor.enumerable ||
            descriptor.get ||
            descriptor.set)
        ) {
          Object.defineProperty(derivedCtor.prototype, name, descriptor);
        } else {
          derivedCtor.prototype[name] = baseCtor.prototype[name];
        }
      });
    });
  };
}
