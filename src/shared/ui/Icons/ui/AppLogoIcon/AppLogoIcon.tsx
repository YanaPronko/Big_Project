/* eslint-disable max-len */
import { memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { IconProps } from "@/shared/types/ui";

/**
 * @description
 * it's wrapper for svg icon
 */

export const AppLogoIcon = memo((props: IconProps) => {
  const { className, ...otherProps } = props;

  return (
    <svg
      width="100"
      height="200"
      viewBox="0 0 100 200"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames("", {}, [className])}
      {...otherProps}
    >
      <g
        transform="translate(0.000000,920.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M3711 8385 c-38 -14 -79 -39 -103 -62 -77 -75 -191 -281 -212 -383
-4 -19 -11 -91 -16 -160 -5 -69 -12 -152 -15 -185 -5 -57 -4 -56 14 25 13 62
19 75 20 50 1 -19 8 -64 16 -99 9 -35 14 -66 11 -68 -2 -2 -36 -7 -75 -10 -45
-4 -67 -9 -59 -14 10 -7 9 -9 -5 -9 -10 0 -20 -7 -23 -15 -4 -8 -12 -15 -20
-15 -22 0 -40 -76 -26 -114 7 -18 12 -41 12 -51 0 -17 -1 -17 -21 1 -42 38
-52 88 -29 150 6 14 6 23 1 19 -5 -3 -17 -25 -27 -50 -14 -37 -15 -49 -4 -75
10 -24 10 -40 0 -77 -7 -29 -13 -154 -16 -313 l-4 -265 -35 -95 c-24 -62 -45
-147 -61 -245 -30 -178 -42 -230 -95 -394 -22 -68 -38 -126 -35 -128 7 -7 31
53 68 169 17 54 32 97 34 95 2 -1 -5 -45 -16 -97 -24 -115 -35 -229 -26 -264
5 -21 12 -26 36 -26 17 0 30 5 30 10 0 6 -9 10 -21 10 -20 0 -21 3 -14 83 4
45 12 93 17 107 5 14 12 40 14 58 2 17 6 47 9 65 3 17 7 50 10 72 3 22 8 47
11 55 4 8 8 49 11 90 3 41 10 81 16 89 9 11 9 15 1 18 -12 4 0 82 14 93 4 3 7
11 8 18 2 29 5 33 17 26 7 -5 6 0 -3 11 -8 10 -10 16 -3 12 7 -5 13 10 18 45
4 28 14 67 22 87 11 26 16 88 20 221 2 102 6 199 9 217 6 44 45 87 100 114 43
20 104 35 104 24 0 -2 -34 -27 -75 -55 -85 -58 -102 -79 -103 -135 -1 -30 1
-35 7 -20 5 11 20 32 34 48 23 24 34 27 94 29 44 1 54 3 28 5 -31 3 -43 10
-52 28 -10 23 -8 28 27 55 44 35 78 90 55 90 -8 0 -30 -9 -49 -21 -19 -11 -40
-18 -45 -15 -16 10 -4 100 18 139 25 45 25 45 6 49 -13 3 -13 6 -1 30 13 25
13 29 -2 39 -13 7 6 9 69 5 154 -9 330 -100 411 -212 17 -24 33 -42 36 -40 2
3 -21 38 -52 78 -54 68 -57 75 -52 118 2 25 5 52 6 60 1 10 4 8 9 -5 8 -18 17
-20 80 -19 63 2 75 6 94 27 12 13 30 27 40 30 12 5 17 17 17 44 -1 32 -2 35
-11 20 -9 -15 -22 -18 -79 -15 -63 3 -67 4 -53 20 8 9 32 20 54 23 53 9 50 24
-3 18 -55 -7 -156 -54 -186 -86 -15 -15 -25 -42 -29 -75 -3 -29 -8 -52 -10
-52 -19 0 -63 38 -64 55 -4 77 -22 125 -45 125 -7 0 -30 11 -50 25 -20 14 -45
25 -55 25 -10 0 -21 5 -24 10 -3 6 -2 10 4 10 6 0 8 6 6 13 -3 6 -2 46 2 87
l8 75 67 35 c62 32 101 62 136 104 7 9 17 16 21 16 13 0 86 -93 83 -105 -2 -5
-1 -7 3 -3 4 3 28 -13 53 -38 26 -24 52 -44 58 -44 7 0 14 -6 17 -14 3 -7 27
-26 54 -41 61 -36 64 -40 103 -108 35 -62 40 -104 19 -157 -19 -48 -80 -140
-125 -189 -20 -23 -34 -41 -30 -42 46 -8 104 32 144 100 14 24 37 79 49 120
21 68 23 71 19 29 -6 -49 -62 -208 -74 -208 -10 0 -32 -52 -26 -61 3 -5 0 -9
-5 -9 -6 0 -11 -6 -11 -13 0 -13 -41 -66 -89 -114 -13 -13 -21 -26 -19 -28 2
-2 39 30 81 72 90 90 103 84 20 -9 -32 -35 -67 -75 -78 -88 -11 -14 -31 -26
-44 -27 -22 -2 -22 -1 -7 16 9 10 16 22 16 27 0 4 -6 0 -14 -11 -7 -11 -13
-24 -12 -29 0 -5 -21 -20 -49 -32 -36 -17 -53 -20 -62 -12 -10 8 -12 7 -7 -5
3 -9 13 -18 22 -20 12 -3 10 -5 -5 -6 -14 -1 -24 5 -24 14 -1 8 -2 21 -3 28
-1 6 5 11 11 10 7 -2 12 0 11 5 -4 14 55 92 65 85 6 -3 7 -1 3 5 -4 6 5 30 20
52 15 22 25 43 22 45 -3 3 -22 -21 -43 -52 -50 -75 -176 -200 -243 -241 -52
-32 -53 -32 -50 -10 2 13 -5 30 -16 41 -10 9 -15 17 -10 17 9 0 -4 9 -77 49
-43 24 -43 25 -19 33 17 5 8 6 -28 3 -60 -5 -107 -24 -59 -25 15 0 27 -4 27
-9 0 -5 15 -14 32 -20 18 -7 43 -23 55 -38 13 -14 23 -21 23 -14 0 7 5 9 10 6
6 -4 7 -11 4 -17 -4 -6 -2 -8 3 -5 6 4 18 -5 28 -19 22 -34 8 -49 -44 -47 -43
2 -165 58 -156 72 2 5 -3 8 -12 7 -10 0 -19 9 -23 24 -6 22 -8 23 -15 7 -5
-12 -1 -25 11 -38 10 -11 19 -30 21 -42 2 -12 7 -47 12 -77 5 -30 5 -84 1
-120 -6 -46 -5 -67 3 -72 8 -6 9 -10 1 -15 -12 -9 -55 -195 -42 -187 10 6 10
-10 -2 -106 -5 -41 -12 -129 -16 -195 -3 -75 -11 -128 -20 -142 -7 -11 -19
-43 -25 -70 -14 -59 -57 -153 -70 -153 -5 0 -9 -6 -9 -12 1 -7 12 1 26 17 25
29 25 29 18 5 -8 -30 -23 -41 -46 -34 -10 3 -18 0 -18 -6 0 -7 -8 -10 -20 -7
-11 3 -23 1 -26 -5 -4 -6 13 -8 47 -4 41 4 60 13 88 38 29 28 32 29 19 8 -8
-14 -31 -34 -49 -45 -40 -23 -86 -24 -325 -1 -388 37 -540 46 -563 31 -6 -3
-11 -26 -11 -51 0 -48 62 -368 111 -573 16 -68 29 -124 29 -126 0 -1 -29 -5
-65 -8 -106 -10 -187 -64 -255 -169 -53 -81 -67 -137 -51 -202 16 -64 52 -126
105 -185 60 -65 309 -259 477 -371 383 -255 541 -345 588 -335 16 3 38 2 48
-4 31 -18 311 -151 338 -161 23 -9 25 -15 25 -67 1 -65 24 -256 34 -272 4 -5
16 -101 27 -213 18 -189 36 -298 38 -241 1 20 4 21 24 12 20 -9 31 -35 65
-147 22 -76 46 -177 53 -227 11 -87 9 -284 -7 -499 -5 -66 -4 -87 4 -82 7 4
12 1 12 -8 0 -9 -5 -16 -10 -16 -16 0 0 -51 26 -87 28 -37 82 -58 132 -49 56
9 139 72 173 130 29 51 37 82 19 71 -6 -4 -10 6 -11 22 0 15 -2 38 -3 50 -4
35 11 17 20 -24 l7 -38 7 30 c4 17 8 101 9 188 l1 157 25 -16 c14 -9 42 -39
62 -67 35 -48 37 -55 41 -143 2 -50 -1 -145 -7 -210 -7 -66 -16 -213 -21 -329
-10 -217 -17 -268 -49 -339 -11 -22 -30 -66 -44 -96 -15 -35 -49 -81 -93 -125
-60 -62 -77 -73 -130 -88 -93 -26 -132 -23 -171 15 -42 40 -43 30 -2 -17 38
-43 76 -46 181 -15 58 18 78 30 131 83 78 77 91 97 122 183 13 38 33 96 45
129 24 64 32 185 46 670 l6 210 -29 55 c-17 34 -45 68 -73 89 -45 34 -45 34
-42 90 2 31 12 108 22 171 11 63 24 152 30 198 5 45 14 91 20 102 9 17 29 216
30 299 0 25 0 24 36 -10 20 -18 47 -54 62 -79 40 -70 110 -157 197 -249 62
-65 96 -92 150 -117 75 -37 106 -41 168 -22 33 10 43 20 59 55 10 24 23 80 28
125 12 104 12 296 -1 323 -6 15 -7 9 -3 -20 3 -22 0 -112 -5 -200 -12 -185
-29 -251 -70 -267 -40 -15 -131 -3 -187 25 -73 37 -251 232 -318 349 -16 27
-47 65 -70 85 l-43 38 -7 140 c-4 77 -11 181 -16 230 -5 50 -14 182 -21 294
l-13 205 50 44 c27 24 78 57 114 74 81 36 127 80 199 186 103 153 116 191 90
259 -5 15 -11 54 -11 86 -1 36 -4 53 -9 45 -14 -22 -10 -89 8 -136 14 -38 15
-51 4 -91 -6 -25 -20 -53 -30 -61 -10 -8 -44 -54 -75 -102 -32 -49 -60 -88
-61 -88 -2 0 -1 33 2 73 5 72 -16 253 -38 332 -12 41 -84 118 -128 136 -22 9
-23 10 -6 35 12 19 13 25 3 22 -11 -4 -60 -61 -167 -197 l-27 -34 -147 13
c-81 8 -141 17 -135 21 7 5 10 10 7 14 -6 5 -101 6 -229 3 -82 -2 -549 45
-520 52 24 6 6 10 -140 26 -19 3 -71 9 -115 14 -113 14 -156 11 -85 -5 30 -7
49 -13 42 -14 -38 -3 -215 23 -267 39 -33 11 -79 24 -102 30 -38 9 -43 14 -43
39 0 15 -22 117 -49 227 -102 412 -148 651 -128 669 7 7 8 6 3 -2 -10 -19 15
-16 44 4 19 13 42 16 104 14 112 -4 251 -16 451 -40 94 -11 238 -25 320 -31
280 -19 529 -41 752 -66 123 -13 229 -24 238 -24 13 0 14 -28 10 -217 -3 -120
-8 -320 -10 -445 -2 -125 -7 -233 -11 -239 -4 -8 -3 -9 4 -5 8 5 12 -2 12 -19
0 -15 4 -24 10 -20 6 3 10 50 10 105 0 93 1 100 22 111 14 8 18 14 10 17 -6 2
-12 11 -11 20 0 11 2 12 6 5 2 -7 10 -13 16 -13 7 0 -1 11 -16 25 -30 29 -30
26 -18 77 6 26 5 38 -3 41 -15 5 8 33 54 64 19 13 50 35 69 48 19 14 39 25 45
25 6 0 4 -5 -4 -10 -8 -5 -10 -10 -5 -10 6 0 4 -4 -4 -9 -11 -7 -9 -10 8 -16
11 -3 21 -10 21 -15 0 -5 9 -12 20 -15 11 -3 20 -13 20 -22 0 -17 36 -72 59
-89 12 -9 7 -16 -28 -39 -23 -16 -78 -43 -123 -61 -85 -35 -133 -62 -125 -70
3 -3 25 5 48 17 24 12 73 32 110 44 57 20 67 21 75 8 11 -18 66 -10 89 14 19
19 19 79 0 133 -8 23 -15 57 -15 74 -1 32 -49 153 -50 126 0 -12 -3 -11 -11 3
-6 9 -15 15 -21 11 -7 -4 -5 -10 3 -16 11 -7 9 -8 -5 -4 -20 7 -64 -17 -128
-70 -22 -19 -49 -39 -60 -45 -17 -9 -18 -8 -6 10 7 12 16 21 19 21 4 0 5 8 2
18 -7 27 17 77 69 148 44 59 48 61 109 73 35 7 120 18 189 26 188 20 198 24
55 19 -72 -3 -147 -9 -168 -13 -20 -5 -37 -7 -37 -6 0 2 51 37 113 78 61 41
142 103 179 138 66 62 138 166 138 198 0 9 -14 -8 -30 -38 -58 -106 -142 -185
-291 -279 -59 -36 -65 -38 -55 -17 6 13 15 21 20 18 5 -4 6 -1 2 5 -3 6 5 42
19 80 30 84 35 227 9 277 -11 21 -14 52 -13 108 3 82 14 107 25 60 13 -50 61
-142 98 -188 44 -53 66 -60 31 -10 -32 48 -68 158 -67 209 0 23 9 93 21 156
24 131 28 231 12 309 -6 30 -9 57 -6 59 3 3 5 2 5 -2 0 -5 11 -1 25 8 16 10
35 15 48 11 16 -5 18 -4 8 3 -11 8 -4 13 30 22 24 6 49 13 54 16 13 5 -52 -3
-85 -11 -14 -4 -36 -9 -50 -11 -23 -4 -22 -3 5 10 26 14 26 15 5 10 -14 -4
-34 -13 -44 -20 -14 -10 -24 -10 -39 -2 -16 8 -19 8 -14 -5 3 -8 0 -18 -7 -20
-8 -3 -36 22 -67 61 -30 36 -70 84 -89 106 l-34 41 34 -31 c42 -38 111 -84
125 -84 5 0 -5 9 -22 20 -37 22 -35 39 5 66 23 15 47 17 156 15 91 -2 126 0
122 8 -14 22 6 33 26 14 11 -10 23 -16 27 -13 3 3 17 -17 31 -45 14 -27 31
-51 38 -53 17 -3 15 9 -9 80 -20 59 -112 183 -129 173 -4 -2 -22 11 -40 30
-18 19 -37 32 -42 29 -4 -3 -8 -1 -8 4 0 5 -15 29 -34 53 -18 24 -60 94 -92
156 -32 62 -60 111 -62 109 -5 -5 68 -150 102 -205 15 -23 24 -47 20 -53 -5
-7 -3 -8 6 -3 9 6 11 4 5 -5 -6 -10 -11 -9 -22 5 -7 11 -13 22 -13 27 0 4 -5
8 -12 8 -7 0 -25 12 -41 28 -25 23 -28 24 -18 5 6 -12 16 -25 21 -28 6 -4 8
-10 5 -15 -3 -5 0 -12 6 -16 8 -5 9 -3 4 6 -5 9 -4 11 3 6 7 -4 12 -14 12 -22
0 -8 3 -14 8 -14 4 0 13 -9 20 -21 12 -18 11 -19 -6 -10 -26 14 -76 72 -106
123 -37 64 -63 136 -102 282 -50 187 -47 173 -34 156 8 -12 9 -8 4 15 -10 43
-106 298 -142 378 -17 37 -28 67 -24 67 4 0 15 -20 25 -45 12 -28 23 -42 30
-38 7 3 9 3 5 -1 -7 -9 61 -150 69 -143 2 3 -19 63 -48 133 -28 71 -58 147
-66 168 -8 22 -19 49 -25 60 -10 19 -10 20 7 6 15 -13 14 -8 -5 30 -12 25 -33
59 -46 76 -13 17 -21 34 -19 36 3 3 -16 27 -42 54 -66 69 -122 94 -207 94 -37
0 -65 -4 -62 -9 3 -4 -6 -13 -20 -20 -32 -14 -34 -14 -34 3 0 15 -21 26 -48
25 -9 0 -46 -11 -81 -24z m-76 -76 c-45 -43 -56 -59 -65 -104 -6 -28 -24 -77
-40 -108 -19 -38 -25 -57 -17 -60 9 -3 9 -8 1 -18 -11 -16 -12 -24 -1 -56 7
-19 11 -20 45 -11 20 6 43 15 50 20 6 6 12 8 12 4 0 -13 -50 -37 -106 -52 -32
-8 -67 -23 -78 -32 -18 -16 -18 -16 -11 8 4 14 11 30 16 36 5 6 10 19 12 30 2
10 8 30 14 44 6 14 16 45 23 70 18 67 31 100 40 100 4 0 10 14 14 30 6 31 112
150 133 150 7 0 -12 -23 -42 -51z m511 -5 c27 -25 78 -93 94 -124 14 -29 8
-23 -43 42 -20 25 -51 59 -68 75 -16 15 -35 37 -41 48 -10 19 -10 19 13 -1 13
-11 33 -29 45 -40z m-333 -20 c-3 -8 -9 -14 -13 -14 -13 0 -22 19 -15 30 9 14
34 0 28 -16z m-17 -25 c3 -6 -3 -24 -15 -40 -11 -15 -21 -33 -21 -39 0 -5 -6
-10 -12 -10 -9 0 -10 -2 -2 -8 14 -8 0 -52 -16 -52 -5 0 -10 -6 -10 -14 0 -7
-9 -16 -20 -19 -11 -3 -18 -1 -14 4 3 5 0 9 -7 9 -9 0 -9 3 0 14 9 11 9 15 -1
19 -7 3 -3 6 10 6 22 1 32 21 10 21 -6 0 -4 6 6 13 10 7 16 22 14 33 -2 13 3
20 20 22 12 2 22 9 21 15 -3 26 2 37 15 37 8 0 18 -5 22 -11z m253 -259 c16
-30 38 -88 48 -128 11 -40 22 -70 25 -67 3 4 6 -9 6 -27 0 -18 5 -53 11 -78 6
-25 10 -56 10 -70 0 -22 -1 -21 -15 10 -22 52 -79 105 -170 161 -45 27 -88 56
-95 66 -8 9 4 5 26 -10 22 -15 45 -27 51 -27 7 0 35 -16 64 -35 l51 -35 -22
38 -22 37 27 -25 c23 -21 26 -22 20 -5 -7 18 -6 19 11 5 16 -12 15 -8 -5 25
-13 22 -34 54 -45 70 -32 43 -40 59 -28 52 6 -4 27 -32 47 -62 44 -65 58 -76
46 -36 -9 33 -80 180 -111 231 l-22 35 31 -35 c17 -19 44 -60 61 -90z m106 73
c49 -90 86 -148 80 -125 -7 23 -7 23 19 7 18 -12 25 -23 21 -35 -3 -10 1 -25
9 -33 36 -35 115 -285 123 -385 4 -53 9 -72 18 -68 8 3 15 -7 17 -26 5 -28 4
-29 -9 -13 -12 18 -13 18 -13 -2 0 -12 6 -50 14 -85 9 -38 17 -151 21 -282 4
-168 9 -225 21 -248 22 -42 26 -30 9 27 -8 26 -15 64 -14 84 l1 36 9 -35 c5
-19 22 -74 38 -122 16 -49 25 -88 21 -88 -13 0 -71 89 -96 147 -13 32 -29 67
-36 78 -29 51 -39 140 -33 280 7 151 -1 231 -37 353 -28 97 -34 86 -7 -14 18
-65 21 -100 18 -199 -7 -265 2 -385 36 -467 4 -10 3 -18 -3 -18 -13 0 -41 103
-67 255 -13 72 -24 121 -24 110 -2 -38 20 -190 35 -250 9 -33 17 -64 18 -70 2
-5 6 -28 11 -50 9 -42 33 -86 92 -163 43 -57 134 -157 110 -122 -87 130 -84
137 13 25 62 -72 87 -118 100 -186 10 -53 4 -82 -11 -58 -6 10 -9 5 -10 -16 0
-23 -4 -18 -15 25 -19 71 -38 99 -99 147 -28 22 -63 54 -79 71 -17 17 -33 29
-37 27 -13 -8 -136 131 -177 200 -54 92 -92 208 -92 280 0 35 -4 54 -10 50
-15 -9 -12 85 6 171 8 42 13 81 11 87 -6 18 -46 -117 -60 -203 l-12 -75 -3 57
c-2 44 8 102 43 235 46 174 47 181 48 338 1 154 0 162 -26 219 -15 32 -24 63
-20 69 4 6 1 7 -7 2 -10 -6 -12 -4 -8 7 4 8 -3 30 -14 49 -16 26 -17 30 -4 20
9 -8 38 -52 63 -98 26 -45 50 -83 54 -83 9 0 -9 59 -24 78 -5 6 -6 12 -3 12 4
0 -2 9 -12 20 -18 20 -55 100 -46 100 2 0 15 -21 29 -47z m-432 -21 c-13 -2
-20 -8 -17 -16 4 -9 -4 -13 -25 -12 -17 1 -31 3 -31 6 1 11 66 36 80 30 11 -3
9 -6 -7 -8z m-253 -473 c0 -6 -4 -7 -10 -4 -5 3 -10 11 -10 16 0 6 5 7 10 4 6
-3 10 -11 10 -16z m382 -55 c-18 -8 -37 -12 -43 -9 -17 11 -2 20 38 22 l38 2
-33 -15z m-357 -14 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8
-4 11 -10z m415 -20 c0 -5 -12 -10 -27 -9 l-28 1 25 8 c14 4 26 8 28 9 1 1 2
-3 2 -9z m-342 -18 c2 -7 -2 -10 -12 -6 -9 3 -16 11 -16 16 0 13 23 5 28 -10z
m265 11 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m-122 -69 l-9
-39 -1 36 c-1 20 2 39 6 42 12 13 13 0 4 -39z m-415 -64 c10 0 5 -9 -13 -25
-25 -22 -29 -23 -40 -8 -15 20 2 47 24 38 8 -3 21 -5 29 -5z m-89 -105 c3 -9
-4 -39 -15 -68 l-21 -52 0 45 c-1 75 19 117 36 75z m43 -45 c0 -11 -2 -20 -4
-20 -2 0 -6 9 -9 20 -3 11 -1 20 4 20 5 0 9 -9 9 -20z m1260 -77 c0 -34 42
-125 75 -165 14 -16 23 -34 19 -39 -3 -5 0 -8 8 -7 7 2 12 -4 10 -12 -2 -8 0
-12 4 -8 9 10 35 -12 28 -23 -3 -5 2 -9 10 -9 8 0 18 -4 21 -10 8 -12 -35 3
-68 25 -13 8 -26 13 -29 9 -9 -8 -54 55 -77 107 -16 37 -26 98 -22 147 2 25
21 11 21 -15z m-516 -58 c-32 -36 -62 -65 -68 -65 -6 0 19 29 54 65 35 36 66
65 68 65 2 0 -23 -29 -54 -65z m-714 15 c-20 -13 -33 -13 -25 0 3 6 14 10 23
10 15 0 15 -2 2 -10z m1308 -75 c17 -24 32 -48 32 -53 0 -5 18 -26 40 -46 22
-20 36 -36 31 -36 -19 0 -128 131 -144 172 -9 24 -11 35 -4 24 7 -10 27 -38
45 -61z m-726 -25 c-18 -17 -40 -30 -49 -30 -9 0 4 13 28 30 56 38 63 38 21 0z
m198 -72 c0 -30 62 -201 86 -238 31 -47 64 -87 64 -78 0 5 -11 29 -24 55 -38
75 -54 118 -60 159 l-6 39 15 -40 c19 -47 41 -73 30 -35 -3 14 10 -3 31 -36
30 -50 49 -69 100 -99 35 -20 66 -40 69 -45 4 -7 -23 -34 -101 -100 -16 -13
-31 -24 -33 -25 -2 0 -27 -22 -55 -50 -28 -27 -54 -49 -58 -48 -4 2 -4 -5 -1
-14 5 -13 2 -15 -11 -10 -10 4 -15 3 -11 -3 3 -5 -3 -19 -14 -32 -11 -13 -26
-32 -34 -42 -12 -17 -13 -9 -10 60 3 57 1 75 -6 64 -6 -8 -11 -32 -11 -52 0
-20 -4 -40 -10 -43 -6 -4 -10 6 -10 22 0 44 -64 248 -95 304 -8 14 -17 40 -20
59 -3 18 -10 41 -16 51 -17 32 6 21 25 -12 10 -16 29 -35 43 -40 36 -14 40 -4
6 15 -44 24 -21 19 43 -10 33 -15 70 -30 84 -34 14 -4 34 -11 45 -15 l20 -7
-20 17 c-11 9 -54 33 -95 53 -41 20 -76 40 -78 45 -2 4 -8 7 -14 7 -19 0 -63
38 -82 71 -10 17 -14 29 -9 26 6 -4 18 2 28 13 14 15 21 17 32 9 7 -6 13 -7
13 -2 0 5 28 23 63 39 34 16 64 33 66 38 5 12 21 -15 21 -36z m-258 -46 c14
-31 41 -120 58 -197 17 -77 45 -182 62 -233 16 -51 36 -130 44 -174 16 -93 23
-108 25 -52 l2 39 6 -40 7 -40 65 65 c35 36 121 125 191 198 70 72 132 132
139 132 6 0 27 -13 46 -30 18 -16 38 -30 42 -30 5 0 11 -9 14 -19 3 -13 1 -18
-8 -15 -32 13 -308 -165 -405 -261 -36 -35 -91 -88 -122 -118 -32 -30 -58 -60
-58 -67 0 -7 18 8 41 34 22 25 46 46 52 46 6 0 0 -11 -13 -25 -13 -14 -21 -25
-19 -25 3 0 18 14 35 32 16 17 22 28 14 24 -8 -4 -4 1 10 11 73 53 105 81 103
91 -2 6 16 27 39 46 31 27 48 34 67 31 20 -4 22 -4 7 3 -23 10 -6 25 17 16 8
-3 18 -1 22 5 4 7 -1 9 -12 5 -17 -5 -16 -4 1 10 13 11 24 12 37 6 23 -13 22
-14 54 14 16 14 40 28 54 31 13 3 38 16 55 28 16 11 26 16 22 9 -5 -8 -2 -10
8 -6 9 3 13 11 9 17 -3 5 -1 7 5 3 6 -3 22 -2 37 4 23 9 26 8 21 -5 -3 -9 -2
-14 3 -11 5 3 15 -2 22 -11 22 -26 16 -340 -7 -388 -9 -20 -20 -73 -24 -118
l-7 -82 -2 75 c-2 63 -4 70 -12 45 -6 -20 -4 -68 8 -148 13 -99 14 -130 4
-184 -15 -80 -83 -230 -116 -256 -5 -4 -23 -5 -38 -2 -16 3 -34 -1 -42 -8 -7
-6 -22 -19 -35 -27 -12 -8 -39 -37 -61 -64 l-39 -49 -1 154 c-1 209 2 201 -89
215 -41 7 -149 19 -240 28 -222 23 -238 24 -368 32 -85 5 -115 10 -119 21 -7
18 41 143 69 178 17 22 23 24 37 13 14 -12 15 -11 2 4 -11 15 -10 22 6 49 11
17 24 30 29 30 5 -1 10 11 11 26 1 16 7 42 13 58 6 17 14 68 17 115 5 90 31
172 84 265 15 27 40 82 55 120 24 64 27 85 30 233 2 97 -1 162 -7 162 -5 0 -9
5 -9 10 0 6 6 10 13 10 6 0 24 -26 39 -58z m315 -4 c-3 -8 -6 -5 -6 6 -1 11 2
17 5 13 3 -3 4 -12 1 -19z m-699 -49 c-6 -4 -7 -12 -4 -18 4 -6 2 -11 -3 -11
-6 0 -10 -3 -9 -7 1 -5 -9 -28 -22 -53 l-25 -45 -3 60 c-2 32 -1 69 2 81 5 19
9 20 40 10 19 -6 30 -14 24 -17z m1226 2 c-2 -3 -12 3 -22 13 -16 17 -16 18 5
5 12 -7 20 -15 17 -18z m-919 -62 c3 -24 2 -62 -4 -84 l-10 -40 1 40 c1 22 -2
69 -5 105 -8 72 7 55 18 -21z m662 59 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3
4 -12 1 -19z m-704 -26 c4 -21 3 -31 -3 -27 -6 3 -10 20 -10 37 0 38 5 34 13
-10z m-206 -104 c-3 -57 -13 -124 -22 -150 -18 -51 -39 -76 -50 -58 -4 6 -1 9
5 8 10 -2 41 71 39 92 -1 16 -53 -99 -54 -119 0 -14 -6 -26 -13 -29 -7 -2 -10
-7 -8 -11 6 -9 -48 -92 -60 -94 -5 -1 -10 -13 -11 -27 -1 -14 -5 -44 -8 -66
-9 -52 7 -101 50 -158 l33 -44 -14 -50 c-13 -42 -54 -102 -54 -77 0 4 -6 2
-14 -5 -8 -6 -12 -18 -10 -25 3 -7 -4 -19 -16 -25 -19 -10 -21 -9 -17 7 10 32
18 124 27 323 14 289 43 403 130 505 28 33 53 70 56 83 13 48 17 17 11 -80z
m32 -123 c-17 -42 -47 -97 -65 -123 -19 -26 -45 -67 -58 -92 -14 -25 -25 -39
-26 -33 0 23 33 98 60 133 50 65 61 96 67 203 6 87 8 97 16 67 14 -57 27 -59
29 -4 2 45 2 44 5 -13 3 -52 -1 -75 -28 -138z m102 74 c-12 -34 -19 -64 -17
-67 3 -2 11 18 20 44 9 31 15 40 15 25 1 -12 -10 -45 -24 -73 -28 -55 -55 -97
-55 -84 0 15 -33 -18 -61 -62 -15 -24 -29 -37 -31 -31 -2 7 -14 -14 -26 -45
-12 -32 -19 -63 -15 -68 4 -7 1 -8 -7 -3 -9 5 -10 2 -6 -12 3 -10 0 -28 -8
-39 -14 -17 -15 -16 -11 21 5 36 4 37 -5 11 -5 -16 -7 -50 -4 -75 4 -34 3 -42
-5 -31 -17 23 -13 95 7 148 25 64 80 144 94 136 7 -4 8 -2 4 4 -4 6 7 38 23
71 17 32 38 90 48 127 9 38 19 62 20 54 2 -8 -5 -49 -16 -90 -27 -101 -2 -66
29 41 13 46 28 87 34 91 19 13 18 -28 -3 -93z m73 -31 c-3 -27 -11 -51 -16
-55 -8 -4 -9 8 -5 38 4 31 4 37 -3 22 -5 -12 -8 -52 -8 -90 1 -65 -1 -72 -47
-148 -27 -44 -51 -82 -52 -84 -2 -2 -5 -2 -8 1 -3 3 2 21 10 41 8 21 11 37 6
37 -5 0 -19 -24 -30 -52 -11 -29 -20 -45 -20 -35 -1 10 6 31 14 48 9 16 13 34
10 39 -3 6 -2 10 2 10 5 0 14 14 20 31 10 25 10 29 -2 19 -22 -19 -64 -113
-67 -152 -2 -40 -18 -42 -18 -2 0 52 23 113 59 157 50 60 99 137 110 173 5 16
15 51 23 78 l13 48 7 -38 c4 -22 5 -60 2 -86z m-24 97 c0 -8 -4 -15 -10 -15
-5 0 -7 7 -4 15 4 8 8 15 10 15 2 0 4 -7 4 -15z m1340 -39 c0 -12 -5 -7 -19
24 -11 24 -11 24 3 6 9 -11 16 -24 16 -30z m-1683 -38 c-3 -7 -5 -2 -5 12 0
14 2 19 5 13 2 -7 2 -19 0 -25z m402 -85 c-12 -37 -31 -81 -42 -98 l-19 -30 7
30 c9 42 66 177 72 171 3 -3 -5 -35 -18 -73z m986 -160 l4 -78 -12 65 c-7 36
-16 70 -20 77 -4 6 -4 19 -1 28 12 31 24 -7 29 -92z m-282 43 c-23 -13 -52
-34 -64 -45 -13 -12 -28 -21 -33 -21 -6 0 -4 -5 4 -10 8 -5 11 -10 5 -10 -5 0
-15 4 -22 8 -12 8 118 102 141 102 6 0 -8 -11 -31 -24z m-794 -61 c-32 -46
-36 -37 -7 14 13 22 25 36 26 30 2 -5 -7 -25 -19 -44z m348 -17 c-3 -8 -6 -5
-6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m-528 -47 c-6 -28 -9 -78 -7 -111 1
-32 -1 -55 -5 -51 -17 17 -11 161 8 204 13 32 16 11 4 -42z m-99 -48 c-4 -26
-9 -39 -10 -28 -2 13 -5 7 -10 -15 -7 -33 -7 -32 -9 16 0 28 4 66 11 84 10 31
12 32 19 13 4 -12 4 -43 -1 -70z m637 45 c-3 -7 -5 -2 -5 12 0 14 2 19 5 13 2
-7 2 -19 0 -25z m710 -30 c-3 -7 -5 -2 -5 12 0 14 2 19 5 13 2 -7 2 -19 0 -25z
m-1144 -3 c-3 -9 -8 -14 -10 -11 -3 3 -2 9 2 15 9 16 15 13 8 -4z m577 -49 c0
-2 -12 -12 -27 -21 l-28 -18 19 21 c17 20 36 29 36 18z m551 -37 c-6 -16 -10
-18 -10 -7 -1 22 12 55 16 42 2 -6 -1 -22 -6 -35z m-1101 -93 c0 -33 -9 -68
-25 -101 -28 -57 -44 -77 -104 -124 -42 -33 -43 -33 -25 -6 10 15 19 36 19 46
2 23 -2 20 -24 -23 -18 -32 -99 -103 -108 -94 -3 3 2 19 11 37 20 40 9 60 -15
28 -10 -13 -19 -19 -19 -14 0 6 16 30 35 54 20 25 41 64 47 88 11 46 27 66 29
36 1 -10 5 -2 10 17 7 33 7 33 6 -12 -2 -54 4 -54 23 1 7 23 17 41 22 41 12 0
10 -16 -6 -55 -12 -28 -12 -34 -1 -39 8 -3 23 7 34 22 l20 27 -3 -37 c-1 -23
-12 -48 -27 -64 -23 -25 -23 -26 -2 -15 12 6 34 37 49 68 23 46 28 71 29 130
0 61 2 71 13 56 6 -9 12 -40 12 -67z m997 -288 c-3 -8 -6 -5 -6 6 -1 11 2 17
5 13 3 -3 4 -12 1 -19z m-1218 -53 c0 -5 -4 -3 -9 5 -7 11 -10 5 -10 -23 0
-44 -15 -41 -25 4 -5 23 -3 34 12 44 15 12 19 11 25 -3 4 -9 7 -21 7 -27z
m-85 -58 c10 -15 17 -29 15 -30 -2 -1 -38 0 -79 3 l-75 5 32 18 c18 9 43 31
55 48 23 31 23 31 28 7 3 -12 13 -36 24 -51z m-977 27 c-3 -3 -12 -4 -19 -1
-8 3 -5 6 6 6 11 1 17 -2 13 -5z m63 -771 c-54 -9 -127 -37 -170 -66 -44 -30
-45 -30 -21 -4 38 42 118 77 170 76 26 -1 35 -4 21 -6z m2180 -78 c-7 -8 -18
-15 -24 -15 -6 0 -2 7 8 15 25 19 32 19 16 0z m-1981 -141 c10 -9 -35 -3 -49
6 -11 8 -7 9 15 4 17 -4 32 -8 34 -10z m424 -41 c-13 -2 -33 -2 -45 0 -13 2
-3 4 22 4 25 0 35 -2 23 -4z m130 -10 c-7 -2 -21 -2 -30 0 -10 3 -4 5 12 5 17
0 24 -2 18 -5z m-278 -23 c13 -6 15 -9 5 -9 -8 0 -22 4 -30 9 -18 12 -2 12 25
0z m747 -51 l137 -12 -47 -55 c-56 -66 -106 -102 -133 -95 -24 7 -79 73 -107
129 -21 41 -20 56 1 49 7 -2 74 -9 149 -16z m261 4 c-13 -2 -33 -2 -45 0 -13
2 -3 4 22 4 25 0 35 -2 23 -4z m-1339 -128 c38 -20 83 -47 100 -60 17 -12 72
-44 121 -70 97 -52 181 -109 318 -218 157 -124 189 -139 200 -95 9 32 15 18
10 -19 -4 -26 -12 -34 -42 -44 -20 -6 -40 -15 -45 -19 -11 -11 -42 1 -98 39
-25 17 -49 31 -53 31 -8 0 -51 33 -152 115 -33 27 -104 81 -156 118 -52 38
-136 101 -185 141 -50 40 -101 80 -114 89 -20 14 -20 16 -3 11 16 -5 15 -1 -7
20 -37 34 -35 42 5 18 17 -11 63 -36 101 -57z m1195 14 c-24 -62 -54 -190 -74
-314 l-15 -90 5 85 c7 106 37 246 69 316 32 69 40 70 15 3z m-354 -115 c73
-49 181 -137 145 -118 -8 5 -58 38 -110 75 -52 37 -134 90 -182 119 -49 29
-88 54 -88 56 0 8 155 -79 235 -132z m1182 -16 c-3 -8 -6 -5 -6 6 -1 11 2 17
5 13 3 -3 4 -12 1 -19z m-492 -178 c-2 -16 0 -30 3 -30 4 0 14 -5 22 -10 12
-8 8 -16 -23 -44 l-39 -34 1 -154 c1 -84 7 -184 13 -223 7 -38 12 -153 12
-255 1 -151 -3 -199 -18 -259 -17 -66 -20 -72 -28 -50 -5 13 -16 107 -23 209
-8 102 -22 221 -32 265 -12 58 -17 132 -17 270 -1 253 14 303 99 333 17 6 31
11 32 11 1 1 0 -12 -2 -29z m206 -46 c-5 -21 -9 -30 -10 -19 -1 24 10 67 15
62 3 -2 0 -22 -5 -43z m-676 -354 c4 -113 9 -208 12 -212 8 -15 -9 -8 -92 35
l-82 44 14 27 c10 19 18 24 26 18 9 -8 12 -2 12 21 0 18 -3 35 -7 38 -5 3 0
30 11 60 29 86 82 192 91 182 5 -4 11 -100 15 -213z m-655 115 c79 -47 157
-97 173 -111 16 -13 33 -24 39 -24 6 0 8 -3 5 -6 -8 -8 -161 82 -296 174 -129
86 -96 73 79 -33z m601 62 c-10 -9 -11 -8 -5 6 3 10 9 15 12 12 3 -3 0 -11 -7
-18z m199 -979 c6 -40 18 -97 26 -125 14 -51 16 -53 67 -68 29 -8 110 -22 181
-30 71 -8 132 -18 135 -21 9 -10 -228 5 -291 19 -31 7 -70 22 -86 34 -27 20
-30 28 -36 105 -4 46 -9 100 -13 121 -3 20 -3 37 0 37 3 0 10 -33 17 -72z
m346 -394 c-3 -8 1 -11 10 -7 20 7 84 -25 84 -43 0 -8 5 -12 10 -9 6 3 11 -4
11 -17 2 -32 2 -30 -6 -58 -4 -15 -3 -20 2 -13 5 8 9 -13 8 -51 0 -35 -2 -63
-5 -61 -6 4 -12 -127 -11 -270 1 -83 -2 -106 -10 -92 -6 10 -8 30 -5 45 5 20
4 23 -4 12 -13 -19 -13 -63 0 -76 7 -7 5 -38 -4 -94 -8 -46 -13 -87 -11 -90 2
-4 -3 -16 -11 -26 -15 -18 -15 -18 -9 9 3 15 1 27 -5 27 -5 0 -9 -3 -9 -7 1
-5 1 -18 0 -31 -1 -21 -5 -23 -39 -21 -21 2 -43 0 -50 -5 -7 -4 -12 -3 -12 2
0 5 -9 12 -20 15 -18 5 -19 12 -15 128 11 321 -1 445 -56 614 -33 104 -34 109
-14 101 8 -3 15 -1 15 5 0 11 26 8 63 -7 9 -3 17 2 21 13 4 14 16 19 41 19 24
0 34 -4 31 -12z m111 -491 c-3 -10 -5 -4 -5 12 0 17 2 24 5 18 2 -7 2 -21 0
-30z m0 -300 c-13 -30 -16 -26 -10 16 4 21 8 28 13 20 5 -6 3 -23 -3 -36z
m-140 -119 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z"
        />
        <path
          d="M4220 7871 c0 -5 5 -13 10 -16 6 -3 10 -2 10 4 0 5 -4 13 -10 16 -5
3 -10 2 -10 -4z"
        />
        <path
          d="M4274 7839 c2 -9 13 -46 24 -81 11 -35 23 -85 27 -111 4 -27 11 -44
17 -41 6 4 8 -2 3 -15 -3 -11 -2 -21 3 -21 5 0 12 -18 15 -41 3 -22 8 -43 11
-46 27 -27 10 85 -35 230 -15 51 -28 85 -29 77 -1 -8 -10 3 -21 25 -11 22 -17
33 -15 24z"
        />
        <path
          d="M4228 7738 c11 -88 8 -365 -7 -488 -13 -112 -13 -118 13 -229 14 -63
24 -117 21 -119 -8 -8 -46 136 -59 228 -12 86 -14 90 -15 40 0 -30 6 -86 14
-125 16 -78 63 -197 75 -190 4 2 16 -12 26 -33 10 -20 32 -57 47 -82 l28 -45
-34 39 c-39 45 -66 43 -42 -3 18 -36 116 -144 123 -136 3 2 -3 14 -13 25 -38
42 -4 17 51 -37 32 -32 47 -46 34 -31 -30 36 -22 44 16 17 22 -16 21 -13 -7
13 -51 47 -141 164 -177 228 -68 122 -103 306 -84 441 6 46 17 143 23 214 9
112 9 143 -6 223 -18 99 -39 137 -27 50z m233 -1135 c13 -16 12 -17 -3 -4 -17
13 -22 21 -14 21 2 0 10 -8 17 -17z"
        />
        <path d="M4272 7745 c0 -11 3 -29 8 -40 11 -25 11 1 0 35 -6 20 -8 21 -8 5z" />
        <path
          d="M4202 7670 c-10 -53 -17 -150 -12 -150 4 0 5 -24 4 -52 -3 -49 -2
-50 7 -20 5 18 8 78 6 135 -1 56 -4 95 -5 87z"
        />
        <path d="M4301 7634 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
        <path d="M4281 7614 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
        <path d="M4172 7345 c0 -16 2 -22 5 -12 2 9 2 23 0 30 -3 6 -5 -1 -5 -18z" />
        <path
          d="M4265 7223 c-3 -43 -1 -112 5 -153 11 -79 38 -185 45 -178 3 2 0 19
-5 38 -17 59 -32 193 -32 283 0 48 -1 87 -3 87 -2 0 -6 -35 -10 -77z"
        />
        <path
          d="M4391 7094 c0 -32 4 -77 8 -99 6 -27 7 -8 3 55 -5 108 -12 133 -11
44z"
        />
        <path d="M4423 7035 c0 -22 2 -30 4 -17 2 12 2 30 0 40 -3 9 -5 -1 -4 -23z" />
        <path d="M4431 6949 c1 -24 5 -55 9 -69 5 -15 6 1 3 40 -7 76 -13 93 -12 29z" />
        <path
          d="M4320 6864 c0 -6 7 -19 16 -30 14 -18 14 -18 3 6 -14 31 -19 36 -19
24z"
        />
        <path
          d="M3850 6836 c0 -2 8 -10 18 -17 15 -13 16 -12 3 4 -13 16 -21 21 -21
13z"
        />
        <path d="M4270 6616 c0 -2 7 -7 16 -10 8 -3 12 -2 9 4 -6 10 -25 14 -25 6z" />
        <path
          d="M3760 6416 c0 -2 8 -10 18 -17 15 -13 16 -12 3 4 -13 16 -21 21 -21
13z"
        />
        <path
          d="M3802 6375 c2 -5 12 -28 22 -50 28 -61 16 -152 -44 -341 -28 -87 -49
-166 -47 -174 6 -26 107 297 116 371 10 77 -1 136 -34 180 -9 13 -15 20 -13
14z"
        />
        <path
          d="M4215 6270 c3 -5 1 -10 -5 -10 -6 0 -23 -12 -38 -26 l-27 -26 42 27
c24 15 40 31 37 36 -3 5 -7 9 -10 9 -3 0 -2 -4 1 -10z"
        />
        <path
          d="M3826 5985 c-3 -9 -9 -42 -12 -73 -4 -32 -17 -77 -31 -102 -28 -51
-75 -170 -67 -170 3 0 19 30 36 68 17 37 39 80 51 95 13 20 22 55 28 110 8 82
7 102 -5 72z"
        />
        <path d="M3314 5949 c-3 -6 -2 -15 3 -20 5 -5 9 -1 9 11 0 23 -2 24 -12 9z" />
        <path d="M3671 6644 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
        <path d="M3575 6389 c-4 -6 -5 -12 -2 -15 2 -3 7 2 10 11 7 17 1 20 -8 4z" />
        <path
          d="M3145 3960 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0
-7 -4 -4 -10z"
        />
        <path
          d="M4000 4104 l-25 -15 25 5 c14 3 31 6 38 6 6 0 12 5 12 10 0 14 -21
12 -50 -6z"
        />
        <path
          d="M3995 2560 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
-8 -4 -11 -10z"
        />
        <path d="M4123 2360 c0 -25 2 -35 4 -22 2 12 2 32 0 45 -2 12 -4 2 -4 -23z" />
        <path
          d="M4136 2249 c-4 -39 -5 -73 -3 -76 3 -2 8 28 12 67 4 39 5 73 2 76 -2
3 -8 -27 -11 -67z"
        />
        <path d="M3952 2260 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z" />
        <path
          d="M4416 7800 c48 -140 104 -273 111 -267 2 3 -18 58 -45 123 -27 66
-59 151 -72 189 -12 39 -27 75 -32 80 -5 6 12 -51 38 -125z"
        />
        <path
          d="M4575 7360 c30 -102 228 -436 276 -465 16 -11 10 -1 -67 101 -37 49
-97 150 -140 237 -42 84 -73 141 -69 127z"
        />
        <path d="M4600 7161 c0 -6 4 -13 10 -16 6 -3 7 1 4 9 -7 18 -14 21 -14 7z" />
        <path
          d="M3426 7055 c7 -16 31 -19 52 -6 11 7 10 10 -3 15 -31 11 -55 7 -49
-9z"
        />
        <path
          d="M3056 6744 c-54 -66 -101 -160 -117 -235 -8 -36 -10 -114 -6 -232 l5
-178 -38 -45 c-50 -57 -60 -96 -59 -224 l2 -105 8 90 c14 162 17 172 66 227
l45 51 -9 96 c-11 135 -6 296 13 361 18 61 52 126 99 185 36 46 48 65 41 65
-3 0 -25 -25 -50 -56z"
        />
        <path d="M4848 6603 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
        <path d="M4938 6593 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
        <path
          d="M5010 6544 l-13 -59 -11 32 c-9 27 -11 10 -11 -100 0 -117 3 -138 24
-189 13 -31 28 -55 32 -53 10 6 16 -15 14 -44 -2 -23 -1 -23 12 -5 11 15 17
16 31 7 9 -6 16 -19 14 -29 -2 -14 0 -15 6 -6 7 10 11 10 22 -2 14 -18 6 -51
-11 -40 -8 4 -9 3 -5 -5 4 -6 12 -8 18 -5 8 5 9 1 5 -10 -4 -10 -3 -15 3 -11
16 10 11 -23 -11 -72 -12 -26 -24 -72 -26 -103 -5 -46 -1 -62 20 -100 13 -24
35 -51 48 -60 l24 -15 -22 28 c-36 46 -38 101 -9 187 28 80 30 94 18 86 -4 -2
-9 7 -10 22 -8 89 -30 160 -65 209 -43 61 -44 47 -2 -22 33 -56 47 -91 26 -69
-50 52 -101 121 -101 136 0 11 5 16 10 13 6 -4 11 6 11 22 2 24 2 25 6 5 2
-12 8 -20 13 -17 5 3 28 -14 51 -37 l42 -43 -42 62 c-22 34 -41 68 -41 75 0
10 3 9 9 -1 5 -8 16 -16 24 -17 24 -3 74 -53 92 -91 20 -41 23 -201 6 -246 -6
-16 -11 -36 -10 -45 0 -9 11 10 24 43 21 54 22 69 15 142 -10 93 -16 108 -78
181 -47 55 -92 159 -92 215 l-1 32 -14 -30 -13 -30 -2 40 c-3 75 -15 83 -30
19z"
        />
        <path d="M5051 6574 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
        <path d="M5251 6094 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
        <path d="M2931 5778 c-1 -31 3 -59 7 -62 5 -3 7 18 5 47 -6 75 -11 81 -12 15z" />
        <path
          d="M5100 5753 c-4 -122 -11 -158 -41 -207 -43 -69 -48 -125 -19 -215
l23 -70 -27 -40 c-16 -22 -55 -65 -88 -96 -57 -52 -60 -57 -44 -74 21 -23 20
-26 -8 -64 -13 -18 -39 -65 -56 -104 -30 -67 -37 -75 -88 -103 -47 -25 -52
-26 -36 -8 11 12 32 34 49 49 l29 27 -12 103 c-6 57 -17 122 -24 143 -13 41
-67 106 -88 106 -7 0 -1 -9 12 -20 39 -30 67 -109 80 -223 l11 -102 -71 -72
c-39 -40 -78 -73 -86 -73 -29 0 -72 22 -119 62 -67 56 -70 41 -4 -17 47 -42
150 -95 144 -75 -2 9 83 69 140 98 35 19 47 33 82 108 23 48 51 98 62 112 18
23 18 27 4 49 -15 22 -13 26 65 108 88 94 94 110 64 185 -22 54 -14 132 21
207 25 54 48 213 31 213 -3 0 -6 -3 -6 -7z"
        />
        <path d="M4130 5526 c0 -2 13 -6 29 -8 17 -2 28 -1 25 4 -5 8 -54 12 -54 4z" />
        <path
          d="M4339 5049 c-13 -11 -17 -17 -9 -13 22 12 50 12 50 1 0 -6 2 -8 5 -5
7 7 -5 38 -15 38 -4 0 -18 -9 -31 -21z"
        />
        <path
          d="M4155 4877 c-22 -25 -26 -38 -20 -58 7 -21 7 -20 23 3 16 22 24 68
12 68 -3 -1 -10 -6 -15 -13z"
        />
        <path
          d="M4164 4762 c-6 -4 -11 -15 -11 -26 0 -18 1 -18 14 0 19 27 18 40 -3
26z"
        />
        <path
          d="M4255 4744 c-21 -16 -30 -60 -14 -69 5 -4 6 2 2 11 -5 13 -3 15 8 9
12 -8 12 -6 0 8 -12 15 -10 19 10 37 28 23 23 26 -6 4z"
        />
        <path
          d="M4165 4685 c-5 -11 -13 -23 -19 -27 -6 -4 -7 -10 -3 -14 12 -12 39
22 35 42 -5 18 -5 18 -13 -1z"
        />
        <path
          d="M4553 4676 c3 -6 10 -10 17 -8 7 2 21 -5 31 -14 16 -15 22 -15 32 -4
10 10 9 12 -5 7 -9 -3 -19 0 -21 7 -3 7 -17 16 -32 18 -16 4 -24 1 -22 -6z"
        />
        <path d="M4497 4669 c7 -7 15 -10 18 -7 3 3 -2 9 -12 12 -14 6 -15 5 -6 -5z" />
        <path d="M4681 4664 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
        <path
          d="M4661 4643 c0 -6 -4 -18 -7 -27 -7 -19 21 -23 32 -4 4 6 3 8 -4 4 -6
-3 -12 3 -15 16 -2 13 -5 18 -6 11z"
        />
        <path
          d="M4128 4623 c-10 -2 -18 -9 -18 -14 0 -12 17 -11 25 2 4 6 13 8 21 5
8 -3 14 -1 14 4 0 10 -12 11 -42 3z"
        />
        <path
          d="M4455 3549 c-105 -15 -94 -17 70 -12 233 8 279 -10 310 -125 30 -107
63 -164 124 -211 l56 -44 -52 54 c-49 51 -91 127 -107 194 -12 49 -55 115 -89
136 -27 16 -49 19 -142 18 -60 -1 -137 -5 -170 -10z"
        />
        <path
          d="M4656 3383 c13 -54 25 -77 60 -116 20 -21 49 -67 65 -101 27 -57 29
-69 29 -181 -1 -66 -7 -160 -14 -210 -8 -49 -12 -92 -10 -94 13 -14 34 162 35
304 2 128 1 132 -31 194 -17 35 -46 79 -65 98 -18 18 -38 54 -45 79 -14 49
-35 74 -24 27z"
        />
        <path
          d="M3798 1575 c-3 -66 -15 -183 -26 -260 -24 -168 -37 -336 -24 -315 5
8 12 53 16 100 6 74 38 341 51 425 3 17 1 62 -3 100 l-8 70 -6 -120z"
        />
      </g>
    </svg>
  );
});
