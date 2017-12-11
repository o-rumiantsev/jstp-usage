# `metarhia-jstp` changelog

## Version 0.6.8 (2017-03-03, @aqrln)

This is a tiny semver-patch release.

Notable changes:

 * **client:** handle errors in connectAndInspect
   *(Alexey Orlenko)*
   [#106](https://github.com/metarhia/JSTP/pull/106)

All changes:

 * **client:** handle errors in connectAndInspect
   *(Alexey Orlenko)*
   [#106](https://github.com/metarhia/JSTP/pull/106)
 * **src:** fix incorrect indentation in CodePointToUtf8
   *(Alexey Orlenko)*
   [#103](https://github.com/metarhia/JSTP/pull/103)
 * **test:** add Node.js 7.8 to .travis.yml
   *(Alexey Orlenko)*
   [#119](https://github.com/metarhia/JSTP/pull/119)

## Version 0.6.7 (2017-03-14, @aqrln)

This is a bugfix release.

Notable changes:

 * **lib:** make failed addon loading more informative
   *(Alexey Orlenko)*
   [#90](https://github.com/metarhia/JSTP/pull/90)
 * **w3c-ws:** emit missing error event
   *(Alexey Orlenko)*
   [#93](https://github.com/metarhia/JSTP/pull/93)
 * **w3c-ws:** fix invalid property access
   *(Alexey Orlenko)*
   [#94](https://github.com/metarhia/JSTP/pull/94)
 * **connection:** check that method arguments exist
   *(Alexey Orlenko)*
   [#100](https://github.com/metarhia/JSTP/pull/100)

All changes:

 * **doc:** fix linter warning in CHANGELOG.md
   *(Alexey Orlenko)*
   [#80](https://github.com/metarhia/JSTP/pull/80)
 * **tools:** remove crlf.js from dot-ignore files
   *(Alexey Orlenko)*
   [#83](https://github.com/metarhia/JSTP/pull/83)
 * **npm:** don't include doc/ and mkdocs.yml to package
   *(Alexey Orlenko)*
   [#82](https://github.com/metarhia/JSTP/pull/82)
 * **doc:** add session WG meeting
   *(Mykola Bilochub)*
   [#81](https://github.com/metarhia/JSTP/pull/81)
 * **lint:** update remark
   *(Alexey Orlenko)*
   [#87](https://github.com/metarhia/JSTP/pull/87)
 * **test:** add Node.js 6.10 and 7.6 to .travis.yml
   *(Alexey Orlenko)*
   [#86](https://github.com/metarhia/JSTP/pull/86)
 * **tools:** move build-native.js to tools
   *(Alexey Orlenko)*
   [#89](https://github.com/metarhia/JSTP/pull/89)
 * **lib:** make failed addon loading more informative
   *(Alexey Orlenko)*
   [#90](https://github.com/metarhia/JSTP/pull/90)
 * **w3c-ws:** emit missing error event
   *(Alexey Orlenko)*
   [#93](https://github.com/metarhia/JSTP/pull/93)
 * **w3c-ws:** fix invalid property access
   *(Alexey Orlenko)*
   [#94](https://github.com/metarhia/JSTP/pull/94)
 * **test:** add Node.js 7.7 to .travis.yml
   *(Alexey Orlenko)*
   [#95](https://github.com/metarhia/JSTP/pull/95)
 * **connection:** change style of a forward declaration
   *(Alexey Orlenko)*
   [#96](https://github.com/metarhia/JSTP/pull/96)
 * **lib:** change multiline function signatures style
   *(Alexey Orlenko)*
   [#97](https://github.com/metarhia/JSTP/pull/97)
 * **tools:** generate authors list automatically
   *(Alexey Orlenko)*
   [#88](https://github.com/metarhia/JSTP/pull/88)
 * **meta:** update AUTHORS and .mailmap
   *(Alexey Orlenko)*
   [#88](https://github.com/metarhia/JSTP/pull/88)
 * **meta:** fix misleading language in LICENSE
   *(Alexey Orlenko)*
   [#88](https://github.com/metarhia/JSTP/pull/88)
 * **connection:** check that method arguments exist
   *(Alexey Orlenko)*
   [#100](https://github.com/metarhia/JSTP/pull/100)

## Version 0.6.6 (2017-02-20, @aqrln)

This is mostly a bugfix release. Additionally, parser performance is improved.

Notable changes:

 * **server:** clean internal structures on close
   *(Alexey Orlenko)*
   [#59](https://github.com/metarhia/JSTP/pull/59)
 * **src,build:** add missing header
   *(Mykola Bilochub)*
   [#64](https://github.com/metarhia/JSTP/pull/64)
 * **parser:** make parser single-pass
   *(Mykola Bilochub)*
   [#61](https://github.com/metarhia/JSTP/pull/61)
 * **lib:** fix behavior with util.inspect
   *(Alexey Orlenko)*
   [#72](https://github.com/metarhia/JSTP/pull/72)
 * **parser:** fix bug causing node to crash
   *(Mykola Bilochub)*
   [#75](https://github.com/metarhia/JSTP/pull/75)
 * **server:** handle connection errors before handshake
   *(Alexey Orlenko)*
   [#78](https://github.com/metarhia/JSTP/pull/78)
 * **connection:** close connection on transport error
   *(Alexey Orlenko)*
   [#78](https://github.com/metarhia/JSTP/pull/78)

All changes:

 * **server:** clean internal structures on close
   *(Alexey Orlenko)*
   [#59](https://github.com/metarhia/JSTP/pull/59)
 * **src,build:** add missing header
   *(Mykola Bilochub)*
   [#64](https://github.com/metarhia/JSTP/pull/64)
 * **src:** add curly braces in `switch` statements
   *(Mykola Bilochub)*
   [#62](https://github.com/metarhia/JSTP/pull/62)
 * **build:** fail CI if native addon build fails
   *(Alexey Orlenko)*
   [#65](https://github.com/metarhia/JSTP/pull/65)
 * **parser:** make parser single-pass
   *(Mykola Bilochub)*
   [#61](https://github.com/metarhia/JSTP/pull/61)
 * **src:** fix single-line comment spacing
   *(Mykola Bilochub)*
   [#67](https://github.com/metarhia/JSTP/pull/67)
 * **parser:** improve string parsing
   *(Mykola Bilochub)*
   [#66](https://github.com/metarhia/JSTP/pull/66)
 * **src:** fix inconsistency in empty string creation
   *(Mykola Bilochub)*
   [#70](https://github.com/metarhia/JSTP/pull/70)
 * **doc:** document protocol versioning policy
   *(Alexey Orlenko)*
   [#56](https://github.com/metarhia/JSTP/pull/56)
 * **lib:** fix behavior with util.inspect
   *(Alexey Orlenko)*
   [#72](https://github.com/metarhia/JSTP/pull/72)
 * **deps,build:** update webpack to 2.x
   *(Alexey Orlenko)*
   [#73](https://github.com/metarhia/JSTP/pull/73)
 * **build,test:** avoid unnecessary recompiling
   *(Alexey Orlenko)*
   [#74](https://github.com/metarhia/JSTP/pull/74)
 * **doc:** update badges in README.md and doc/index.md
   *(Alexey Orlenko)*
   [#71](https://github.com/metarhia/JSTP/pull/71)
 * **parser:** fix bug causing node to crash
   *(Mykola Bilochub)*
   [#75](https://github.com/metarhia/JSTP/pull/75)
 * **tools:** automate the release preparation
   *(Alexey Orlenko)*
   [#77](https://github.com/metarhia/JSTP/pull/77)
 * **server:** handle connection errors before handshake
   *(Alexey Orlenko)*
   [#78](https://github.com/metarhia/JSTP/pull/78)
 * **connection:** close connection on transport error
   *(Alexey Orlenko)*
   [#78](https://github.com/metarhia/JSTP/pull/78)

## Version 0.5.2 (2017-03-03, @aqrln)

This is a backport release that brings the most essential changes and bugfixes
from v0.6 to currently used in at least one real project v0.5.

Notable changes:

 * **parser:** fix memory leaks
   *(Alexey Orlenko)*
   [371f7dd](https://github.com/metarhia/JSTP/commit/371f7ddc79e1728a3139cfb1734aa2d11d8197e9)
 * **parser:** fix bugs in JSRS parser
   *(Alexey Orlenko)*
   [#109](https://github.com/metarhia/JSTP/pull/109)
 * **src,build:** improve the native module subsystem
   *(Alexey Orlenko)*
   [#110](https://github.com/metarhia/JSTP/pull/110)
   **\[semver-minor\]**
 * **build:** compile in ISO C++11 mode
   *(Alexey Orlenko)*
   [#37](https://github.com/metarhia/JSTP/pull/37)
   **\[semver-minor\]**
 * **parser:** fix a possible memory leak
   *(Alexey Orlenko)*
   [#44](https://github.com/metarhia/JSTP/pull/44)
 * **parser:** make parser single-pass
   *(Mykola Bilochub)*
   [#61](https://github.com/metarhia/JSTP/pull/61)
 * **parser:** improve string parsing
   *(Mykola Bilochub)*
   [#66](https://github.com/metarhia/JSTP/pull/66)
 * **parser:** fix bug causing node to crash
   *(Mykola Bilochub)*
   [#75](https://github.com/metarhia/JSTP/pull/75)
 * **connection:** check that method arguments exist
   *(Alexey Orlenko)*
   [#100](https://github.com/metarhia/JSTP/pull/100)

All changes:

 * **parser:** fix memory leaks
   *(Alexey Orlenko)*
   [371f7dd](https://github.com/metarhia/JSTP/commit/371f7ddc79e1728a3139cfb1734aa2d11d8197e9)
 * **parser:** fix bugs in JSRS parser
   *(Alexey Orlenko)*
   [#109](https://github.com/metarhia/JSTP/pull/109)
 * **parser:** fix compiler warnings
   *(Alexey Orlenko)*
   [851a2c6](https://github.com/metarhia/JSTP/commit/851a2c695ca48cc6d5f606756a54bdb571f94f59)
 * **examples:** fix inconsistency with specification
   *(Alexey Orlenko)*
   [05461bf](https://github.com/metarhia/JSTP/commit/05461bfb133e0adbb12e5db5338e9c0754213647)
 * **lint:** ignore Object Serialization examples
   *(Alexey Orlenko)*
   [94609f0](https://github.com/metarhia/JSTP/commit/94609f01e081e844fa66598ee2dea541368a733b)
 * **dist**: update LICENSE
   *(Alexey Orlenko)*
   [8c5f830](https://github.com/metarhia/JSTP/commit/8c5f83097e75a1af065e861b5453a684e33d1fc5)
 * **src:** simplify and update license boilerplates
   *(Alexey Orlenko)*
   [16b1e95](https://github.com/metarhia/JSTP/commit/16b1e9597133e85429be0cbaf3d3fe9e7ea58b15)
 * **test:** add Node.js 7.3 and 7.4 to .travis.yml
   *(Alexey Orlenko)*
   [fa722e7](https://github.com/metarhia/JSTP/commit/fa722e7ee0a36f65c985e9570d0f234503e70de4)
 * **src,build:** improve the native module subsystem
   *(Alexey Orlenko)*
   [#110](https://github.com/metarhia/JSTP/pull/110)
   **\[semver-minor\]**
 * **src,build:** add missing header
   *(Mykola Bilochub)*
   [#64](https://github.com/metarhia/JSTP/pull/64)
 * **build:** compile in ISO C++11 mode
   *(Alexey Orlenko)*
   [#37](https://github.com/metarhia/JSTP/pull/37)
   **\[semver-minor\]**
 * **doc:** document versioning policy
   *(Alexey Orlenko)*
   [#42](https://github.com/metarhia/JSTP/pull/42)
 * **parser:** fix a possible memory leak
   *(Alexey Orlenko)*
   [#44](https://github.com/metarhia/JSTP/pull/44)
 * **test:** add Node.js 7.5 to .travis.yml
   *(Alexey Orlenko)*
   [#47](https://github.com/metarhia/JSTP/pull/47)
 * **doc:** fix a typo in protocol.md
   *(Alexey Orlenko)*
   [#55](https://github.com/metarhia/JSTP/pull/55)
 * **server:** clean internal structures on close
   *(Alexey Orlenko)*
   [#59](https://github.com/metarhia/JSTP/pull/59)
 * **src:** add curly braces in `switch` statements
   *(Mykola Bilochub)*
   [#62](https://github.com/metarhia/JSTP/pull/62)
 * **parser:** make parser single-pass
   *(Mykola Bilochub)*
   [#61](https://github.com/metarhia/JSTP/pull/61)
 * **src:** fix single-line comment spacing
   *(Mykola Bilochub)*
   [#67](https://github.com/metarhia/JSTP/pull/67)
 * **parser:** improve string parsing
   *(Mykola Bilochub)*
   [#66](https://github.com/metarhia/JSTP/pull/66)
 * **src:** fix inconsistency in empty string creation
   *(Mykola Bilochub)*
   [#70](https://github.com/metarhia/JSTP/pull/70)
 * **doc:** document protocol versioning policy
   *(Alexey Orlenko)*
   [#56](https://github.com/metarhia/JSTP/pull/56)
 * **parser:** fix bug causing node to crash
   *(Mykola Bilochub)*
   [#75](https://github.com/metarhia/JSTP/pull/75)
 * **connection:** close connection on transport error
   *(Alexey Orlenko)*
   [#78](https://github.com/metarhia/JSTP/pull/78)
 * **doc:** fix mistyped repository name
   *(Alexey Orlenko)*
   [#111](https://github.com/metarhia/JSTP/pull/111)
 * **test:** fix typos in connection.test.js
   *(Alexey Orlenko)*
   [#112](https://github.com/metarhia/JSTP/pull/112)
 * **tools:** remove crlf.js from dot-ignore files
   *(Alexey Orlenko)*
   [#83](https://github.com/metarhia/JSTP/pull/83)
 * **npm:** don't include doc/ and mkdocs.yml to package
   *(Alexey Orlenko)*
   [#82](https://github.com/metarhia/JSTP/pull/82)
 * **test:** add Node.js 6.10 and 7.6 to .travis.yml
   *(Alexey Orlenko)*
   [#86](https://github.com/metarhia/JSTP/pull/86)
 * **w3c-ws:** emit missing error event
   *(Alexey Orlenko)*
   [#93](https://github.com/metarhia/JSTP/pull/93)
 * **test:** add Node.js 7.7 to .travis.yml
   *(Alexey Orlenko)*
   [#95](https://github.com/metarhia/JSTP/pull/95)
 * **lib:** fix behavior with util.inspect
   *(Alexey Orlenko)*
   [#114](https://github.com/metarhia/JSTP/pull/114)
 * **server:** handle connection errors before handshake
   *(Alexey Orlenko)*
   [#115](https://github.com/metarhia/JSTP/pull/115)
 * **w3c-ws:** fix invalid property access
   *(Alexey Orlenko)*
   [#116](https://github.com/metarhia/JSTP/pull/116)
 * **src:** fix incorrect indentation in CodePointToUtf8
   *(Alexey Orlenko)*
   [#103](https://github.com/metarhia/JSTP/pull/103)
 * **connection:** check that method arguments exist
   *(Alexey Orlenko)*
   [#100](https://github.com/metarhia/JSTP/pull/100)
 * **meta:** update AUTHORS and .mailmap
   *(Alexey Orlenko)*
   [#117](https://github.com/metarhia/JSTP/pull/117)
 * **meta:** fix misleading language in LICENSE
   *(Alexey Orlenko)*
   [#117](https://github.com/metarhia/JSTP/pull/117)
 * **connection:** handle optional callbacks properly
   *(Alexey Orlenko)*
   [#113](https://github.com/metarhia/JSTP/pull/113)
 * **test:** add Node.js 7.8 to .travis.yml
   *(Alexey Orlenko)*
   [#119](https://github.com/metarhia/JSTP/pull/119)
 * **lint:** add bitHound config
   *(Alexey Orlenko)*
   [#120](https://github.com/metarhia/JSTP/pull/120)
 * **lib:** decouple ensureClientConnected()
   *(Alexey Orlenko)*
   [#120](https://github.com/metarhia/JSTP/pull/120)
 * **client:** handle errors in connectAndInspect
   *(Alexey Orlenko)*
   [#120](https://github.com/metarhia/JSTP/pull/120)
 * **test:** refactor RawServerMock
   *(Alexey Orlenko)*
   [#120](https://github.com/metarhia/JSTP/pull/120)
 * **deps:** update dependencies
   *(Alexey Orlenko)*
   [#120](https://github.com/metarhia/JSTP/pull/120)
