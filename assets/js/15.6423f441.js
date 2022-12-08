(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{369:function(e,t,o){"use strict";o.r(t);var n=o(10),a=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"poc-deployment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#poc-deployment"}},[e._v("#")]),e._v(" PoC Deployment")]),e._v(" "),t("p",[e._v("This is a developer guide to building and deploying reports for the reporting REST service that is part of the deployment at the Hub.")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[t("strong",[e._v("The following contents are for example. This page is under development")])])]),e._v(" "),t("h2",{attrs:{id:"g2p-government-to-person-payment-through-mojaloop-switch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#g2p-government-to-person-payment-through-mojaloop-switch"}},[e._v("#")]),e._v(" G2P (Government to Person) payment through mojaloop switch")]),e._v(" "),t("p",[e._v("This is to demo a G2P payment using the following components")]),e._v(" "),t("ul",[t("li",[e._v("DFSP payment manager")]),e._v(" "),t("li",[e._v("Mojaloop Testing Toolkit")])]),e._v(" "),t("h3",{attrs:{id:"deployment-instructions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deployment-instructions"}},[e._v("#")]),e._v(" Deployment Instructions")]),e._v(" "),t("ul",[t("li",[e._v("Clone this repository")]),e._v(" "),t("li",[e._v("Run all the services with docker-compose"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cd mojaloop-g2p-poc-demo\ndocker-compose up\n")])])])])]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("That’s it, all the services will be deployed.")]),e._v(" "),t("h3",{attrs:{id:"open-the-following-web-pages-to-monitor-the-transaction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#open-the-following-web-pages-to-monitor-the-transaction"}},[e._v("#")]),e._v(" Open the following web pages to monitor the transaction")]),e._v(" "),t("ul",[t("li",[e._v("Mojaloop Testing Toolkit Monitoring: Open the URL http://localhost:6060/admin/monitoring")])]),e._v(" "),t("h3",{attrs:{id:"open-first-payee-mobile-app-simulator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#open-first-payee-mobile-app-simulator"}},[e._v("#")]),e._v(" Open first payee mobile app simulator")]),e._v(" "),t("ul",[t("li",[e._v("Payee mobile app simulator: Open the URL http://localhost:6060/payeemobile")]),e._v(" "),t("li",[e._v("You should see the mobile app simulator with logo "),t("code",[e._v("Pink Bank")])]),e._v(" "),t("li",[e._v("Login with username ‘9876543210’ and don’t need password")]),e._v(" "),t("li",[e._v("Then you should see the message "),t("code",[e._v("Welcome Navya Agarwal")])])]),e._v(" "),t("h3",{attrs:{id:"open-second-payee-mobile-app-simulator-in-a-separate-browser-tab-window"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#open-second-payee-mobile-app-simulator-in-a-separate-browser-tab-window"}},[e._v("#")]),e._v(" Open second payee mobile app simulator in a separate browser tab / window")]),e._v(" "),t("ul",[t("li",[e._v("Payee mobile app simulator: Open the URL http://localhost:6061/payeemobile")]),e._v(" "),t("li",[e._v("You should see the mobile app simulator with logo "),t("code",[e._v("Green Bank")])]),e._v(" "),t("li",[e._v("Login with username ‘8765432101’ and don’t need password")]),e._v(" "),t("li",[e._v("Then you should see the message "),t("code",[e._v("Welcome Arjun Varma")])])]),e._v(" "),t("h3",{attrs:{id:"executing-disbursement"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#executing-disbursement"}},[e._v("#")]),e._v(" Executing disbursement")]),e._v(" "),t("ul",[t("li",[e._v("Execute the following HTTP request either from command line or from postman."),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('curl --location --request POST \'http://localhost:3001/disbursement\' --header \'Content-Type: application/json\' --data-raw \'{\n  "disbursementId": "f2957f7a-34c3-11ed-a261-0242ac120002",\n  "note": "PENSION",\n  "payeeList": [\n      {\n          "payeeIdType": "MSISDN",\n          "payeeIdValue": "9876543210",\n          "amount": 2000,\n          "currency": "INR"\n      },\n      {\n          "payeeIdType": "MSISDN",\n          "payeeIdValue": "8765432101",\n          "amount": 3000,\n          "currency": "INR"\n      }\n  ]\n}\'\n')])])])]),e._v(" "),t("li",[e._v("You should get the ‘COMPLETED’ status in the response.")]),e._v(" "),t("li",[e._v("You can check various requests and responses in TTK monitoring page")]),e._v(" "),t("li",[e._v("You should see the incoming notification in both payee mobile app simulators")])]),e._v(" "),t("h2",{attrs:{id:"thridparty-transfer-in-mojaloop-out-of-a-fhir-invoice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#thridparty-transfer-in-mojaloop-out-of-a-fhir-invoice"}},[e._v("#")]),e._v(" Thridparty transfer in mojaloop out of a fhir invoice")]),e._v(" "),t("p",[e._v("This is to demo a third party transfer using the following components")]),e._v(" "),t("ul",[t("li",[e._v("OpenHIM")]),e._v(" "),t("li",[e._v("FHIR-Mojaloop OpenHIM Mediator")]),e._v(" "),t("li",[e._v("PISP payment manager")]),e._v(" "),t("li",[e._v("Mojaloop Testing Toolkit")])]),e._v(" "),t("h3",{attrs:{id:"technical-architecture"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#technical-architecture"}},[e._v("#")]),e._v(" Technical Architecture")]),e._v(" "),t("p",[t("img",{attrs:{src:"assets/images/fhir-invoice-pisp-poc.png",alt:"Technical Architecture Diagram"}})]),e._v(" "),t("h3",{attrs:{id:"deployment-instructions-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deployment-instructions-2"}},[e._v("#")]),e._v(" Deployment Instructions")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Clone this repository")])]),e._v(" "),t("li",[t("p",[e._v("Start OpenHIM")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cd openhim\ndocker-compose up\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Now, navigate to your web server and you should see the OpenHIM-console load (eg. "),t("code",[e._v("http://localhost:9080")]),e._v(") and login. The default username and password are:")]),e._v(" "),t("ul",[t("li",[e._v("username: "),t("code",[e._v("root@openhim.org")])]),e._v(" "),t("li",[e._v("password: "),t("code",[e._v("openhim-password")])])]),e._v(" "),t("p",[e._v("You will be prompted to change this. Change the password to "),t("code",[e._v("123456")]),e._v(" to match the mediator configuration. If you want any other password, please change the mediator configuration too.")]),e._v(" "),t("blockquote",[t("p",[t("strong",[e._v("Note:")]),e._v(" You will have problems logging in if your OpenHIM server is still setup to use a self-signed certificate (the default). To get around this you can use the following workaround (the proper way to solve this is to upload a proper certificate into the OpenHIM-core):")])]),e._v(" "),t("p",[e._v("Visit the following link: "),t("code",[e._v("https://localhost:8080/authenticate/root@openhim.org")]),e._v(" in Chrome. Make sure you are visiting this link from the system that is running the OpenHIM-core. Otherwise, replace "),t("code",[e._v("localhost")]),e._v(" and "),t("code",[e._v("8080")]),e._v(" with the appropriate OpenHIM-core server hostname and API port. You should see a message saying “"),t("strong",[e._v("Your connection is not private")]),e._v("”. Click “Advanced” and then click “Proceed”. Once you have done this, you should see some JSON, you can ignore this and close the page. Ths will ignore the fact that the certificate is self-signed. Now, you should be able to go back to the Console login page and login. This problem will occur every now and then until you load a properly signed certificate into the OpenHIM-core server.")])])]),e._v(" "),t("hr"),e._v(" "),t("ul",[t("li",[e._v("Run fhir4-mojaloop openhim mediator (You need to have node version v16.14.2 installed)"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cd openhim/mediators/openhim-mediator-fhir-mojaloop-poc\nnpm run startDev\n")])])]),e._v("Then you should see a log message in the console like “info: Successfully registered mediator!”")]),e._v(" "),t("li",[e._v("Run Third party SDK stack"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cd thirdparty-sdk\ndocker-compose up\n")])])])])]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("That’s it, all the services are deployed.")]),e._v(" "),t("h3",{attrs:{id:"configuring-openhim-channel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuring-openhim-channel"}},[e._v("#")]),e._v(" Configuring OpenHIM channel")]),e._v(" "),t("ul",[t("li",[e._v("Open openHIM console on ‘http://localhost:9080’ with username ‘root@openhim.org’ and password ‘123456’ (As we changed to this in previous step)")]),e._v(" "),t("li",[e._v("Goto ‘Mediators’ and click on the entry ‘openhim-mediator-fhir-mojaloop-poc’")]),e._v(" "),t("li",[e._v("Click on the green ‘+’ icon there to create a channel. All the configuration for the channel is provided as default configuration in the mediator. So we don’t need to change the channel configuration.")])]),e._v(" "),t("h3",{attrs:{id:"have-the-following-web-pages-ready-to-monitor-the-transaction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#have-the-following-web-pages-ready-to-monitor-the-transaction"}},[e._v("#")]),e._v(" Have the following web pages ready to monitor the transaction")]),e._v(" "),t("ul",[t("li",[e._v("OpenHIM console: Login to the console and goto ‘Transaction Log’")]),e._v(" "),t("li",[e._v("Run fhir4-mojaloop openhim mediator (You need to have node version v16.14.2 installed)")]),e._v(" "),t("li",[e._v("Payee mobile app simulator: Open the URL http://localhost:6060/payeemobile and login with username ‘987654321’ and don’t need password")]),e._v(" "),t("li",[e._v("Mojaloop Testing Toolkit Monitoring: Open the URL http://localhost:6060/admin/monitoring")])]),e._v(" "),t("h3",{attrs:{id:"making-a-transfer-and-monitor-the-logs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#making-a-transfer-and-monitor-the-logs"}},[e._v("#")]),e._v(" Making a transfer and monitor the logs")]),e._v(" "),t("ul",[t("li",[e._v("Execute the following HTTP request either from command line or from postman."),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('curl --location --request POST \'http://localhost:5001/fhir-mojaloop/sendmoney/fhir4-invoice\' --header \'Content-Type: application/json\' --data-raw \'{\n"resourceType": "Invoice",\n"id": "b88e5a38-35ad-4d8c-aad3-44b4ace8c0b1",\n"identifier": [\n    {\n        "type": {\n            "coding": [\n                {\n                    "system": "https://openimis.github.io/openimis_fhir_r4_ig/CodeSystem/openimis-identifiers",\n                    "code": "UUID"\n                }\n            ]\n        },\n        "value": "b88e5a38-35ad-4d8c-aad3-44b4ace8c0b1"\n    },\n    {\n        "type": {\n            "coding": [\n                {\n                    "system": "https://openimis.github.io/openimis_fhir_r4_ig/CodeSystem/openimis-identifiers",\n                    "code": "Code"\n                }\n            ]\n        },\n        "value": "IV-UC-8156989548-105"\n    }\n],\n"status": "active",\n"type": {\n    "coding": [\n        {\n            "system": "https://openimis.github.io/openimis_fhir_r4_ig/CodeSystem/bill-type",\n            "code": "policy",\n            "display": "Policy"\n        }\n    ]\n},\n"recipient": {\n    "reference": "Patient/D944AFE5-F1A9-45D1-BE82-7BE28719A7E1",\n    "type": "Patient",\n    "identifier": {\n        "type": {\n            "coding": [\n                {\n                    "system": "https://openimis.github.io/openimis_fhir_r4_ig/CodeSystem/openimis-identifiers",\n                    "code": "UUID"\n                }\n            ]\n        },\n        "value": "D944AFE5-F1A9-45D1-BE82-7BE28719A7E1"\n    }\n},\n"date": "2022-04-22",\n"lineItem": [\n    {\n        "chargeItemCodeableConcept": {\n            "coding": [\n                {\n                    "system": "https://openimis.github.io/openimis_fhir_r4_ig/CodeSystem/bill-charge-item",\n                    "code": "policy",\n                    "display": "Policy"\n                }\n            ]\n        },\n        "priceComponent": [\n            {\n                "extension": [\n                    {\n                        "url": "https://openimis.github.io/openimis_fhir_r4_ig//StructureDefinition/unit-price",\n                        "valueMoney": {\n                            "value": 2390.0,\n                            "currency": "USD"\n                        }\n                    }\n                ],\n                "type": "base",\n                "code": {\n                    "coding": [\n                        {\n                            "system": "Code",\n                            "code": "Code",\n                            "display": "IV-UC-8156989548-105"\n                        }\n                    ]\n                },\n                "factor": 1.0,\n                "amount": {\n                    "value": 2390.0,\n                    "currency": "USD"\n                }\n            }\n        ]\n    }\n],\n"totalNet": {\n    "value": 2390.0,\n    "currency": "USD"\n},\n"totalGross": {\n    "value": 2390.0,\n    "currency": "USD"\n}\n')])])])])]),e._v(" "),t("p",[e._v("}’")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("- You should get the 'Completed' status in the response and 'transactionRequestState' should be 'ACCEPTED' in the approveResponse body parameter.\n- Open openHIM console on 'http://localhost:9080' with username 'root@openhim.org' and password '123456' (As we changed to this in previous step)\n- Goto \"Transaction Log\" and you can find the transaction there.\n- You can check various requests and response in TTK UI http://localhost:6060\n- You should see the incoming notification in payee mobile app simulator\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);