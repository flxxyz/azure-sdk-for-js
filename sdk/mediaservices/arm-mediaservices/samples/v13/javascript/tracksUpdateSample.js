/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureMediaServices } = require("@azure/arm-mediaservices");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Updates an existing Track in the asset
 *
 * @summary Updates an existing Track in the asset
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/Metadata/stable/2022-08-01/examples/asset-tracks-update.json
 */
async function updateATrack() {
  const subscriptionId =
    process.env["MEDIASERVICES_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["MEDIASERVICES_RESOURCE_GROUP"] || "contoso";
  const accountName = "contosomedia";
  const assetName = "ClimbingMountRainer";
  const trackName = "text1";
  const parameters = {
    track: {
      odataType: "#Microsoft.Media.TextTrack",
      displayName: "A new name",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.tracks.beginUpdateAndWait(
    resourceGroupName,
    accountName,
    assetName,
    trackName,
    parameters
  );
  console.log(result);
}

async function main() {
  updateATrack();
}

main().catch(console.error);
