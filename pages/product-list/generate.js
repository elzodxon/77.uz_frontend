//
// function generate(object,number,currentId){
//     for (let i=1; i<number; i++) {
//         object.id = currentId + i
//         console.log(`${JSON.stringify(object)},`)
//     }
// }
//
// generate(  {
//     "id": 8,
//     "name": "Jeans",
//     "slug": "T-Shirt",
//     "price": 2000000,
//     "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
//     "published_at": "2023-11-16T15:24:37.758522+05:00",
//     "address": {
//         "district": {
//             "id": 7,
//             "name": "Sirg`ali tumani",
//             "region": {
//                 "id": 7,
//                 "name": "Toshkent shahri"
//             }
//         },
//         "name": "Yangixayot tumani",
//         "lat": 43.0,
//         "long": 43.0
//     },
//     "seller": {
//         "id": 7,
//         "full_name": "Ergashev Axrorbek Azamovich",
//         "phone_number": "+998770075521",
//         "profile_photo": null
//     },
//     "extra": {
//         "is_mine": false,
//         "status": "active",
//         "expires_at": "14.02.2024"
//     },
//     "is_liked": false,
//     "updated_time": "2023-11-16T16:32:00.134939+05:00"
// },40,8)
//
function classifyPages(cards, limit) {
    const tempPages = {}
    const pagesCount = Math.floor(cards.length / limit) + (cards.length % limit === 0 ? 0 : 1)
    let a = 0, b = limit;
    for (let i = 0; i < pagesCount; i++) {
        tempPages[i + 1] = cards.slice(a, b + 1)
        a = b + 1;
        b += limit;
    }

    return tempPages
}


console.log(classifyPages([{
        "id": 0,
        "name": "Shirt",
        "slug": "Shirt",
        "price": 10000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 0, "name": "Sirg`ali tumani", "region": {
                    "id": 0, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43.0, "long": 43.0
        },
        "seller": {
            "id": 0, "full_name": "Qodirov Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 1,
        "name": "T-Shirt",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 1, "name": "Sirg`ali tumani", "region": {
                    "id": 1, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43.0, "long": 43.0
        },
        "seller": {
            "id": 1, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 2,
        "name": "T-Shirt",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 2, "name": "Sirg`ali tumani", "region": {
                    "id": 2, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43.0, "long": 43.0
        },
        "seller": {
            "id": 2, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 3,
        "name": "T-Shirt",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 3, "name": "Sirg`ali tumani", "region": {
                    "id": 3, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43.0, "long": 43.0
        },
        "seller": {
            "id": 3, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 4,
        "name": "T-Shirt4",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 4, "name": "Sirg`ali tumani", "region": {
                    "id": 4, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43.0, "long": 43.0
        },
        "seller": {
            "id": 4, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 5,
        "name": "T-Shirt5",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 5, "name": "Sirg`ali tumani", "region": {
                    "id": 5, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43.0, "long": 43.0
        },
        "seller": {
            "id": 5, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 6,
        "name": "T-Shirt6",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 6, "name": "Sirg`ali tumani", "region": {
                    "id": 6, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43.0, "long": 43.0
        },
        "seller": {
            "id": 6, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 7,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43.0, "long": 43.0
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 8,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43.0, "long": 43.0
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 9,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 10,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 11,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 12,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 13,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 14,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 15,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 16,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 17,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 18,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 19,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 20,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 21,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 22,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 23,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 24,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 25,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 26,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 27,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 28,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 29,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 30,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 31,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 32,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 33,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 34,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 35,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 36,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 37,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 38,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 39,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 40,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 41,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 42,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 43,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 44,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 45,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 46,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }, {
        "id": 47,
        "name": "Jeans",
        "slug": "T-Shirt",
        "price": 2000000,
        "photo": "https://learnopencv.com/wp-content/uploads/2021/04/image-15.png",
        "published_at": "2023-11-16T15:24:37.758522+05:00",
        "address": {
            "district": {
                "id": 7, "name": "Sirg`ali tumani", "region": {
                    "id": 7, "name": "Toshkent shahri"
                }
            }, "name": "Yangixayot tumani", "lat": 43, "long": 43
        },
        "seller": {
            "id": 7, "full_name": "Ergashev Axrorbek Azamovich", "phone_number": "+998770075521", "profile_photo": null
        },
        "extra": {
            "is_mine": false, "status": "active", "expires_at": "14.02.2024"
        },
        "is_liked": false,
        "updated_time": "2023-11-16T16:32:00.134939+05:00"
    }]

    , 20))