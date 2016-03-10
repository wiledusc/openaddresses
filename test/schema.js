module.exports.schema = {
    "properties": {
        "skip": {
            "description": "Tells the processing engine to skip processing of this source",
            "type": "boolean",
            "required": false
        },
        "year": {
            "description": "The year in which the data source was produced (For infrequently updated sources",
            "type": "string",
            "required": false
        },
        "coverage": {
            "description": "The geographic area that the source covers",
            "type": "object",
            "required": true,
            "properties": {
                "country": {
                    "description": "The ISO 3166-1 a2 country code of which the source data covers",
                    "allowEmpty": false,
                    "type": "string",
                    "required": true,
                    "maxLength": 2,
                    "minLength": 2
                },
                "state": {
                    "description": "The state/region of which the source data covers",
                    "allowEmpty": false,
                    "type": "string",
                    "required": false,
                    "dependancies": "country"
                },
                "county": {
                    "description": "The county/district of which the source data covers",
                    "allowEmpty": false,
                    "type": "string",
                    "required": false,
                    "dependancies": "region"
                },
                "city": {
                    "description": "The city of which the source data covers",
                    "allowEmpty": false,
                    "type": "string",
                    "required": false,
                    "dependencies": "state"
                },
                "geometry": {
                    "description": "A GeoJSON Polygon or MultiPolygon geometry of the coverage area"
                },
                "ISO 3166": {
                    "description": "ISO 3166 coverage object",
                    "type": "object",
                    "required": false,
                    "properties": {
                        "alpha2": {
                            "description": "ISO 3166 Code",
                            "type": "string",
                            "allowEmpty": false,
                            "required": false
                        },
                        "country": {
                            "description": "ISO 3166 Country name",
                            "type": "string",
                            "allowEmpty": false,
                            "required": false
                        },
                        "subdivision": {
                            "description": "ISO 3166 Region name",
                            "type": "string",
                            "allowEmpty": false,
                            "required": false
                        }
                    }
                },
                "US Census": {
                    "description": "The Census designated id of the coverage",
                    "type": "object",
                    "required": false,
                    "properties": {
                        "geoid": {
                            "description": "The Census designated integer id of the place",
                            "type": "string",
                            "allowEmpty": false,
                            "required": true
                        },
                        "name": {
                            "description": "The Census designated name of the place",
                            "type": "string",
                            "allowEmpty": false,
                            "required": false 
                        },
                        "state": {
                            "description": "The Census designated state name of the place",
                            "type": "string",
                            "allowEmpty": false,
                            "required": true
                        }
                    }
                }
            }
        },
        "data": {
            "description": "The URL to the source data",
            "allowEmpty": false,
            "type": "string",
            "required": true
        },
        "website": {
            "description": "The human readable URL to the source data portal",
            "type": "string",
            "allowEmpty": false,
            "required": false
        },
        "license": {
            "description": "An object with license details for the dataset.",
            "type": ["object", "string"],
            "properties": {
                "url": {
                    "description": "A URL pointing towards the license text",
                    "type": "string",
                    "allowEmpty": false,
                    "required": false,
                    "format": "url"
                },
                "text": {
                    "description": "The name of the license",
                    "type": "string",
                    "allowEmpty": false,
                    "required": false
                }
            }
        },
        "type": {
            "description": "The protocol to obtain the source data",
            "allowEmpty": false,
            "type": "string",
            "required": true,
            "enum": ["ESRI", "HTTP", "FTP", "esri", "http", "ftp"]

        },
        "note": {
            "description": "A string containing human readable text about the source",
            "type": "string",
            "allowEmpty": false,
            "required": false
        },
        "attribution": {
            "description": "A string containing a human readable attribution value",
            "type": "string",
            "allowEmpty": false,
            "required": false
        },
        "email": {
            "description": "Email of data provider",
            "type": "string",
            "format": "email",
            "allowEmpty": false,
            "required": false
        },
        "compression": {
            "description": "The compression type of the source data",
            "allowEmpty": false,
            "type": "string",
            "required": false,
            "enum": ["zip"]
        },
        "conform": {
            "description": "Convert source data to uniform openaddresses output",
            "allowEmpty": false,
            "type": "object",
            "required": false,
            "properties": {
                "type": {
                    "description": "Format of source data",
                    "required": true,
                    "type": "string",
                    "enum": ["shapefile", "shapefile-polygon", "csv", "geojson", "xml"]
                },
                "number": {
                    "description": "Housenumber",
                    "required": true,
                    "type": ["string", "object", "array"]
                },
                "street": {
                    "description": "Street Name",
                    "required": true,
                    "type": ["string", "object", "array"]
                },
                "city": {
                    "description": "City Name",
                    "required": false,
                    "type": ["string", "object", "array"]
                },
                "postcode": {
                    "description": "Postcode Name",
                    "required": false,
                    "type": ["string", "object", "array"]
                },
                "district": {
                    "description": "District Name",
                    "required": false,
                    "type": ["string", "object", "array"]
                },
                "region": {
                    "description": "Region Name",
                    "required": false,
                    "type": ["string", "object", "array"]
                },
                "id": {
                    "description": "Parcel Number",
                    "required": false,
                    "type": ["string", "object", "array"]
                },
                "addrType": {
                    "description": "Type of address",
                    "required": false,
                    "type": ["string", "object", "array"]
                },
                "notes": {
                    "description": "Legal description of address or notes about the property",
                    "required": false,
                    "type": "string" 
                },
                "accuracy": {
                    "description": "Accuracy of source data",
                    "required": false,
                    "type": ["string", "integer"] 
                },
                "lon": {
                    "description": "Longitude of CSV source",
                    "required": false,
                    "type": "string" 
                },
                "lat": {
                    "description": "Latitude of CSV source",
                    "required": false,
                    "type": "string" 
                },
                "file": {
                    "description": "If multiple files exist in a source, define which one to use",
                    "required": false,
                    "type": "string"
                },
                "srs": {
                    "description": "SRS of source if it cannot be determined automatically",
                    "required": false,
                    "type": "string" 
                },
                "csvsplit": {
                    "description": "Delimiter for csv type sources",
                    "type": "string",
                    "required": false,
                    "allowedEmpty": false
                }
            }
        }
    }
}
