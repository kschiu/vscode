/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IWorkbenchContributionsRegistry, Extensions } from 'vs/workbench/common/contributions';
import platform = require('vs/platform/platform');
import { registerSingleton } from 'vs/platform/instantiation/common/extensions';
import { IDebugService } from 'vs/workbench/parts/debug/common/debug';
import service = require('vs/workbench/parts/debug/electron-browser/debugService');

// Register Service
registerSingleton(IDebugService, service.DebugService);