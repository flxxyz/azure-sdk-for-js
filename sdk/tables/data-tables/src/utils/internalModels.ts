// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  TableServiceClientOptions,
  TableBatch,
  TableEntity,
  CreateTableEntityResponse,
  DeleteTableEntityOptions,
  GetTableEntityOptions,
  GetTableEntityResponse,
  ListTableEntitiesOptions,
  UpdateMode,
  UpdateTableEntityOptions,
  TableEntityResult,
  TableItem
} from "../models";
import { TablesSharedKeyCredential } from "../TablesSharedKeyCredential";
import { Pipeline, PipelineRequest } from "@azure/core-rest-pipeline";
import { DeleteTableEntityResponse, UpdateEntityResponse, UpsertEntityResponse } from "..";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { OperationOptions } from "@azure/core-client";

export interface ConnectionString {
  kind: "AccountConnString" | "SASConnString";
  url: string;
  accountName: string;
  accountKey?: any;
  accountSas?: string;
}

/**
 * Contains response data for the listTable operation.
 */
export type ListTableItemsResponse = Array<TableItem> & {
  /**
   * This header contains the continuation token value.
   */
  nextTableName?: string;
};

/**
 * Contains response data for the getEntity operation.
 */
export type ListEntitiesResponse<T extends object> = Array<TableEntityResult<T>> & {
  /**
   * Contains the continuation token value for partition key.
   */
  nextPartitionKey?: string;
  /**
   * Contains the continuation token value for row key.
   */
  nextRowKey?: string;
};

export interface ClientParamsFromConnectionString {
  url: string;
  options?: TableServiceClientOptions;
  credential?: TablesSharedKeyCredential;
}

/**
 * Batch request builder
 */
export interface InnerBatchRequest {
  /**
   * Batch request body
   */
  body: string[];
  /**
   * Creates a pipeline to intercept sub-requests and
   * build the request body
   */
  createPipeline(): Pipeline;
  /**
   * Adds an operation to add to the batch body
   * @param request - The operation to add
   */
  appendSubRequestToBody(request: PipelineRequest): void;
  /**
   * Gets the batch request body
   */
  getHttpRequestBody(): string;
}

export interface InternalBatchClientOptions extends TableServiceClientOptions {
  innerBatchRequest: InnerBatchRequest;
}

/**
 * Describes the shape of a TableClient
 */
export interface TableClientLike {
  /**
   * Name of the table to perform operations on.
   */
  readonly tableName: string;
  /**
   *  Creates the current table.
   * @param options - The options parameters.
   */
  createTable(options?: OperationOptions): Promise<void>;
  /**
   * Creates a new Batch to collect sub-operations that can be submitted together via submitBatch
   * @param partitionKey - partitionKey to which the batch operations will be targetted to
   */
  createBatch(partitionKey: string): TableBatch;
  /**
   * Insert entity in the table.
   * @param entity - The properties for the table entity.
   * @param options - The options parameters.
   */
  createEntity<T extends object>(
    entity: TableEntity<T>,
    options?: OperationOptions
  ): Promise<CreateTableEntityResponse>;
  /**
   * Permanently deletes the current table with all of its entities.
   * @param options - The options parameters.
   */
  deleteTable(options?: OperationOptions): Promise<void>;
  /**
   * Permanently deletes the current table if it exists in the account.
   * @param options - The options parameters.
   */
  deleteEntity(
    partitionKey: string,
    rowKey: string,
    options?: DeleteTableEntityOptions
  ): Promise<DeleteTableEntityResponse>;
  /**
   * Returns a single entity in the table.
   * @param partitionKey - The partition key of the entity.
   * @param rowKey - The row key of the entity.
   * @param options - The options parameters.
   */
  getEntity<T extends object>(
    partitionKey: string,
    rowKey: string,
    options?: GetTableEntityOptions
  ): Promise<GetTableEntityResponse<T>>;
  /**
   * Queries entities in a table.
   * @param tableName - The name of the table.
   * @param options - The options parameters.
   */
  listEntities<T extends object>(
    options?: ListTableEntitiesOptions
  ): PagedAsyncIterableIterator<T, ListEntitiesResponse<T>>;
  /**
   * Update an entity in the table.
   * @param entity - The properties of the entity to be updated.
   * @param mode - The different modes for updating the entity:
   *               - Merge: Updates an entity by updating the entity's properties without replacing the existing entity.
   *               - Replace: Updates an existing entity by replacing the entire entity.
   * @param options - The options parameters.
   */
  updateEntity<T extends object>(
    entity: TableEntity<T>,
    mode: UpdateMode,
    options?: UpdateTableEntityOptions
  ): Promise<UpdateEntityResponse>;
  /**
   * Upsert an entity in the table.
   * @param tableName - The name of the table.
   * @param entity - The properties for the table entity.
   * @param mode - The different modes for updating the entity:
   *               - Merge: Updates an entity by updating the entity's properties without replacing the existing entity.
   *               - Replace: Updates an existing entity by replacing the entire entity.
   * @param options - The options parameters.
   */
  upsertEntity<T extends object>(
    entity: TableEntity<T>,
    mode: UpdateMode,
    options?: OperationOptions
  ): Promise<UpsertEntityResponse>;
}
