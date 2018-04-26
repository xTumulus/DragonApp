
var clientId = '';
var url = '';
var env = '';
if (~window.location.hostname.indexOf('cdn.mtc.byu.edu') ||
		window.location.hostname === 'apps.mtc.byu.edu') {
	clientId = '7ebc0fb7-ec74-458a-abe1-59071444332a';
} else if (~window.location.hostname.indexOf('support-apps.mtc.byu.edu')) {
	clientId = 'a844b05e-cc07-452d-98fc-c579f3c47d98';
} else if (~window.location.hostname.indexOf('test-apps.mtc.byu.edu')) {
	clientId = 'dcd934bb-87eb-4022-95ad-b32aa0c6579f';
} else if (~window.location.hostname.indexOf('stage-apps.mtc.byu.edu')) {
	clientId = 'cc072139-3ad2-4ab9-b1bc-c13490bcf289';
} else if (~window.location.hostname.indexOf('beta-apps.mtc.byu.edu')) {
	clientId = '25bdd848-f8cd-499a-a9c4-7a75c5b4407c';
} else {
	clientId = 'd8f60ed2-4c56-4d02-b380-366248dcded3';
}

var contentUrls = [
	'http://localhost:8080',
	'https://devapplications.mtc.byu.edu',
	'https://testapplications.mtc.byu.edu',
	'https://betaapplications.mtc.byu.edu',
	'https://stageapplications.mtc.byu.edu',
	'https://supportapplications.mtc.byu.edu',
	'https://api.mtc.byu.edu',
	'https://app.mtc.byu.edu'
];

var scopes = [
	'https://api.mtc.byu.edu/devtraining'
];


MTCAuth.configure({
	clientId: clientId,
	contentUrls: contentUrls,
	scopes: scopes,
	redirectUri: true,
	options: {
		requestAuths: ''
	},
	newTabRedirectUri: false
});
