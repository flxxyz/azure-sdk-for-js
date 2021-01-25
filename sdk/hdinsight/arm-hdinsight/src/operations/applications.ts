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
import * as Mappers from "../models/applicationsMappers";
import * as Parameters from "../models/parameters";
import { HDInsightManagementClientContext } from "../hDInsightManagementClientContext";

/** Class representing a Applications. */
export class Applications {
  private readonly client: HDInsightManagementClientContext;

  /**
   * Create a Applications.
   * @param {HDInsightManagementClientContext} client Reference to the service client.
   */
  constructor(client: HDInsightManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all of the applications for the HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationsListByClusterResponse>
   */
  listByCluster(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase): Promise<Models.ApplicationsListByClusterResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param callback The callback
   */
  listByCluster(resourceGroupName: string, clusterName: string, callback: msRest.ServiceCallback<Models.ApplicationListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByCluster(resourceGroupName: string, clusterName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationListResult>): void;
  listByCluster(resourceGroupName: string, clusterName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationListResult>, callback?: msRest.ServiceCallback<Models.ApplicationListResult>): Promise<Models.ApplicationsListByClusterResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        options
      },
      listByClusterOperationSpec,
      callback) as Promise<Models.ApplicationsListByClusterResponse>;
  }

  /**
   * Gets properties of the specified application.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param applicationName The constant value for the application name.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationsGetResponse>
   */
  get(resourceGroupName: string, clusterName: string, applicationName: string, options?: msRest.RequestOptionsBase): Promise<Models.ApplicationsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param applicationName The constant value for the application name.
   * @param callback The callback
   */
  get(resourceGroupName: string, clusterName: string, applicationName: string, callback: msRest.ServiceCallback<Models.Application>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param applicationName The constant value for the application name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, clusterName: string, applicationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Application>): void;
  get(resourceGroupName: string, clusterName: string, applicationName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Application>, callback?: msRest.ServiceCallback<Models.Application>): Promise<Models.ApplicationsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        applicationName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ApplicationsGetResponse>;
  }

  /**
   * Creates applications for the HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param applicationName The constant value for the application name.
   * @param parameters The application create request.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationsCreateResponse>
   */
  create(resourceGroupName: string, clusterName: string, applicationName: string, parameters: Models.Application, options?: msRest.RequestOptionsBase): Promise<Models.ApplicationsCreateResponse> {
    return this.beginCreate(resourceGroupName,clusterName,applicationName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ApplicationsCreateResponse>;
  }

  /**
   * Deletes the specified application on the HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param applicationName The constant value for the application name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, clusterName: string, applicationName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,clusterName,applicationName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates applications for the HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param applicationName The constant value for the application name.
   * @param parameters The application create request.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(resourceGroupName: string, clusterName: string, applicationName: string, parameters: Models.Application, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        applicationName,
        parameters,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Deletes the specified application on the HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param applicationName The constant value for the application name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, clusterName: string, applicationName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterName,
        applicationName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Lists all of the applications for the HDInsight cluster.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationsListByClusterNextResponse>
   */
  listByClusterNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ApplicationsListByClusterNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByClusterNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ApplicationListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByClusterNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationListResult>): void;
  listByClusterNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationListResult>, callback?: msRest.ServiceCallback<Models.ApplicationListResult>): Promise<Models.ApplicationsListByClusterNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByClusterNextOperationSpec,
      callback) as Promise<Models.ApplicationsListByClusterNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByClusterOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/applications",
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
      bodyMapper: Mappers.ApplicationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/applications/{applicationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.applicationName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Application
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/applications/{applicationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.applicationName
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
      ...Mappers.Application,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Application
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/applications/{applicationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.applicationName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByClusterNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
