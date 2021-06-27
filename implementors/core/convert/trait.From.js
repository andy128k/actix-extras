(function() {var implementors = {};
implementors["actix_protobuf"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;PayloadError&gt; for <a class=\"enum\" href=\"actix_protobuf/enum.ProtoBufPayloadError.html\" title=\"enum actix_protobuf::ProtoBufPayloadError\">ProtoBufPayloadError</a>","synthetic":false,"types":["actix_protobuf::ProtoBufPayloadError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/prost/0.7.0/prost/error/struct.DecodeError.html\" title=\"struct prost::error::DecodeError\">DecodeError</a>&gt; for <a class=\"enum\" href=\"actix_protobuf/enum.ProtoBufPayloadError.html\" title=\"enum actix_protobuf::ProtoBufPayloadError\">ProtoBufPayloadError</a>","synthetic":false,"types":["actix_protobuf::ProtoBufPayloadError"]}];
implementors["actix_redis"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"actix_redis/enum.RespError.html\" title=\"enum actix_redis::RespError\">Error</a>&gt; for <a class=\"enum\" href=\"actix_redis/enum.Error.html\" title=\"enum actix_redis::Error\">Error</a>","synthetic":false,"types":["actix_redis::Error"]}];
implementors["actix_web_httpauth"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"actix_web_httpauth/extractors/struct.AuthenticationError.html\" title=\"struct actix_web_httpauth::extractors::AuthenticationError\">AuthenticationError</a>&lt;&lt;T as <a class=\"trait\" href=\"actix_web_httpauth/extractors/trait.AuthExtractorConfig.html\" title=\"trait actix_web_httpauth::extractors::AuthExtractorConfig\">AuthExtractorConfig</a>&gt;::<a class=\"type\" href=\"actix_web_httpauth/extractors/trait.AuthExtractorConfig.html#associatedtype.Inner\" title=\"type actix_web_httpauth::extractors::AuthExtractorConfig::Inner\">Inner</a>&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"actix_web_httpauth/extractors/trait.AuthExtractorConfig.html\" title=\"trait actix_web_httpauth::extractors::AuthExtractorConfig\">AuthExtractorConfig</a>,&nbsp;</span>","synthetic":false,"types":["actix_web_httpauth::extractors::errors::AuthenticationError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.4/http/header/value/struct.ToStrError.html\" title=\"struct http::header::value::ToStrError\">ToStrError</a>&gt; for <a class=\"enum\" href=\"actix_web_httpauth/headers/authorization/enum.ParseError.html\" title=\"enum actix_web_httpauth::headers::authorization::ParseError\">ParseError</a>","synthetic":false,"types":["actix_web_httpauth::headers::authorization::errors::ParseError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;DecodeError&gt; for <a class=\"enum\" href=\"actix_web_httpauth/headers/authorization/enum.ParseError.html\" title=\"enum actix_web_httpauth::headers::authorization::ParseError\">ParseError</a>","synthetic":false,"types":["actix_web_httpauth::headers::authorization::errors::ParseError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/str/error/struct.Utf8Error.html\" title=\"struct core::str::error::Utf8Error\">Utf8Error</a>&gt; for <a class=\"enum\" href=\"actix_web_httpauth/headers/authorization/enum.ParseError.html\" title=\"enum actix_web_httpauth::headers::authorization::ParseError\">ParseError</a>","synthetic":false,"types":["actix_web_httpauth::headers::authorization::errors::ParseError"]},{"text":"impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;S&gt; for <a class=\"struct\" href=\"actix_web_httpauth/headers/authorization/struct.Authorization.html\" title=\"struct actix_web_httpauth::headers::authorization::Authorization\">Authorization</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"actix_web_httpauth/headers/authorization/trait.Scheme.html\" title=\"trait actix_web_httpauth::headers::authorization::Scheme\">Scheme</a>,&nbsp;</span>","synthetic":false,"types":["actix_web_httpauth::headers::authorization::header::Authorization"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()