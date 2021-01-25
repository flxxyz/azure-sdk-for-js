/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/configurationsMappers";
import * as Parameters from "../models/parameters";
import { HDInsightManagementClientContext } from "../hDInsightManagementClientContext";

/** Class representing a Configurations. */
export class Configurations {
  private readonly client: HDInsightManagementClientContext;

  /**
   * Create a Configurations.
   * @param {HDInsightManagementClientContext} client Reference to the service client.
   */
  constructor(client: HDInsightManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all configuration information for an HDI cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param [options] The optional parameters
   * @returns Promise<Models.ConfigurationsListResponse>
   */
  list(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<Models.ConfigurationsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param callback The callback
   */
  list(resourceGroupName: string, clusterName: string, callback: msRest.ServiceCallback<Models.ClusterConfigurations>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, clusterName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ClusterConfigurations>): void;
  list(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ClusterConfigurations>, callback?: msRest.ServiceCallback<Models.ClusterConfigurations>): Promise<Models.ConfigurationsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ConfigurationsListResponse>;
  }

  /**
   * Configures the HTTP settings on the specified cluster. This API is deprecated, please use
   * UpdateGatewaySettings in cluster endpoint instead.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param configurationName The name of the cluster configuration.
   * @param parameters The cluster configurations.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  update(resourceGroupName: string, clusterName: string, configurationName: string, parameters: { [propertyName: string]: string }, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginUpdate(resourceGroupName,clusterName,configurationName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * The configuration object for the specified cluster. This API is not recommended and might be
   * removed in the future. Please consider using List configurations API instead.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param configurationName The name of the cluster configuration.
   * @param [options] The optional parameters
   * @returns Promise<Models.ConfigurationsGetResponse>
   */
  get(resourceGroupName: string, clusterName: string, configurationName: string, options?: msRest.RequestOptionsBase): Promise<Models.ConfigurationsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param configurationName The name of the cluster configuration.
   * @param callback The callback
   */
  get(resourceGroupName: string, clusterName: string, configurationName: string, callback: msRest.ServiceCallback<{ [propertyName: string]: string }>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param configurationName The name of the cluster configuration.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, clusterName: string, configurationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<{ [propertyName: string]: string }>): void;
  get(resourceGroupName: string, clusterName: string, configurationName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<{ [propertyName: string]: string }>, callback?: msRest.ServiceCallback<{ [propertyName: string]: string }>): Promise<Models.ConfigurationsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        configurationName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ConfigurationsGetResponse>;
  }

  /**
   * Configures the HTTP settings on the specified cluster. This API is deprecated, please use
   * UpdateGatewaySettings in cluster endpoint instead.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param configurationName The name of the cluster configuration.
   * @param parameters The cluster configurations.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, clusterName: string, configurationName: string, parameters: { [propertyName: string]: string }, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        configurationName,
        parameters,
        options
      },
      beginUpdateOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/configurations",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ClusterConfigurations
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/configurations/{configurationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.configurationName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/configurations/{configurationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.configurationName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      required: true,
      serializedName: "parameters",
      type: {
        name: "Dictionary",
        value: {
          type: {
            name: "String"
          }
        }
      }
    }
  },
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
