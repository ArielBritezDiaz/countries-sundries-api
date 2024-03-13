import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import './chunks/astro_Drdr-_T1.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","isIndex":false,"route":"/404","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/@astrojs/starlight/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CZ0TFQCk.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_astro/ec.jf3r4.css","pattern":"^\\/_astro\\/ec\\.jf3r4\\.css$","segments":[[{"content":"_astro","dynamic":false,"spread":false}],[{"content":"ec.jf3r4.css","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro-expressive-code/routes/styles.ts","pathname":"/_astro/ec.jf3r4.css","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CZ0TFQCk.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_astro/ec.sgewm.js","pattern":"^\\/_astro\\/ec\\.sgewm\\.js$","segments":[[{"content":"_astro","dynamic":false,"spread":false}],[{"content":"ec.sgewm.js","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro-expressive-code/routes/scripts.ts","pathname":"/_astro/ec.sgewm.js","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CZ0TFQCk.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CZ0TFQCk.js"}],"styles":[{"type":"external","src":"/_astro/index.CUMaIQr2.css"}],"routeData":{"route":"/profile","isIndex":false,"type":"page","pattern":"^\\/profile\\/?$","segments":[[{"content":"profile","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/profile.astro","pathname":"/profile","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/pages/profile.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/node_modules/@astrojs/starlight/404.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:node_modules/@astrojs/starlight/404@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/node_modules/@astrojs/starlight/utils/routing.ts",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/node_modules/@astrojs/starlight/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:node_modules/@astrojs/starlight/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/node_modules/@astrojs/starlight/utils/navigation.ts",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/node_modules/@astrojs/starlight/components/SidebarSublist.astro",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/node_modules/@astrojs/starlight/components/Sidebar.astro",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:starlight/components/Sidebar",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/node_modules/@astrojs/starlight/components/Page.astro",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/node_modules/@astrojs/starlight/utils/route-data.ts",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/node_modules/@astrojs/starlight/utils/translations.ts",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/node_modules/@astrojs/starlight/user-components/Aside.astro",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/node_modules/@astrojs/starlight/components.ts",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/components/api-endpoints/coat-of-arm/all/all-response.coat-of-arm.astro",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-docs/coat-of-arm.mdx",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-docs/coat-of-arm.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/components/api-endpoints/coat-of-arm/details/details-response.coat-of-arm.astro",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/components/api-endpoints/code-example.astro",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-docs/country.mdx",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-docs/country.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-docs/currency.mdx",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-docs/currency.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-docs/flag.mdx",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-docs/flag.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-docs/region.mdx",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-docs/region.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-docs/sub-region.mdx",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-docs/sub-region.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/introduction/getting-started.mdx",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/introduction/getting-started.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/components/api-endpoints/country/all/all-response.country.astro",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/components/api-endpoints/country/details/details-response.country.astro",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/components/api-endpoints/currency/all/all-response.currency.astro",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/components/api-endpoints/currency/details/details-response.currency.astro",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/components/api-endpoints/flag/all/all-response.flag.astro",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/components/api-endpoints/flag/details/details-response.flag.astro",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/components/api-endpoints/image/coat-of-arm/coat-of-arm-code-example.image.astro",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-docs/image.mdx",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-docs/image.mdx?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/components/api-endpoints/image/flag/flag-code-example.image.astro",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/components/api-endpoints/region/all-response.region.astro",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/components/api-endpoints/sub-region/all-response.sub-region.astro",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/components/aside/note/details-query-params.astro",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/components/aside/note/global-header-params.astro",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/components/aside/note/global-query-params.astro",{"propagation":"in-tree","containsHead":false}],["/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/components/getting-started/getting-started-fetch/response.getting-started.astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro-expressive-code/routes/scripts.ts":"chunks/pages/scripts_DRMj9b1K.mjs","/node_modules/astro-expressive-code/routes/styles.ts":"chunks/pages/styles_mAYcEoSs.mjs","\u0000@astrojs-manifest":"manifest_DNK9kOwU.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro-expressive-code/routes/styles@_@ts":"chunks/styles_BTV7KU3S.mjs","\u0000@astro-page:node_modules/astro-expressive-code/routes/scripts@_@ts":"chunks/scripts_BnhbUhZ1.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_DWE4J59e.mjs","\u0000@astro-page:node_modules/@astrojs/starlight/404@_@astro":"chunks/404_D_OLR66U.mjs","\u0000@astro-page:src/pages/profile@_@astro":"chunks/profile_DWEBdjbD.mjs","\u0000@astro-page:node_modules/@astrojs/starlight/index@_@astro":"chunks/index_Hh4cur6x.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-docs/coat-of-arm.mdx?astroContentCollectionEntry=true":"chunks/coat-of-arm_OtcnDZXI.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-docs/country.mdx?astroContentCollectionEntry=true":"chunks/country_CPbXVvOj.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-docs/currency.mdx?astroContentCollectionEntry=true":"chunks/currency_BqjkdJl2.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-docs/flag.mdx?astroContentCollectionEntry=true":"chunks/flag_jVrHuDIz.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-docs/image.mdx?astroContentCollectionEntry=true":"chunks/image_DOQ7PnaS.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-docs/region.mdx?astroContentCollectionEntry=true":"chunks/region_BSCTemcv.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-docs/sub-region.mdx?astroContentCollectionEntry=true":"chunks/sub-region_DDA0fIF4.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-reference/global-header-parameters.mdx?astroContentCollectionEntry=true":"chunks/global-header-parameters_BFIRXG26.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-reference/global-query-parameters.mdx?astroContentCollectionEntry=true":"chunks/global-query-parameters_DTmAGrGG.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/changelog/changelog.mdx?astroContentCollectionEntry=true":"chunks/changelog_BykbMCLm.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/introduction/get-api-key.mdx?astroContentCollectionEntry=true":"chunks/get-api-key_jGd6PB-F.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/introduction/getting-started.mdx?astroContentCollectionEntry=true":"chunks/getting-started_CdgPRxRb.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/introduction/overview.mdx?astroContentCollectionEntry=true":"chunks/overview_QxTh5fyD.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/introduction/supported-data.mdx?astroContentCollectionEntry=true":"chunks/supported-data_xTpNnkFV.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/project/history.mdx?astroContentCollectionEntry=true":"chunks/history_UtsH8aTy.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/project/technologies.mdx?astroContentCollectionEntry=true":"chunks/technologies_DgEwr8iq.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/sign-up/auto.mdx?astroContentCollectionEntry=true":"chunks/auto_d5orKPzK.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/sign-up/manual.mdx?astroContentCollectionEntry=true":"chunks/manual_By8i6RBO.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/index.mdx?astroContentCollectionEntry=true":"chunks/index_B2hYdozB.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-docs/coat-of-arm.mdx?astroPropagatedAssets":"chunks/coat-of-arm_fVcr3FFO.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-docs/country.mdx?astroPropagatedAssets":"chunks/country_DClJNCZt.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-docs/currency.mdx?astroPropagatedAssets":"chunks/currency_CkFhU1w7.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-docs/flag.mdx?astroPropagatedAssets":"chunks/flag_CzT-jMFG.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-docs/image.mdx?astroPropagatedAssets":"chunks/image_D1Jz9iFU.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-docs/region.mdx?astroPropagatedAssets":"chunks/region_CmOihxX_.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-docs/sub-region.mdx?astroPropagatedAssets":"chunks/sub-region_DH-p-T-d.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-reference/global-header-parameters.mdx?astroPropagatedAssets":"chunks/global-header-parameters_g6iPWHWM.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-reference/global-query-parameters.mdx?astroPropagatedAssets":"chunks/global-query-parameters_DL1bbnKz.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/changelog/changelog.mdx?astroPropagatedAssets":"chunks/changelog_DFB-O6zh.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/introduction/get-api-key.mdx?astroPropagatedAssets":"chunks/get-api-key_Bzq2O1JK.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/introduction/getting-started.mdx?astroPropagatedAssets":"chunks/getting-started_D50dsjHB.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/introduction/overview.mdx?astroPropagatedAssets":"chunks/overview_DiarogMr.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/introduction/supported-data.mdx?astroPropagatedAssets":"chunks/supported-data_Ba5H_mS6.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/project/history.mdx?astroPropagatedAssets":"chunks/history_C1zZLNbS.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/project/technologies.mdx?astroPropagatedAssets":"chunks/technologies_BK22xrtH.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/sign-up/auto.mdx?astroPropagatedAssets":"chunks/auto_DSJM30i7.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/sign-up/manual.mdx?astroPropagatedAssets":"chunks/manual_DU2TDCIU.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/index.mdx?astroPropagatedAssets":"chunks/index_C8b0t3ut.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-docs/coat-of-arm.mdx":"chunks/coat-of-arm_DtR7O5KY.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-docs/country.mdx":"chunks/country_CsWotGtv.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-docs/currency.mdx":"chunks/currency_DvgTGQye.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-docs/flag.mdx":"chunks/flag_BnK4pBSi.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-docs/image.mdx":"chunks/image_Bq2KXXtJ.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-docs/region.mdx":"chunks/region_DTdyTk-Y.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-docs/sub-region.mdx":"chunks/sub-region_VYJDMoS5.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-reference/global-header-parameters.mdx":"chunks/global-header-parameters_DYbluAh6.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/api-reference/global-query-parameters.mdx":"chunks/global-query-parameters_BuBwk3ft.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/changelog/changelog.mdx":"chunks/changelog_C9kTNPuY.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/introduction/get-api-key.mdx":"chunks/get-api-key_ByfL6t5G.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/introduction/getting-started.mdx":"chunks/getting-started_DuuIVE4_.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/introduction/overview.mdx":"chunks/overview_BE8MJE-q.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/introduction/supported-data.mdx":"chunks/supported-data_DtnY3g-y.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/project/history.mdx":"chunks/history_BPemSf6k.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/project/technologies.mdx":"chunks/technologies_DX55RnOS.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/sign-up/auto.mdx":"chunks/auto_BPptFTQ4.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/docs/sign-up/manual.mdx":"chunks/manual_BhhNdZm-.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/content/docs/index.mdx":"chunks/index_DoiCe409.mjs","\u0000virtual:astro-expressive-code/config":"chunks/config_FERd3ZNP.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/node_modules/astro-expressive-code/dist/index.js":"chunks/index_9zkspGi6.mjs","\u0000virtual:astro-expressive-code/preprocess-config":"chunks/preprocess-config_ZwO-SzyF.mjs","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/node_modules/@astrojs/starlight/user-components/Tabs.astro?astro&type=script&index=0&lang.ts":"_astro/Tabs.astro_astro_type_script_index_0_lang.BqK4QFew.js","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/src/components/sign-up/google.astro?astro&type=script&index=0&lang.ts":"_astro/google.astro_astro_type_script_index_0_lang.oQCVZvzI.js","astro:scripts/page.js":"_astro/page.CZ0TFQCk.js","/astro/hoisted.js?q=0":"_astro/hoisted.bf4k8FkQ.js","@astrojs/svelte/client.js":"_astro/client.Cx1FBVJX.js","/home/arieldiaz/Desktop/dev/code/personal/countriesSundriesApi/src/documentation/node_modules/@pagefind/default-ui/npm_dist/mjs/ui-core.mjs":"_astro/ui-core.CwbtRWDf.js","@astrojs/react/client.js":"_astro/client.CwWKiGVO.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/logo.BFHzUuZY.svg","/_astro/lexend-latin-500-normal.BwhcOHUL.ttf","/_astro/lexend-latin-400-normal.CgsMxyy9.ttf","/_astro/lexend-latin-300-normal.aR_kZFM5.ttf","/_astro/flag.DKZ1FzEJ.svg","/_astro/V3.QYNwFmCd.svg","/_astro/argentina.C4ZdPKk4.svg","/_astro/argentina.DqephIOL.svg","/_astro/from.DRrFItE-.svg","/_astro/take.DXwJAgRK.svg","/_astro/starlight.CbNaNyaU.webp","/_astro/index.SFRERTne.css","/_astro/index.CUMaIQr2.css","/favicon.svg","/_astro/Tabs.astro_astro_type_script_index_0_lang.BqK4QFew.js","/_astro/client.CwWKiGVO.js","/_astro/client.Cx1FBVJX.js","/_astro/google.astro_astro_type_script_index_0_lang.oQCVZvzI.js","/_astro/hoisted.bf4k8FkQ.js","/_astro/page.CZ0TFQCk.js","/_astro/ui-core.CwbtRWDf.js","/docs/api-docs/country/query-parameters/from.svg","/docs/api-docs/country/query-parameters/take.svg","/docs/api-docs/flag/query-parameters/from.svg","/docs/api-docs/flag/query-parameters/take.svg","/docs/api-docs/image/coat-of-arm/argentina.svg","/docs/api-docs/image/flag/argentina.svg","/_astro/page.CZ0TFQCk.js","/404.html"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
