var Promise = require('bluebird')
var helper = require('sendgrid').mail

module.exports = {

	sendEmail: function(from, recipient, subject, text){
		return new Promise(function (resolve, reject){
			var content = new helper.Content('text/html', text)
			var mail = new helper.Mail(helper.Email(from, process.env.DEFAULT_EMAIL_SENDER), subject, helper.Email(recipient), content)
			var body = mail.toJSON()

			var sg = require('sendgrid')(process.env.SENDGRID_API_KEY)
			var request = sg.emptyRequest({
			    method: 'POST',
			    path: '/v3/mail/send',
			    body: body
			})

			sg.API(request, function(error, response) {
				if (error){
					reject(error)
					return
				}

				resolve(response.body)
			})
		})
	}
}
