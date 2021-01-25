// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

const { DefaultAzureCredential } = require("@azure/identity");
const { DigitalTwinsClient } = require("@azure/digital-twins-core");
const { inspect } = require("util");

// Simple example of how to:
// - create a DigitalTwins Service Client using the DigitalTwinsClient constructor
// - list all incoming relationships using the paginated API
//
// Preconditions:
// - Environment variables have to be set
// - DigitalTwins enabled device must exist on the ADT hub
async function main() {
  // - AZURE_URL: The tenant ID in Azure Active Directory
  const url = process.env.AZURE_URL;

  // DefaultAzureCredential expects the following three environment variables:
  // - AZURE_TENANT_ID: The tenant ID in Azure Active Directory
  // - AZURE_CLIENT_ID: The application (client) ID registered in the AAD tenant
  // - AZURE_CLIENT_SECRET: The client secret for the registered application
  const credential = new DefaultAzureCredential();
  const serviceClient = new DigitalTwinsClient(url, credential);

  // List incoming relationships
  const digitalTwinId = "<DIGITAL_TWIN_ID>"; // from the samples: BuildingTwin, FloorTwin, HVACTwin, RoomTwin
  const incomingRelationships = serviceClient.listIncomingRelationships(digitalTwinId);
  for await (const incomingRelationship of incomingRelationships) {
    console.log(`Incoming Relationship:`);
    console.log(inspect(incomingRelationship));
  }
}

main().catch((err) => {
  console.log("error code: ", err.code);
  console.log("error message: ", err.message);
  console.log("error stack: ", err.stack);
});
