const express = require('express')
const config = require('../config')
const noEndpoint = require('../utils/no-endpoint')
const getIframe = require('../utils/get-iframe')

const route = express.Router()

route.get('/', function(req, res) {
	const slug = req.query.slug

	if (!slug) return noEndpoint(res)

	res.send(getIframe(slug, config.playerScriptURL))
})

module.exports = route
