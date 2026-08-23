#!/usr/bin/env bash
set -euo pipefail

root_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$root_dir"

required_files=(
    .github/workflows/build.yml
    .github/workflows/release.yml
    .github/workflows/syncNext.yml
    .github/workflows/tagAndRelease.yml
    Makefile
    package-lock.json
    pnpm-lock.yaml
    startos/manifest/index.ts
    startos/utils.ts
    startos/versions/current.ts
    startos/versions/index.ts
)

for path in "${required_files[@]}"; do
    test -f "$path" || { echo "missing required file: $path" >&2; exit 1; }
done

package_version="$(sed -n "s/.*version: '\([^']*\)'.*/\1/p" startos/versions/current.ts | head -1)"
app_version="$(sed -n "s/^export const appVersion = '\([^']*\)';/\1/p" startos/utils.ts | head -1)"

[[ "$package_version" =~ ^[0-9]+\.[0-9]+\.[0-9]+:[0-9]+$ ]] || {
    echo "invalid StartOS ExVer: $package_version" >&2
    exit 1
}
test "${package_version%%:*}" = "$app_version" || {
    echo "StartOS version $package_version does not match app version $app_version" >&2
    exit 1
}

grep -Fq "id: 'hashrate-autopilot'" startos/manifest/index.ts
grep -Fq "https://github.com/Start9-Community/hashrate-autopilot-startos" startos/manifest/index.ts package.json
grep -Fq "ARCHES := x86 arm" Makefile
grep -Fq "include node_modules/@start9labs/start-sdk/s9pk.mk" Makefile
test ! -e s9pk.mk
test "$(node -p "require('./package.json').dependencies['@start9labs/start-sdk']")" = "2.0.9"

grep -Fq "Start9Labs/start-technologies/.github/workflows/build.yml@master" .github/workflows/build.yml
grep -Fq "Start9Labs/start-technologies/.github/workflows/release.yml@master" .github/workflows/release.yml
grep -Fq "Start9Labs/start-technologies/.github/workflows/syncNext.yml@master" .github/workflows/syncNext.yml
grep -Fq "Start9Labs/start-technologies/.github/workflows/tagAndRelease.yml@master" .github/workflows/tagAndRelease.yml

echo "StartOS Community submission contract passed for $package_version ($app_version)."
