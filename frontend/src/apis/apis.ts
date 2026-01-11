/**
 *
 * Copyright (C) 2023 Quan Chen <chenquan_act@163.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import {
  Dispatch,
  ResourceServerAddr,
  OpenFinder,
  BaseDictDir,
} from '$/go/main/App'

import { model } from '$/go/models'

export const StaticDictServerURL = async (): Promise<string> => {
  try {
    return await ResourceServerAddr()
  } catch {
    return 'http://localhost:1'
  }
}

export const OpenDirOrFile = async (filepath: string): Promise<void> => {
  try {
    await OpenFinder(filepath)
  } catch {
    // fallback 處理
  }
}

export const BaseDictDirectory = async (): Promise<string> => {
  try {
    return BaseDictDir()
  } catch {
    return 'internal error'
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const requestBackend = async (apiName: string, data: { [key: string]: any }): Promise<model.Resp> => {
  try {
    console.log(
      `[dicts-api] ipc call, dispatch [${apiName}] event, args:`,
      data
    )
    return Dispatch(apiName, data)
  } catch {
    return {
      data: '',
      err: 'browser not support or system not initialzd yet',
      code: 500,
    }
  }
}
