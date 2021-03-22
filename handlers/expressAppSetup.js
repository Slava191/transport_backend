const express = require('express')

exports.init = app => app
                        .use(express.urlencoded({extended: false}))
                        .use(express.json())
                        .use(express.static('./uploads'));