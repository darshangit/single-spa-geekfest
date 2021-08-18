import { registerApplication, start } from "single-spa";



registerApplication({
  name: "@Dash/ss-navbar",
  app: () => System.import("@Dash/ss-navbar"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@Dash/ss-films",
  app: () => System.import("@Dash/ss-films"),
  activeWhen: ["/movies"]
});

registerApplication({
  name: "@Dash/ss-starwars-planets",
  app: () => System.import("@Dash/ss-starwars-planets"),
  activeWhen: ["/planets"]
});

start({
  urlRerouteOnly: true,
});
