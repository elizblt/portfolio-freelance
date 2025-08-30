module.exports = {
  extends: ["@commitlint/config-conventional"],
  ignores: [
    // ignore les commits de merge/squash GitHub
    (msg) => /^Merge /.test(msg) || /\(#\d+\)$/.test(msg),
  ],
};
