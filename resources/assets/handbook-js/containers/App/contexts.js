import React, { Component } from "react";

export const ConfigContext = React.createContext({ name: "Config" });

export const ApiContext = React.createContext({
  name: "Api"
});
