import type { Principal } from '@dfinity/principal';
export interface chat { 'sender' : string, 'message' : string }
export interface _SERVICE {
  'createNewRoom' : (arg_0: string) => Promise<undefined>,
  'getMessage' : (arg_0: string) => Promise<Array<chat>>,
  'sendMessage' : (arg_0: string, arg_1: string, arg_2: string) => Promise<
      undefined
    >,
}
