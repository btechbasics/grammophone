import utf8 from "utf8";

export const DEFAULT_SPEC = "# Type a grammar here:\n\n";

export function encode(spec) {
  return btoa(utf8.encode(spec));
}

export function decode(spec) {
  return utf8.decode(atob(spec));
}

export function getURLSearchParamSpec(search) {
  const spec = new URLSearchParams(search).get("s")?.replaceAll(" ", "+");

  if (spec) {
    try {
      return decode(spec);
    } catch (error) {
      console.error(error);

      return DEFAULT_SPEC;
    }
  } else {
    return DEFAULT_SPEC;
  }
}

export function copySpecLink(spec) {
  const url = `${window.location.origin}${window.location.pathname}?s=${encode(spec)}`;

  return navigator.clipboard.writeText(url);
}
