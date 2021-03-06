﻿//  The possible error values that the YouTube player might throw.
//  Data comes from: https://developers.google.com/youtube/js_api_reference#onError
define({
    None: -1,
    InvalidParameter: 2,
    //  Undocumented error that YouTube throws when it breaks due to internet issues.
    ReallyBad: 5,
    VideoNotFound: 100,
    NoPlayEmbedded: 101,
    NoPlayEmbedded2: 150
});