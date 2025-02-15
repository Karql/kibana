/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { z } from 'zod';

/*
 * NOTICE: Do not edit this file manually.
 * This file is automatically generated by the OpenAPI Generator, @kbn/openapi-generator.
 *
 * info:
 *   title: Scan Schema
 *   version: 2023-10-31
 */

import { BaseActionSchema } from '../model/schema/common.gen';

export type ScanActionRequestBody = z.infer<typeof ScanActionRequestBody>;
export const ScanActionRequestBody = BaseActionSchema.merge(
  z.object({
    parameters: z.object({
      path: z.string(),
    }),
  })
);
