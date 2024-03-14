
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Region
 * 
 */
export type Region = $Result.DefaultSelection<Prisma.$RegionPayload>
/**
 * Model Sub_Region
 * 
 */
export type Sub_Region = $Result.DefaultSelection<Prisma.$Sub_RegionPayload>
/**
 * Model Date_Format
 * 
 */
export type Date_Format = $Result.DefaultSelection<Prisma.$Date_FormatPayload>
/**
 * Model Currency
 * 
 */
export type Currency = $Result.DefaultSelection<Prisma.$CurrencyPayload>
/**
 * Model Flag
 * 
 */
export type Flag = $Result.DefaultSelection<Prisma.$FlagPayload>
/**
 * Model Coat_Of_Arm
 * 
 */
export type Coat_Of_Arm = $Result.DefaultSelection<Prisma.$Coat_Of_ArmPayload>
/**
 * Model Country
 * 
 */
export type Country = $Result.DefaultSelection<Prisma.$CountryPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.region`: Exposes CRUD operations for the **Region** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regions
    * const regions = await prisma.region.findMany()
    * ```
    */
  get region(): Prisma.RegionDelegate<ExtArgs>;

  /**
   * `prisma.sub_Region`: Exposes CRUD operations for the **Sub_Region** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sub_Regions
    * const sub_Regions = await prisma.sub_Region.findMany()
    * ```
    */
  get sub_Region(): Prisma.Sub_RegionDelegate<ExtArgs>;

  /**
   * `prisma.date_Format`: Exposes CRUD operations for the **Date_Format** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Date_Formats
    * const date_Formats = await prisma.date_Format.findMany()
    * ```
    */
  get date_Format(): Prisma.Date_FormatDelegate<ExtArgs>;

  /**
   * `prisma.currency`: Exposes CRUD operations for the **Currency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Currencies
    * const currencies = await prisma.currency.findMany()
    * ```
    */
  get currency(): Prisma.CurrencyDelegate<ExtArgs>;

  /**
   * `prisma.flag`: Exposes CRUD operations for the **Flag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flags
    * const flags = await prisma.flag.findMany()
    * ```
    */
  get flag(): Prisma.FlagDelegate<ExtArgs>;

  /**
   * `prisma.coat_Of_Arm`: Exposes CRUD operations for the **Coat_Of_Arm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coat_Of_Arms
    * const coat_Of_Arms = await prisma.coat_Of_Arm.findMany()
    * ```
    */
  get coat_Of_Arm(): Prisma.Coat_Of_ArmDelegate<ExtArgs>;

  /**
   * `prisma.country`: Exposes CRUD operations for the **Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.CountryDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.11.0
   * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Region: 'Region',
    Sub_Region: 'Sub_Region',
    Date_Format: 'Date_Format',
    Currency: 'Currency',
    Flag: 'Flag',
    Coat_Of_Arm: 'Coat_Of_Arm',
    Country: 'Country'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'region' | 'sub_Region' | 'date_Format' | 'currency' | 'flag' | 'coat_Of_Arm' | 'country'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Region: {
        payload: Prisma.$RegionPayload<ExtArgs>
        fields: Prisma.RegionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findFirst: {
            args: Prisma.RegionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findMany: {
            args: Prisma.RegionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          create: {
            args: Prisma.RegionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          createMany: {
            args: Prisma.RegionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RegionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          update: {
            args: Prisma.RegionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          deleteMany: {
            args: Prisma.RegionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RegionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RegionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          aggregate: {
            args: Prisma.RegionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRegion>
          }
          groupBy: {
            args: Prisma.RegionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RegionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegionCountArgs<ExtArgs>,
            result: $Utils.Optional<RegionCountAggregateOutputType> | number
          }
        }
      }
      Sub_Region: {
        payload: Prisma.$Sub_RegionPayload<ExtArgs>
        fields: Prisma.Sub_RegionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Sub_RegionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Sub_RegionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Sub_RegionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Sub_RegionPayload>
          }
          findFirst: {
            args: Prisma.Sub_RegionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Sub_RegionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Sub_RegionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Sub_RegionPayload>
          }
          findMany: {
            args: Prisma.Sub_RegionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Sub_RegionPayload>[]
          }
          create: {
            args: Prisma.Sub_RegionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Sub_RegionPayload>
          }
          createMany: {
            args: Prisma.Sub_RegionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Sub_RegionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Sub_RegionPayload>
          }
          update: {
            args: Prisma.Sub_RegionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Sub_RegionPayload>
          }
          deleteMany: {
            args: Prisma.Sub_RegionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Sub_RegionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Sub_RegionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Sub_RegionPayload>
          }
          aggregate: {
            args: Prisma.Sub_RegionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSub_Region>
          }
          groupBy: {
            args: Prisma.Sub_RegionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Sub_RegionGroupByOutputType>[]
          }
          count: {
            args: Prisma.Sub_RegionCountArgs<ExtArgs>,
            result: $Utils.Optional<Sub_RegionCountAggregateOutputType> | number
          }
        }
      }
      Date_Format: {
        payload: Prisma.$Date_FormatPayload<ExtArgs>
        fields: Prisma.Date_FormatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Date_FormatFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Date_FormatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Date_FormatFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Date_FormatPayload>
          }
          findFirst: {
            args: Prisma.Date_FormatFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Date_FormatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Date_FormatFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Date_FormatPayload>
          }
          findMany: {
            args: Prisma.Date_FormatFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Date_FormatPayload>[]
          }
          create: {
            args: Prisma.Date_FormatCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Date_FormatPayload>
          }
          createMany: {
            args: Prisma.Date_FormatCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Date_FormatDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Date_FormatPayload>
          }
          update: {
            args: Prisma.Date_FormatUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Date_FormatPayload>
          }
          deleteMany: {
            args: Prisma.Date_FormatDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Date_FormatUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Date_FormatUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Date_FormatPayload>
          }
          aggregate: {
            args: Prisma.Date_FormatAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDate_Format>
          }
          groupBy: {
            args: Prisma.Date_FormatGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Date_FormatGroupByOutputType>[]
          }
          count: {
            args: Prisma.Date_FormatCountArgs<ExtArgs>,
            result: $Utils.Optional<Date_FormatCountAggregateOutputType> | number
          }
        }
      }
      Currency: {
        payload: Prisma.$CurrencyPayload<ExtArgs>
        fields: Prisma.CurrencyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CurrencyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CurrencyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          findFirst: {
            args: Prisma.CurrencyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CurrencyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          findMany: {
            args: Prisma.CurrencyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>[]
          }
          create: {
            args: Prisma.CurrencyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          createMany: {
            args: Prisma.CurrencyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CurrencyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          update: {
            args: Prisma.CurrencyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          deleteMany: {
            args: Prisma.CurrencyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CurrencyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CurrencyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          aggregate: {
            args: Prisma.CurrencyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCurrency>
          }
          groupBy: {
            args: Prisma.CurrencyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CurrencyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CurrencyCountArgs<ExtArgs>,
            result: $Utils.Optional<CurrencyCountAggregateOutputType> | number
          }
        }
      }
      Flag: {
        payload: Prisma.$FlagPayload<ExtArgs>
        fields: Prisma.FlagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlagFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FlagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlagFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>
          }
          findFirst: {
            args: Prisma.FlagFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FlagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlagFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>
          }
          findMany: {
            args: Prisma.FlagFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>[]
          }
          create: {
            args: Prisma.FlagCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>
          }
          createMany: {
            args: Prisma.FlagCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FlagDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>
          }
          update: {
            args: Prisma.FlagUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>
          }
          deleteMany: {
            args: Prisma.FlagDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FlagUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FlagUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>
          }
          aggregate: {
            args: Prisma.FlagAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFlag>
          }
          groupBy: {
            args: Prisma.FlagGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FlagGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlagCountArgs<ExtArgs>,
            result: $Utils.Optional<FlagCountAggregateOutputType> | number
          }
        }
      }
      Coat_Of_Arm: {
        payload: Prisma.$Coat_Of_ArmPayload<ExtArgs>
        fields: Prisma.Coat_Of_ArmFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Coat_Of_ArmFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Coat_Of_ArmPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Coat_Of_ArmFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Coat_Of_ArmPayload>
          }
          findFirst: {
            args: Prisma.Coat_Of_ArmFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Coat_Of_ArmPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Coat_Of_ArmFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Coat_Of_ArmPayload>
          }
          findMany: {
            args: Prisma.Coat_Of_ArmFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Coat_Of_ArmPayload>[]
          }
          create: {
            args: Prisma.Coat_Of_ArmCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Coat_Of_ArmPayload>
          }
          createMany: {
            args: Prisma.Coat_Of_ArmCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.Coat_Of_ArmDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Coat_Of_ArmPayload>
          }
          update: {
            args: Prisma.Coat_Of_ArmUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Coat_Of_ArmPayload>
          }
          deleteMany: {
            args: Prisma.Coat_Of_ArmDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Coat_Of_ArmUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Coat_Of_ArmUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Coat_Of_ArmPayload>
          }
          aggregate: {
            args: Prisma.Coat_Of_ArmAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCoat_Of_Arm>
          }
          groupBy: {
            args: Prisma.Coat_Of_ArmGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Coat_Of_ArmGroupByOutputType>[]
          }
          count: {
            args: Prisma.Coat_Of_ArmCountArgs<ExtArgs>,
            result: $Utils.Optional<Coat_Of_ArmCountAggregateOutputType> | number
          }
        }
      }
      Country: {
        payload: Prisma.$CountryPayload<ExtArgs>
        fields: Prisma.CountryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findFirst: {
            args: Prisma.CountryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findMany: {
            args: Prisma.CountryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          create: {
            args: Prisma.CountryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          createMany: {
            args: Prisma.CountryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CountryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          update: {
            args: Prisma.CountryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          deleteMany: {
            args: Prisma.CountryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CountryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CountryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          aggregate: {
            args: Prisma.CountryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCountry>
          }
          groupBy: {
            args: Prisma.CountryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CountryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountryCountArgs<ExtArgs>,
            result: $Utils.Optional<CountryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RegionCountOutputType
   */

  export type RegionCountOutputType = {
    sub_region: number
    country: number
  }

  export type RegionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sub_region?: boolean | RegionCountOutputTypeCountSub_regionArgs
    country?: boolean | RegionCountOutputTypeCountCountryArgs
  }

  // Custom InputTypes

  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionCountOutputType
     */
    select?: RegionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeCountSub_regionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Sub_RegionWhereInput
  }


  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeCountCountryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
  }



  /**
   * Count Type Sub_RegionCountOutputType
   */

  export type Sub_RegionCountOutputType = {
    country: number
  }

  export type Sub_RegionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | Sub_RegionCountOutputTypeCountCountryArgs
  }

  // Custom InputTypes

  /**
   * Sub_RegionCountOutputType without action
   */
  export type Sub_RegionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub_RegionCountOutputType
     */
    select?: Sub_RegionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Sub_RegionCountOutputType without action
   */
  export type Sub_RegionCountOutputTypeCountCountryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
  }



  /**
   * Count Type Date_FormatCountOutputType
   */

  export type Date_FormatCountOutputType = {
    country: number
  }

  export type Date_FormatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | Date_FormatCountOutputTypeCountCountryArgs
  }

  // Custom InputTypes

  /**
   * Date_FormatCountOutputType without action
   */
  export type Date_FormatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Date_FormatCountOutputType
     */
    select?: Date_FormatCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Date_FormatCountOutputType without action
   */
  export type Date_FormatCountOutputTypeCountCountryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
  }



  /**
   * Count Type CurrencyCountOutputType
   */

  export type CurrencyCountOutputType = {
    country: number
  }

  export type CurrencyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CurrencyCountOutputTypeCountCountryArgs
  }

  // Custom InputTypes

  /**
   * CurrencyCountOutputType without action
   */
  export type CurrencyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyCountOutputType
     */
    select?: CurrencyCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CurrencyCountOutputType without action
   */
  export type CurrencyCountOutputTypeCountCountryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
  }



  /**
   * Count Type FlagCountOutputType
   */

  export type FlagCountOutputType = {
    country: number
  }

  export type FlagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | FlagCountOutputTypeCountCountryArgs
  }

  // Custom InputTypes

  /**
   * FlagCountOutputType without action
   */
  export type FlagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlagCountOutputType
     */
    select?: FlagCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * FlagCountOutputType without action
   */
  export type FlagCountOutputTypeCountCountryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
  }



  /**
   * Count Type Coat_Of_ArmCountOutputType
   */

  export type Coat_Of_ArmCountOutputType = {
    country: number
  }

  export type Coat_Of_ArmCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | Coat_Of_ArmCountOutputTypeCountCountryArgs
  }

  // Custom InputTypes

  /**
   * Coat_Of_ArmCountOutputType without action
   */
  export type Coat_Of_ArmCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coat_Of_ArmCountOutputType
     */
    select?: Coat_Of_ArmCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Coat_Of_ArmCountOutputType without action
   */
  export type Coat_Of_ArmCountOutputTypeCountCountryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id_user: number | null
  }

  export type UserSumAggregateOutputType = {
    id_user: number | null
  }

  export type UserMinAggregateOutputType = {
    id_user: number | null
    name: string | null
    email: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id_user: number | null
    name: string | null
    email: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id_user: number
    name: number
    email: number
    password: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id_user?: true
  }

  export type UserSumAggregateInputType = {
    id_user?: true
  }

  export type UserMinAggregateInputType = {
    id_user?: true
    name?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id_user?: true
    name?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id_user?: true
    name?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id_user: number
    name: string
    email: string
    password: string | null
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id_user?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_user: number
      name: string
      email: string
      password: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id_user`
     * const userWithId_userOnly = await prisma.user.findMany({ select: { id_user: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id_user: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }



  /**
   * Model Region
   */

  export type AggregateRegion = {
    _count: RegionCountAggregateOutputType | null
    _avg: RegionAvgAggregateOutputType | null
    _sum: RegionSumAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  export type RegionAvgAggregateOutputType = {
    id_region: number | null
  }

  export type RegionSumAggregateOutputType = {
    id_region: number | null
  }

  export type RegionMinAggregateOutputType = {
    id_region: number | null
    name: string | null
  }

  export type RegionMaxAggregateOutputType = {
    id_region: number | null
    name: string | null
  }

  export type RegionCountAggregateOutputType = {
    id_region: number
    name: number
    _all: number
  }


  export type RegionAvgAggregateInputType = {
    id_region?: true
  }

  export type RegionSumAggregateInputType = {
    id_region?: true
  }

  export type RegionMinAggregateInputType = {
    id_region?: true
    name?: true
  }

  export type RegionMaxAggregateInputType = {
    id_region?: true
    name?: true
  }

  export type RegionCountAggregateInputType = {
    id_region?: true
    name?: true
    _all?: true
  }

  export type RegionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Region to aggregate.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Regions
    **/
    _count?: true | RegionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegionMaxAggregateInputType
  }

  export type GetRegionAggregateType<T extends RegionAggregateArgs> = {
        [P in keyof T & keyof AggregateRegion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegion[P]>
      : GetScalarType<T[P], AggregateRegion[P]>
  }




  export type RegionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegionWhereInput
    orderBy?: RegionOrderByWithAggregationInput | RegionOrderByWithAggregationInput[]
    by: RegionScalarFieldEnum[] | RegionScalarFieldEnum
    having?: RegionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegionCountAggregateInputType | true
    _avg?: RegionAvgAggregateInputType
    _sum?: RegionSumAggregateInputType
    _min?: RegionMinAggregateInputType
    _max?: RegionMaxAggregateInputType
  }

  export type RegionGroupByOutputType = {
    id_region: number
    name: string
    _count: RegionCountAggregateOutputType | null
    _avg: RegionAvgAggregateOutputType | null
    _sum: RegionSumAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  type GetRegionGroupByPayload<T extends RegionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegionGroupByOutputType[P]>
            : GetScalarType<T[P], RegionGroupByOutputType[P]>
        }
      >
    >


  export type RegionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_region?: boolean
    name?: boolean
    sub_region?: boolean | Region$sub_regionArgs<ExtArgs>
    country?: boolean | Region$countryArgs<ExtArgs>
    _count?: boolean | RegionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["region"]>

  export type RegionSelectScalar = {
    id_region?: boolean
    name?: boolean
  }

  export type RegionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sub_region?: boolean | Region$sub_regionArgs<ExtArgs>
    country?: boolean | Region$countryArgs<ExtArgs>
    _count?: boolean | RegionCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $RegionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Region"
    objects: {
      sub_region: Prisma.$Sub_RegionPayload<ExtArgs>[]
      country: Prisma.$CountryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_region: number
      name: string
    }, ExtArgs["result"]["region"]>
    composites: {}
  }


  type RegionGetPayload<S extends boolean | null | undefined | RegionDefaultArgs> = $Result.GetResult<Prisma.$RegionPayload, S>

  type RegionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RegionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RegionCountAggregateInputType | true
    }

  export interface RegionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Region'], meta: { name: 'Region' } }
    /**
     * Find zero or one Region that matches the filter.
     * @param {RegionFindUniqueArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RegionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RegionFindUniqueArgs<ExtArgs>>
    ): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Region that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RegionFindUniqueOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RegionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RegionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Region that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RegionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RegionFindFirstArgs<ExtArgs>>
    ): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Region that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RegionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RegionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regions
     * const regions = await prisma.region.findMany()
     * 
     * // Get first 10 Regions
     * const regions = await prisma.region.findMany({ take: 10 })
     * 
     * // Only select the `id_region`
     * const regionWithId_regionOnly = await prisma.region.findMany({ select: { id_region: true } })
     * 
    **/
    findMany<T extends RegionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RegionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Region.
     * @param {RegionCreateArgs} args - Arguments to create a Region.
     * @example
     * // Create one Region
     * const Region = await prisma.region.create({
     *   data: {
     *     // ... data to create a Region
     *   }
     * })
     * 
    **/
    create<T extends RegionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RegionCreateArgs<ExtArgs>>
    ): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Regions.
     *     @param {RegionCreateManyArgs} args - Arguments to create many Regions.
     *     @example
     *     // Create many Regions
     *     const region = await prisma.region.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RegionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RegionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Region.
     * @param {RegionDeleteArgs} args - Arguments to delete one Region.
     * @example
     * // Delete one Region
     * const Region = await prisma.region.delete({
     *   where: {
     *     // ... filter to delete one Region
     *   }
     * })
     * 
    **/
    delete<T extends RegionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RegionDeleteArgs<ExtArgs>>
    ): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Region.
     * @param {RegionUpdateArgs} args - Arguments to update one Region.
     * @example
     * // Update one Region
     * const region = await prisma.region.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RegionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RegionUpdateArgs<ExtArgs>>
    ): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Regions.
     * @param {RegionDeleteManyArgs} args - Arguments to filter Regions to delete.
     * @example
     * // Delete a few Regions
     * const { count } = await prisma.region.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RegionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RegionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regions
     * const region = await prisma.region.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RegionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RegionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Region.
     * @param {RegionUpsertArgs} args - Arguments to update or create a Region.
     * @example
     * // Update or create a Region
     * const region = await prisma.region.upsert({
     *   create: {
     *     // ... data to create a Region
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Region we want to update
     *   }
     * })
    **/
    upsert<T extends RegionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RegionUpsertArgs<ExtArgs>>
    ): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionCountArgs} args - Arguments to filter Regions to count.
     * @example
     * // Count the number of Regions
     * const count = await prisma.region.count({
     *   where: {
     *     // ... the filter for the Regions we want to count
     *   }
     * })
    **/
    count<T extends RegionCountArgs>(
      args?: Subset<T, RegionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegionAggregateArgs>(args: Subset<T, RegionAggregateArgs>): Prisma.PrismaPromise<GetRegionAggregateType<T>>

    /**
     * Group by Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RegionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegionGroupByArgs['orderBy'] }
        : { orderBy?: RegionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Region model
   */
  readonly fields: RegionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Region.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    sub_region<T extends Region$sub_regionArgs<ExtArgs> = {}>(args?: Subset<T, Region$sub_regionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Sub_RegionPayload<ExtArgs>, T, 'findMany'> | Null>;

    country<T extends Region$countryArgs<ExtArgs> = {}>(args?: Subset<T, Region$countryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Region model
   */ 
  interface RegionFieldRefs {
    readonly id_region: FieldRef<"Region", 'Int'>
    readonly name: FieldRef<"Region", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Region findUnique
   */
  export type RegionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
  }


  /**
   * Region findUniqueOrThrow
   */
  export type RegionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
  }


  /**
   * Region findFirst
   */
  export type RegionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }


  /**
   * Region findFirstOrThrow
   */
  export type RegionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }


  /**
   * Region findMany
   */
  export type RegionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Regions to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }


  /**
   * Region create
   */
  export type RegionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The data needed to create a Region.
     */
    data: XOR<RegionCreateInput, RegionUncheckedCreateInput>
  }


  /**
   * Region createMany
   */
  export type RegionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Regions.
     */
    data: RegionCreateManyInput | RegionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Region update
   */
  export type RegionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The data needed to update a Region.
     */
    data: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
    /**
     * Choose, which Region to update.
     */
    where: RegionWhereUniqueInput
  }


  /**
   * Region updateMany
   */
  export type RegionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Regions.
     */
    data: XOR<RegionUpdateManyMutationInput, RegionUncheckedUpdateManyInput>
    /**
     * Filter which Regions to update
     */
    where?: RegionWhereInput
  }


  /**
   * Region upsert
   */
  export type RegionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The filter to search for the Region to update in case it exists.
     */
    where: RegionWhereUniqueInput
    /**
     * In case the Region found by the `where` argument doesn't exist, create a new Region with this data.
     */
    create: XOR<RegionCreateInput, RegionUncheckedCreateInput>
    /**
     * In case the Region was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
  }


  /**
   * Region delete
   */
  export type RegionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter which Region to delete.
     */
    where: RegionWhereUniqueInput
  }


  /**
   * Region deleteMany
   */
  export type RegionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regions to delete
     */
    where?: RegionWhereInput
  }


  /**
   * Region.sub_region
   */
  export type Region$sub_regionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub_Region
     */
    select?: Sub_RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Sub_RegionInclude<ExtArgs> | null
    where?: Sub_RegionWhereInput
    orderBy?: Sub_RegionOrderByWithRelationInput | Sub_RegionOrderByWithRelationInput[]
    cursor?: Sub_RegionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sub_RegionScalarFieldEnum | Sub_RegionScalarFieldEnum[]
  }


  /**
   * Region.country
   */
  export type Region$countryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    cursor?: CountryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }


  /**
   * Region without action
   */
  export type RegionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RegionInclude<ExtArgs> | null
  }



  /**
   * Model Sub_Region
   */

  export type AggregateSub_Region = {
    _count: Sub_RegionCountAggregateOutputType | null
    _avg: Sub_RegionAvgAggregateOutputType | null
    _sum: Sub_RegionSumAggregateOutputType | null
    _min: Sub_RegionMinAggregateOutputType | null
    _max: Sub_RegionMaxAggregateOutputType | null
  }

  export type Sub_RegionAvgAggregateOutputType = {
    id_sub_region: number | null
    id_region: number | null
  }

  export type Sub_RegionSumAggregateOutputType = {
    id_sub_region: number | null
    id_region: number | null
  }

  export type Sub_RegionMinAggregateOutputType = {
    id_sub_region: number | null
    name: string | null
    id_region: number | null
  }

  export type Sub_RegionMaxAggregateOutputType = {
    id_sub_region: number | null
    name: string | null
    id_region: number | null
  }

  export type Sub_RegionCountAggregateOutputType = {
    id_sub_region: number
    name: number
    id_region: number
    _all: number
  }


  export type Sub_RegionAvgAggregateInputType = {
    id_sub_region?: true
    id_region?: true
  }

  export type Sub_RegionSumAggregateInputType = {
    id_sub_region?: true
    id_region?: true
  }

  export type Sub_RegionMinAggregateInputType = {
    id_sub_region?: true
    name?: true
    id_region?: true
  }

  export type Sub_RegionMaxAggregateInputType = {
    id_sub_region?: true
    name?: true
    id_region?: true
  }

  export type Sub_RegionCountAggregateInputType = {
    id_sub_region?: true
    name?: true
    id_region?: true
    _all?: true
  }

  export type Sub_RegionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sub_Region to aggregate.
     */
    where?: Sub_RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sub_Regions to fetch.
     */
    orderBy?: Sub_RegionOrderByWithRelationInput | Sub_RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Sub_RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sub_Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sub_Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sub_Regions
    **/
    _count?: true | Sub_RegionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sub_RegionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sub_RegionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sub_RegionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sub_RegionMaxAggregateInputType
  }

  export type GetSub_RegionAggregateType<T extends Sub_RegionAggregateArgs> = {
        [P in keyof T & keyof AggregateSub_Region]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSub_Region[P]>
      : GetScalarType<T[P], AggregateSub_Region[P]>
  }




  export type Sub_RegionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Sub_RegionWhereInput
    orderBy?: Sub_RegionOrderByWithAggregationInput | Sub_RegionOrderByWithAggregationInput[]
    by: Sub_RegionScalarFieldEnum[] | Sub_RegionScalarFieldEnum
    having?: Sub_RegionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sub_RegionCountAggregateInputType | true
    _avg?: Sub_RegionAvgAggregateInputType
    _sum?: Sub_RegionSumAggregateInputType
    _min?: Sub_RegionMinAggregateInputType
    _max?: Sub_RegionMaxAggregateInputType
  }

  export type Sub_RegionGroupByOutputType = {
    id_sub_region: number
    name: string
    id_region: number
    _count: Sub_RegionCountAggregateOutputType | null
    _avg: Sub_RegionAvgAggregateOutputType | null
    _sum: Sub_RegionSumAggregateOutputType | null
    _min: Sub_RegionMinAggregateOutputType | null
    _max: Sub_RegionMaxAggregateOutputType | null
  }

  type GetSub_RegionGroupByPayload<T extends Sub_RegionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sub_RegionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sub_RegionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sub_RegionGroupByOutputType[P]>
            : GetScalarType<T[P], Sub_RegionGroupByOutputType[P]>
        }
      >
    >


  export type Sub_RegionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_sub_region?: boolean
    name?: boolean
    id_region?: boolean
    region?: boolean | RegionDefaultArgs<ExtArgs>
    country?: boolean | Sub_Region$countryArgs<ExtArgs>
    _count?: boolean | Sub_RegionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sub_Region"]>

  export type Sub_RegionSelectScalar = {
    id_sub_region?: boolean
    name?: boolean
    id_region?: boolean
  }

  export type Sub_RegionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region?: boolean | RegionDefaultArgs<ExtArgs>
    country?: boolean | Sub_Region$countryArgs<ExtArgs>
    _count?: boolean | Sub_RegionCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $Sub_RegionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sub_Region"
    objects: {
      region: Prisma.$RegionPayload<ExtArgs>
      country: Prisma.$CountryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_sub_region: number
      name: string
      id_region: number
    }, ExtArgs["result"]["sub_Region"]>
    composites: {}
  }


  type Sub_RegionGetPayload<S extends boolean | null | undefined | Sub_RegionDefaultArgs> = $Result.GetResult<Prisma.$Sub_RegionPayload, S>

  type Sub_RegionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Sub_RegionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Sub_RegionCountAggregateInputType | true
    }

  export interface Sub_RegionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sub_Region'], meta: { name: 'Sub_Region' } }
    /**
     * Find zero or one Sub_Region that matches the filter.
     * @param {Sub_RegionFindUniqueArgs} args - Arguments to find a Sub_Region
     * @example
     * // Get one Sub_Region
     * const sub_Region = await prisma.sub_Region.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Sub_RegionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Sub_RegionFindUniqueArgs<ExtArgs>>
    ): Prisma__Sub_RegionClient<$Result.GetResult<Prisma.$Sub_RegionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Sub_Region that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Sub_RegionFindUniqueOrThrowArgs} args - Arguments to find a Sub_Region
     * @example
     * // Get one Sub_Region
     * const sub_Region = await prisma.sub_Region.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Sub_RegionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Sub_RegionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Sub_RegionClient<$Result.GetResult<Prisma.$Sub_RegionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Sub_Region that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sub_RegionFindFirstArgs} args - Arguments to find a Sub_Region
     * @example
     * // Get one Sub_Region
     * const sub_Region = await prisma.sub_Region.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Sub_RegionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Sub_RegionFindFirstArgs<ExtArgs>>
    ): Prisma__Sub_RegionClient<$Result.GetResult<Prisma.$Sub_RegionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Sub_Region that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sub_RegionFindFirstOrThrowArgs} args - Arguments to find a Sub_Region
     * @example
     * // Get one Sub_Region
     * const sub_Region = await prisma.sub_Region.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Sub_RegionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Sub_RegionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Sub_RegionClient<$Result.GetResult<Prisma.$Sub_RegionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sub_Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sub_RegionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sub_Regions
     * const sub_Regions = await prisma.sub_Region.findMany()
     * 
     * // Get first 10 Sub_Regions
     * const sub_Regions = await prisma.sub_Region.findMany({ take: 10 })
     * 
     * // Only select the `id_sub_region`
     * const sub_RegionWithId_sub_regionOnly = await prisma.sub_Region.findMany({ select: { id_sub_region: true } })
     * 
    **/
    findMany<T extends Sub_RegionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Sub_RegionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Sub_RegionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Sub_Region.
     * @param {Sub_RegionCreateArgs} args - Arguments to create a Sub_Region.
     * @example
     * // Create one Sub_Region
     * const Sub_Region = await prisma.sub_Region.create({
     *   data: {
     *     // ... data to create a Sub_Region
     *   }
     * })
     * 
    **/
    create<T extends Sub_RegionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Sub_RegionCreateArgs<ExtArgs>>
    ): Prisma__Sub_RegionClient<$Result.GetResult<Prisma.$Sub_RegionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sub_Regions.
     *     @param {Sub_RegionCreateManyArgs} args - Arguments to create many Sub_Regions.
     *     @example
     *     // Create many Sub_Regions
     *     const sub_Region = await prisma.sub_Region.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Sub_RegionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Sub_RegionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sub_Region.
     * @param {Sub_RegionDeleteArgs} args - Arguments to delete one Sub_Region.
     * @example
     * // Delete one Sub_Region
     * const Sub_Region = await prisma.sub_Region.delete({
     *   where: {
     *     // ... filter to delete one Sub_Region
     *   }
     * })
     * 
    **/
    delete<T extends Sub_RegionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Sub_RegionDeleteArgs<ExtArgs>>
    ): Prisma__Sub_RegionClient<$Result.GetResult<Prisma.$Sub_RegionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Sub_Region.
     * @param {Sub_RegionUpdateArgs} args - Arguments to update one Sub_Region.
     * @example
     * // Update one Sub_Region
     * const sub_Region = await prisma.sub_Region.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Sub_RegionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Sub_RegionUpdateArgs<ExtArgs>>
    ): Prisma__Sub_RegionClient<$Result.GetResult<Prisma.$Sub_RegionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sub_Regions.
     * @param {Sub_RegionDeleteManyArgs} args - Arguments to filter Sub_Regions to delete.
     * @example
     * // Delete a few Sub_Regions
     * const { count } = await prisma.sub_Region.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Sub_RegionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Sub_RegionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sub_Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sub_RegionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sub_Regions
     * const sub_Region = await prisma.sub_Region.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Sub_RegionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Sub_RegionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sub_Region.
     * @param {Sub_RegionUpsertArgs} args - Arguments to update or create a Sub_Region.
     * @example
     * // Update or create a Sub_Region
     * const sub_Region = await prisma.sub_Region.upsert({
     *   create: {
     *     // ... data to create a Sub_Region
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sub_Region we want to update
     *   }
     * })
    **/
    upsert<T extends Sub_RegionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Sub_RegionUpsertArgs<ExtArgs>>
    ): Prisma__Sub_RegionClient<$Result.GetResult<Prisma.$Sub_RegionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sub_Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sub_RegionCountArgs} args - Arguments to filter Sub_Regions to count.
     * @example
     * // Count the number of Sub_Regions
     * const count = await prisma.sub_Region.count({
     *   where: {
     *     // ... the filter for the Sub_Regions we want to count
     *   }
     * })
    **/
    count<T extends Sub_RegionCountArgs>(
      args?: Subset<T, Sub_RegionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sub_RegionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sub_Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sub_RegionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sub_RegionAggregateArgs>(args: Subset<T, Sub_RegionAggregateArgs>): Prisma.PrismaPromise<GetSub_RegionAggregateType<T>>

    /**
     * Group by Sub_Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sub_RegionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Sub_RegionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Sub_RegionGroupByArgs['orderBy'] }
        : { orderBy?: Sub_RegionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Sub_RegionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSub_RegionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sub_Region model
   */
  readonly fields: Sub_RegionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sub_Region.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Sub_RegionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    region<T extends RegionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RegionDefaultArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    country<T extends Sub_Region$countryArgs<ExtArgs> = {}>(args?: Subset<T, Sub_Region$countryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Sub_Region model
   */ 
  interface Sub_RegionFieldRefs {
    readonly id_sub_region: FieldRef<"Sub_Region", 'Int'>
    readonly name: FieldRef<"Sub_Region", 'String'>
    readonly id_region: FieldRef<"Sub_Region", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Sub_Region findUnique
   */
  export type Sub_RegionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub_Region
     */
    select?: Sub_RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Sub_RegionInclude<ExtArgs> | null
    /**
     * Filter, which Sub_Region to fetch.
     */
    where: Sub_RegionWhereUniqueInput
  }


  /**
   * Sub_Region findUniqueOrThrow
   */
  export type Sub_RegionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub_Region
     */
    select?: Sub_RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Sub_RegionInclude<ExtArgs> | null
    /**
     * Filter, which Sub_Region to fetch.
     */
    where: Sub_RegionWhereUniqueInput
  }


  /**
   * Sub_Region findFirst
   */
  export type Sub_RegionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub_Region
     */
    select?: Sub_RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Sub_RegionInclude<ExtArgs> | null
    /**
     * Filter, which Sub_Region to fetch.
     */
    where?: Sub_RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sub_Regions to fetch.
     */
    orderBy?: Sub_RegionOrderByWithRelationInput | Sub_RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sub_Regions.
     */
    cursor?: Sub_RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sub_Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sub_Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sub_Regions.
     */
    distinct?: Sub_RegionScalarFieldEnum | Sub_RegionScalarFieldEnum[]
  }


  /**
   * Sub_Region findFirstOrThrow
   */
  export type Sub_RegionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub_Region
     */
    select?: Sub_RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Sub_RegionInclude<ExtArgs> | null
    /**
     * Filter, which Sub_Region to fetch.
     */
    where?: Sub_RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sub_Regions to fetch.
     */
    orderBy?: Sub_RegionOrderByWithRelationInput | Sub_RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sub_Regions.
     */
    cursor?: Sub_RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sub_Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sub_Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sub_Regions.
     */
    distinct?: Sub_RegionScalarFieldEnum | Sub_RegionScalarFieldEnum[]
  }


  /**
   * Sub_Region findMany
   */
  export type Sub_RegionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub_Region
     */
    select?: Sub_RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Sub_RegionInclude<ExtArgs> | null
    /**
     * Filter, which Sub_Regions to fetch.
     */
    where?: Sub_RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sub_Regions to fetch.
     */
    orderBy?: Sub_RegionOrderByWithRelationInput | Sub_RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sub_Regions.
     */
    cursor?: Sub_RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sub_Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sub_Regions.
     */
    skip?: number
    distinct?: Sub_RegionScalarFieldEnum | Sub_RegionScalarFieldEnum[]
  }


  /**
   * Sub_Region create
   */
  export type Sub_RegionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub_Region
     */
    select?: Sub_RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Sub_RegionInclude<ExtArgs> | null
    /**
     * The data needed to create a Sub_Region.
     */
    data: XOR<Sub_RegionCreateInput, Sub_RegionUncheckedCreateInput>
  }


  /**
   * Sub_Region createMany
   */
  export type Sub_RegionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sub_Regions.
     */
    data: Sub_RegionCreateManyInput | Sub_RegionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Sub_Region update
   */
  export type Sub_RegionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub_Region
     */
    select?: Sub_RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Sub_RegionInclude<ExtArgs> | null
    /**
     * The data needed to update a Sub_Region.
     */
    data: XOR<Sub_RegionUpdateInput, Sub_RegionUncheckedUpdateInput>
    /**
     * Choose, which Sub_Region to update.
     */
    where: Sub_RegionWhereUniqueInput
  }


  /**
   * Sub_Region updateMany
   */
  export type Sub_RegionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sub_Regions.
     */
    data: XOR<Sub_RegionUpdateManyMutationInput, Sub_RegionUncheckedUpdateManyInput>
    /**
     * Filter which Sub_Regions to update
     */
    where?: Sub_RegionWhereInput
  }


  /**
   * Sub_Region upsert
   */
  export type Sub_RegionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub_Region
     */
    select?: Sub_RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Sub_RegionInclude<ExtArgs> | null
    /**
     * The filter to search for the Sub_Region to update in case it exists.
     */
    where: Sub_RegionWhereUniqueInput
    /**
     * In case the Sub_Region found by the `where` argument doesn't exist, create a new Sub_Region with this data.
     */
    create: XOR<Sub_RegionCreateInput, Sub_RegionUncheckedCreateInput>
    /**
     * In case the Sub_Region was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Sub_RegionUpdateInput, Sub_RegionUncheckedUpdateInput>
  }


  /**
   * Sub_Region delete
   */
  export type Sub_RegionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub_Region
     */
    select?: Sub_RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Sub_RegionInclude<ExtArgs> | null
    /**
     * Filter which Sub_Region to delete.
     */
    where: Sub_RegionWhereUniqueInput
  }


  /**
   * Sub_Region deleteMany
   */
  export type Sub_RegionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sub_Regions to delete
     */
    where?: Sub_RegionWhereInput
  }


  /**
   * Sub_Region.country
   */
  export type Sub_Region$countryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    cursor?: CountryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }


  /**
   * Sub_Region without action
   */
  export type Sub_RegionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub_Region
     */
    select?: Sub_RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Sub_RegionInclude<ExtArgs> | null
  }



  /**
   * Model Date_Format
   */

  export type AggregateDate_Format = {
    _count: Date_FormatCountAggregateOutputType | null
    _avg: Date_FormatAvgAggregateOutputType | null
    _sum: Date_FormatSumAggregateOutputType | null
    _min: Date_FormatMinAggregateOutputType | null
    _max: Date_FormatMaxAggregateOutputType | null
  }

  export type Date_FormatAvgAggregateOutputType = {
    id_date_format: number | null
  }

  export type Date_FormatSumAggregateOutputType = {
    id_date_format: number | null
  }

  export type Date_FormatMinAggregateOutputType = {
    id_date_format: number | null
    format: string | null
  }

  export type Date_FormatMaxAggregateOutputType = {
    id_date_format: number | null
    format: string | null
  }

  export type Date_FormatCountAggregateOutputType = {
    id_date_format: number
    format: number
    _all: number
  }


  export type Date_FormatAvgAggregateInputType = {
    id_date_format?: true
  }

  export type Date_FormatSumAggregateInputType = {
    id_date_format?: true
  }

  export type Date_FormatMinAggregateInputType = {
    id_date_format?: true
    format?: true
  }

  export type Date_FormatMaxAggregateInputType = {
    id_date_format?: true
    format?: true
  }

  export type Date_FormatCountAggregateInputType = {
    id_date_format?: true
    format?: true
    _all?: true
  }

  export type Date_FormatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Date_Format to aggregate.
     */
    where?: Date_FormatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Date_Formats to fetch.
     */
    orderBy?: Date_FormatOrderByWithRelationInput | Date_FormatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Date_FormatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Date_Formats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Date_Formats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Date_Formats
    **/
    _count?: true | Date_FormatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Date_FormatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Date_FormatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Date_FormatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Date_FormatMaxAggregateInputType
  }

  export type GetDate_FormatAggregateType<T extends Date_FormatAggregateArgs> = {
        [P in keyof T & keyof AggregateDate_Format]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDate_Format[P]>
      : GetScalarType<T[P], AggregateDate_Format[P]>
  }




  export type Date_FormatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Date_FormatWhereInput
    orderBy?: Date_FormatOrderByWithAggregationInput | Date_FormatOrderByWithAggregationInput[]
    by: Date_FormatScalarFieldEnum[] | Date_FormatScalarFieldEnum
    having?: Date_FormatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Date_FormatCountAggregateInputType | true
    _avg?: Date_FormatAvgAggregateInputType
    _sum?: Date_FormatSumAggregateInputType
    _min?: Date_FormatMinAggregateInputType
    _max?: Date_FormatMaxAggregateInputType
  }

  export type Date_FormatGroupByOutputType = {
    id_date_format: number
    format: string
    _count: Date_FormatCountAggregateOutputType | null
    _avg: Date_FormatAvgAggregateOutputType | null
    _sum: Date_FormatSumAggregateOutputType | null
    _min: Date_FormatMinAggregateOutputType | null
    _max: Date_FormatMaxAggregateOutputType | null
  }

  type GetDate_FormatGroupByPayload<T extends Date_FormatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Date_FormatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Date_FormatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Date_FormatGroupByOutputType[P]>
            : GetScalarType<T[P], Date_FormatGroupByOutputType[P]>
        }
      >
    >


  export type Date_FormatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_date_format?: boolean
    format?: boolean
    country?: boolean | Date_Format$countryArgs<ExtArgs>
    _count?: boolean | Date_FormatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["date_Format"]>

  export type Date_FormatSelectScalar = {
    id_date_format?: boolean
    format?: boolean
  }

  export type Date_FormatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | Date_Format$countryArgs<ExtArgs>
    _count?: boolean | Date_FormatCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $Date_FormatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Date_Format"
    objects: {
      country: Prisma.$CountryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_date_format: number
      format: string
    }, ExtArgs["result"]["date_Format"]>
    composites: {}
  }


  type Date_FormatGetPayload<S extends boolean | null | undefined | Date_FormatDefaultArgs> = $Result.GetResult<Prisma.$Date_FormatPayload, S>

  type Date_FormatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Date_FormatFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Date_FormatCountAggregateInputType | true
    }

  export interface Date_FormatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Date_Format'], meta: { name: 'Date_Format' } }
    /**
     * Find zero or one Date_Format that matches the filter.
     * @param {Date_FormatFindUniqueArgs} args - Arguments to find a Date_Format
     * @example
     * // Get one Date_Format
     * const date_Format = await prisma.date_Format.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Date_FormatFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Date_FormatFindUniqueArgs<ExtArgs>>
    ): Prisma__Date_FormatClient<$Result.GetResult<Prisma.$Date_FormatPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Date_Format that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Date_FormatFindUniqueOrThrowArgs} args - Arguments to find a Date_Format
     * @example
     * // Get one Date_Format
     * const date_Format = await prisma.date_Format.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Date_FormatFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Date_FormatFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Date_FormatClient<$Result.GetResult<Prisma.$Date_FormatPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Date_Format that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Date_FormatFindFirstArgs} args - Arguments to find a Date_Format
     * @example
     * // Get one Date_Format
     * const date_Format = await prisma.date_Format.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Date_FormatFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Date_FormatFindFirstArgs<ExtArgs>>
    ): Prisma__Date_FormatClient<$Result.GetResult<Prisma.$Date_FormatPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Date_Format that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Date_FormatFindFirstOrThrowArgs} args - Arguments to find a Date_Format
     * @example
     * // Get one Date_Format
     * const date_Format = await prisma.date_Format.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Date_FormatFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Date_FormatFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Date_FormatClient<$Result.GetResult<Prisma.$Date_FormatPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Date_Formats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Date_FormatFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Date_Formats
     * const date_Formats = await prisma.date_Format.findMany()
     * 
     * // Get first 10 Date_Formats
     * const date_Formats = await prisma.date_Format.findMany({ take: 10 })
     * 
     * // Only select the `id_date_format`
     * const date_FormatWithId_date_formatOnly = await prisma.date_Format.findMany({ select: { id_date_format: true } })
     * 
    **/
    findMany<T extends Date_FormatFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Date_FormatFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Date_FormatPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Date_Format.
     * @param {Date_FormatCreateArgs} args - Arguments to create a Date_Format.
     * @example
     * // Create one Date_Format
     * const Date_Format = await prisma.date_Format.create({
     *   data: {
     *     // ... data to create a Date_Format
     *   }
     * })
     * 
    **/
    create<T extends Date_FormatCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Date_FormatCreateArgs<ExtArgs>>
    ): Prisma__Date_FormatClient<$Result.GetResult<Prisma.$Date_FormatPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Date_Formats.
     *     @param {Date_FormatCreateManyArgs} args - Arguments to create many Date_Formats.
     *     @example
     *     // Create many Date_Formats
     *     const date_Format = await prisma.date_Format.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Date_FormatCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Date_FormatCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Date_Format.
     * @param {Date_FormatDeleteArgs} args - Arguments to delete one Date_Format.
     * @example
     * // Delete one Date_Format
     * const Date_Format = await prisma.date_Format.delete({
     *   where: {
     *     // ... filter to delete one Date_Format
     *   }
     * })
     * 
    **/
    delete<T extends Date_FormatDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Date_FormatDeleteArgs<ExtArgs>>
    ): Prisma__Date_FormatClient<$Result.GetResult<Prisma.$Date_FormatPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Date_Format.
     * @param {Date_FormatUpdateArgs} args - Arguments to update one Date_Format.
     * @example
     * // Update one Date_Format
     * const date_Format = await prisma.date_Format.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Date_FormatUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Date_FormatUpdateArgs<ExtArgs>>
    ): Prisma__Date_FormatClient<$Result.GetResult<Prisma.$Date_FormatPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Date_Formats.
     * @param {Date_FormatDeleteManyArgs} args - Arguments to filter Date_Formats to delete.
     * @example
     * // Delete a few Date_Formats
     * const { count } = await prisma.date_Format.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Date_FormatDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Date_FormatDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Date_Formats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Date_FormatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Date_Formats
     * const date_Format = await prisma.date_Format.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Date_FormatUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Date_FormatUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Date_Format.
     * @param {Date_FormatUpsertArgs} args - Arguments to update or create a Date_Format.
     * @example
     * // Update or create a Date_Format
     * const date_Format = await prisma.date_Format.upsert({
     *   create: {
     *     // ... data to create a Date_Format
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Date_Format we want to update
     *   }
     * })
    **/
    upsert<T extends Date_FormatUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Date_FormatUpsertArgs<ExtArgs>>
    ): Prisma__Date_FormatClient<$Result.GetResult<Prisma.$Date_FormatPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Date_Formats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Date_FormatCountArgs} args - Arguments to filter Date_Formats to count.
     * @example
     * // Count the number of Date_Formats
     * const count = await prisma.date_Format.count({
     *   where: {
     *     // ... the filter for the Date_Formats we want to count
     *   }
     * })
    **/
    count<T extends Date_FormatCountArgs>(
      args?: Subset<T, Date_FormatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Date_FormatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Date_Format.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Date_FormatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Date_FormatAggregateArgs>(args: Subset<T, Date_FormatAggregateArgs>): Prisma.PrismaPromise<GetDate_FormatAggregateType<T>>

    /**
     * Group by Date_Format.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Date_FormatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Date_FormatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Date_FormatGroupByArgs['orderBy'] }
        : { orderBy?: Date_FormatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Date_FormatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDate_FormatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Date_Format model
   */
  readonly fields: Date_FormatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Date_Format.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Date_FormatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    country<T extends Date_Format$countryArgs<ExtArgs> = {}>(args?: Subset<T, Date_Format$countryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Date_Format model
   */ 
  interface Date_FormatFieldRefs {
    readonly id_date_format: FieldRef<"Date_Format", 'Int'>
    readonly format: FieldRef<"Date_Format", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Date_Format findUnique
   */
  export type Date_FormatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Date_Format
     */
    select?: Date_FormatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Date_FormatInclude<ExtArgs> | null
    /**
     * Filter, which Date_Format to fetch.
     */
    where: Date_FormatWhereUniqueInput
  }


  /**
   * Date_Format findUniqueOrThrow
   */
  export type Date_FormatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Date_Format
     */
    select?: Date_FormatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Date_FormatInclude<ExtArgs> | null
    /**
     * Filter, which Date_Format to fetch.
     */
    where: Date_FormatWhereUniqueInput
  }


  /**
   * Date_Format findFirst
   */
  export type Date_FormatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Date_Format
     */
    select?: Date_FormatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Date_FormatInclude<ExtArgs> | null
    /**
     * Filter, which Date_Format to fetch.
     */
    where?: Date_FormatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Date_Formats to fetch.
     */
    orderBy?: Date_FormatOrderByWithRelationInput | Date_FormatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Date_Formats.
     */
    cursor?: Date_FormatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Date_Formats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Date_Formats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Date_Formats.
     */
    distinct?: Date_FormatScalarFieldEnum | Date_FormatScalarFieldEnum[]
  }


  /**
   * Date_Format findFirstOrThrow
   */
  export type Date_FormatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Date_Format
     */
    select?: Date_FormatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Date_FormatInclude<ExtArgs> | null
    /**
     * Filter, which Date_Format to fetch.
     */
    where?: Date_FormatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Date_Formats to fetch.
     */
    orderBy?: Date_FormatOrderByWithRelationInput | Date_FormatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Date_Formats.
     */
    cursor?: Date_FormatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Date_Formats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Date_Formats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Date_Formats.
     */
    distinct?: Date_FormatScalarFieldEnum | Date_FormatScalarFieldEnum[]
  }


  /**
   * Date_Format findMany
   */
  export type Date_FormatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Date_Format
     */
    select?: Date_FormatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Date_FormatInclude<ExtArgs> | null
    /**
     * Filter, which Date_Formats to fetch.
     */
    where?: Date_FormatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Date_Formats to fetch.
     */
    orderBy?: Date_FormatOrderByWithRelationInput | Date_FormatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Date_Formats.
     */
    cursor?: Date_FormatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Date_Formats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Date_Formats.
     */
    skip?: number
    distinct?: Date_FormatScalarFieldEnum | Date_FormatScalarFieldEnum[]
  }


  /**
   * Date_Format create
   */
  export type Date_FormatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Date_Format
     */
    select?: Date_FormatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Date_FormatInclude<ExtArgs> | null
    /**
     * The data needed to create a Date_Format.
     */
    data: XOR<Date_FormatCreateInput, Date_FormatUncheckedCreateInput>
  }


  /**
   * Date_Format createMany
   */
  export type Date_FormatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Date_Formats.
     */
    data: Date_FormatCreateManyInput | Date_FormatCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Date_Format update
   */
  export type Date_FormatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Date_Format
     */
    select?: Date_FormatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Date_FormatInclude<ExtArgs> | null
    /**
     * The data needed to update a Date_Format.
     */
    data: XOR<Date_FormatUpdateInput, Date_FormatUncheckedUpdateInput>
    /**
     * Choose, which Date_Format to update.
     */
    where: Date_FormatWhereUniqueInput
  }


  /**
   * Date_Format updateMany
   */
  export type Date_FormatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Date_Formats.
     */
    data: XOR<Date_FormatUpdateManyMutationInput, Date_FormatUncheckedUpdateManyInput>
    /**
     * Filter which Date_Formats to update
     */
    where?: Date_FormatWhereInput
  }


  /**
   * Date_Format upsert
   */
  export type Date_FormatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Date_Format
     */
    select?: Date_FormatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Date_FormatInclude<ExtArgs> | null
    /**
     * The filter to search for the Date_Format to update in case it exists.
     */
    where: Date_FormatWhereUniqueInput
    /**
     * In case the Date_Format found by the `where` argument doesn't exist, create a new Date_Format with this data.
     */
    create: XOR<Date_FormatCreateInput, Date_FormatUncheckedCreateInput>
    /**
     * In case the Date_Format was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Date_FormatUpdateInput, Date_FormatUncheckedUpdateInput>
  }


  /**
   * Date_Format delete
   */
  export type Date_FormatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Date_Format
     */
    select?: Date_FormatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Date_FormatInclude<ExtArgs> | null
    /**
     * Filter which Date_Format to delete.
     */
    where: Date_FormatWhereUniqueInput
  }


  /**
   * Date_Format deleteMany
   */
  export type Date_FormatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Date_Formats to delete
     */
    where?: Date_FormatWhereInput
  }


  /**
   * Date_Format.country
   */
  export type Date_Format$countryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    cursor?: CountryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }


  /**
   * Date_Format without action
   */
  export type Date_FormatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Date_Format
     */
    select?: Date_FormatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Date_FormatInclude<ExtArgs> | null
  }



  /**
   * Model Currency
   */

  export type AggregateCurrency = {
    _count: CurrencyCountAggregateOutputType | null
    _avg: CurrencyAvgAggregateOutputType | null
    _sum: CurrencySumAggregateOutputType | null
    _min: CurrencyMinAggregateOutputType | null
    _max: CurrencyMaxAggregateOutputType | null
  }

  export type CurrencyAvgAggregateOutputType = {
    id_currency: number | null
  }

  export type CurrencySumAggregateOutputType = {
    id_currency: number | null
  }

  export type CurrencyMinAggregateOutputType = {
    id_currency: number | null
    abbr: string | null
    name: string | null
    symbol: string | null
  }

  export type CurrencyMaxAggregateOutputType = {
    id_currency: number | null
    abbr: string | null
    name: string | null
    symbol: string | null
  }

  export type CurrencyCountAggregateOutputType = {
    id_currency: number
    abbr: number
    name: number
    symbol: number
    _all: number
  }


  export type CurrencyAvgAggregateInputType = {
    id_currency?: true
  }

  export type CurrencySumAggregateInputType = {
    id_currency?: true
  }

  export type CurrencyMinAggregateInputType = {
    id_currency?: true
    abbr?: true
    name?: true
    symbol?: true
  }

  export type CurrencyMaxAggregateInputType = {
    id_currency?: true
    abbr?: true
    name?: true
    symbol?: true
  }

  export type CurrencyCountAggregateInputType = {
    id_currency?: true
    abbr?: true
    name?: true
    symbol?: true
    _all?: true
  }

  export type CurrencyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Currency to aggregate.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Currencies
    **/
    _count?: true | CurrencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CurrencyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CurrencySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurrencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurrencyMaxAggregateInputType
  }

  export type GetCurrencyAggregateType<T extends CurrencyAggregateArgs> = {
        [P in keyof T & keyof AggregateCurrency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurrency[P]>
      : GetScalarType<T[P], AggregateCurrency[P]>
  }




  export type CurrencyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurrencyWhereInput
    orderBy?: CurrencyOrderByWithAggregationInput | CurrencyOrderByWithAggregationInput[]
    by: CurrencyScalarFieldEnum[] | CurrencyScalarFieldEnum
    having?: CurrencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurrencyCountAggregateInputType | true
    _avg?: CurrencyAvgAggregateInputType
    _sum?: CurrencySumAggregateInputType
    _min?: CurrencyMinAggregateInputType
    _max?: CurrencyMaxAggregateInputType
  }

  export type CurrencyGroupByOutputType = {
    id_currency: number
    abbr: string
    name: string
    symbol: string
    _count: CurrencyCountAggregateOutputType | null
    _avg: CurrencyAvgAggregateOutputType | null
    _sum: CurrencySumAggregateOutputType | null
    _min: CurrencyMinAggregateOutputType | null
    _max: CurrencyMaxAggregateOutputType | null
  }

  type GetCurrencyGroupByPayload<T extends CurrencyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurrencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurrencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurrencyGroupByOutputType[P]>
            : GetScalarType<T[P], CurrencyGroupByOutputType[P]>
        }
      >
    >


  export type CurrencySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_currency?: boolean
    abbr?: boolean
    name?: boolean
    symbol?: boolean
    country?: boolean | Currency$countryArgs<ExtArgs>
    _count?: boolean | CurrencyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["currency"]>

  export type CurrencySelectScalar = {
    id_currency?: boolean
    abbr?: boolean
    name?: boolean
    symbol?: boolean
  }

  export type CurrencyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | Currency$countryArgs<ExtArgs>
    _count?: boolean | CurrencyCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CurrencyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Currency"
    objects: {
      country: Prisma.$CountryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_currency: number
      abbr: string
      name: string
      symbol: string
    }, ExtArgs["result"]["currency"]>
    composites: {}
  }


  type CurrencyGetPayload<S extends boolean | null | undefined | CurrencyDefaultArgs> = $Result.GetResult<Prisma.$CurrencyPayload, S>

  type CurrencyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CurrencyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CurrencyCountAggregateInputType | true
    }

  export interface CurrencyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Currency'], meta: { name: 'Currency' } }
    /**
     * Find zero or one Currency that matches the filter.
     * @param {CurrencyFindUniqueArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CurrencyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CurrencyFindUniqueArgs<ExtArgs>>
    ): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Currency that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CurrencyFindUniqueOrThrowArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CurrencyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CurrencyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Currency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyFindFirstArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CurrencyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CurrencyFindFirstArgs<ExtArgs>>
    ): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Currency that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyFindFirstOrThrowArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CurrencyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CurrencyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Currencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Currencies
     * const currencies = await prisma.currency.findMany()
     * 
     * // Get first 10 Currencies
     * const currencies = await prisma.currency.findMany({ take: 10 })
     * 
     * // Only select the `id_currency`
     * const currencyWithId_currencyOnly = await prisma.currency.findMany({ select: { id_currency: true } })
     * 
    **/
    findMany<T extends CurrencyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CurrencyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Currency.
     * @param {CurrencyCreateArgs} args - Arguments to create a Currency.
     * @example
     * // Create one Currency
     * const Currency = await prisma.currency.create({
     *   data: {
     *     // ... data to create a Currency
     *   }
     * })
     * 
    **/
    create<T extends CurrencyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CurrencyCreateArgs<ExtArgs>>
    ): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Currencies.
     *     @param {CurrencyCreateManyArgs} args - Arguments to create many Currencies.
     *     @example
     *     // Create many Currencies
     *     const currency = await prisma.currency.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CurrencyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CurrencyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Currency.
     * @param {CurrencyDeleteArgs} args - Arguments to delete one Currency.
     * @example
     * // Delete one Currency
     * const Currency = await prisma.currency.delete({
     *   where: {
     *     // ... filter to delete one Currency
     *   }
     * })
     * 
    **/
    delete<T extends CurrencyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CurrencyDeleteArgs<ExtArgs>>
    ): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Currency.
     * @param {CurrencyUpdateArgs} args - Arguments to update one Currency.
     * @example
     * // Update one Currency
     * const currency = await prisma.currency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CurrencyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CurrencyUpdateArgs<ExtArgs>>
    ): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Currencies.
     * @param {CurrencyDeleteManyArgs} args - Arguments to filter Currencies to delete.
     * @example
     * // Delete a few Currencies
     * const { count } = await prisma.currency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CurrencyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CurrencyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Currencies
     * const currency = await prisma.currency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CurrencyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CurrencyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Currency.
     * @param {CurrencyUpsertArgs} args - Arguments to update or create a Currency.
     * @example
     * // Update or create a Currency
     * const currency = await prisma.currency.upsert({
     *   create: {
     *     // ... data to create a Currency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Currency we want to update
     *   }
     * })
    **/
    upsert<T extends CurrencyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CurrencyUpsertArgs<ExtArgs>>
    ): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyCountArgs} args - Arguments to filter Currencies to count.
     * @example
     * // Count the number of Currencies
     * const count = await prisma.currency.count({
     *   where: {
     *     // ... the filter for the Currencies we want to count
     *   }
     * })
    **/
    count<T extends CurrencyCountArgs>(
      args?: Subset<T, CurrencyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurrencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Currency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CurrencyAggregateArgs>(args: Subset<T, CurrencyAggregateArgs>): Prisma.PrismaPromise<GetCurrencyAggregateType<T>>

    /**
     * Group by Currency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CurrencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CurrencyGroupByArgs['orderBy'] }
        : { orderBy?: CurrencyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CurrencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurrencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Currency model
   */
  readonly fields: CurrencyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Currency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CurrencyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    country<T extends Currency$countryArgs<ExtArgs> = {}>(args?: Subset<T, Currency$countryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Currency model
   */ 
  interface CurrencyFieldRefs {
    readonly id_currency: FieldRef<"Currency", 'Int'>
    readonly abbr: FieldRef<"Currency", 'String'>
    readonly name: FieldRef<"Currency", 'String'>
    readonly symbol: FieldRef<"Currency", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Currency findUnique
   */
  export type CurrencyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where: CurrencyWhereUniqueInput
  }


  /**
   * Currency findUniqueOrThrow
   */
  export type CurrencyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where: CurrencyWhereUniqueInput
  }


  /**
   * Currency findFirst
   */
  export type CurrencyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Currencies.
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Currencies.
     */
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[]
  }


  /**
   * Currency findFirstOrThrow
   */
  export type CurrencyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Currencies.
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Currencies.
     */
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[]
  }


  /**
   * Currency findMany
   */
  export type CurrencyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currencies to fetch.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Currencies.
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[]
  }


  /**
   * Currency create
   */
  export type CurrencyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * The data needed to create a Currency.
     */
    data: XOR<CurrencyCreateInput, CurrencyUncheckedCreateInput>
  }


  /**
   * Currency createMany
   */
  export type CurrencyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Currencies.
     */
    data: CurrencyCreateManyInput | CurrencyCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Currency update
   */
  export type CurrencyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * The data needed to update a Currency.
     */
    data: XOR<CurrencyUpdateInput, CurrencyUncheckedUpdateInput>
    /**
     * Choose, which Currency to update.
     */
    where: CurrencyWhereUniqueInput
  }


  /**
   * Currency updateMany
   */
  export type CurrencyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Currencies.
     */
    data: XOR<CurrencyUpdateManyMutationInput, CurrencyUncheckedUpdateManyInput>
    /**
     * Filter which Currencies to update
     */
    where?: CurrencyWhereInput
  }


  /**
   * Currency upsert
   */
  export type CurrencyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * The filter to search for the Currency to update in case it exists.
     */
    where: CurrencyWhereUniqueInput
    /**
     * In case the Currency found by the `where` argument doesn't exist, create a new Currency with this data.
     */
    create: XOR<CurrencyCreateInput, CurrencyUncheckedCreateInput>
    /**
     * In case the Currency was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CurrencyUpdateInput, CurrencyUncheckedUpdateInput>
  }


  /**
   * Currency delete
   */
  export type CurrencyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter which Currency to delete.
     */
    where: CurrencyWhereUniqueInput
  }


  /**
   * Currency deleteMany
   */
  export type CurrencyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Currencies to delete
     */
    where?: CurrencyWhereInput
  }


  /**
   * Currency.country
   */
  export type Currency$countryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    cursor?: CountryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }


  /**
   * Currency without action
   */
  export type CurrencyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CurrencyInclude<ExtArgs> | null
  }



  /**
   * Model Flag
   */

  export type AggregateFlag = {
    _count: FlagCountAggregateOutputType | null
    _avg: FlagAvgAggregateOutputType | null
    _sum: FlagSumAggregateOutputType | null
    _min: FlagMinAggregateOutputType | null
    _max: FlagMaxAggregateOutputType | null
  }

  export type FlagAvgAggregateOutputType = {
    id_flag: number | null
  }

  export type FlagSumAggregateOutputType = {
    id_flag: number | null
  }

  export type FlagMinAggregateOutputType = {
    id_flag: number | null
    name: string | null
    type: string | null
    url: string | null
  }

  export type FlagMaxAggregateOutputType = {
    id_flag: number | null
    name: string | null
    type: string | null
    url: string | null
  }

  export type FlagCountAggregateOutputType = {
    id_flag: number
    name: number
    type: number
    url: number
    _all: number
  }


  export type FlagAvgAggregateInputType = {
    id_flag?: true
  }

  export type FlagSumAggregateInputType = {
    id_flag?: true
  }

  export type FlagMinAggregateInputType = {
    id_flag?: true
    name?: true
    type?: true
    url?: true
  }

  export type FlagMaxAggregateInputType = {
    id_flag?: true
    name?: true
    type?: true
    url?: true
  }

  export type FlagCountAggregateInputType = {
    id_flag?: true
    name?: true
    type?: true
    url?: true
    _all?: true
  }

  export type FlagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flag to aggregate.
     */
    where?: FlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flags to fetch.
     */
    orderBy?: FlagOrderByWithRelationInput | FlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Flags
    **/
    _count?: true | FlagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlagMaxAggregateInputType
  }

  export type GetFlagAggregateType<T extends FlagAggregateArgs> = {
        [P in keyof T & keyof AggregateFlag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlag[P]>
      : GetScalarType<T[P], AggregateFlag[P]>
  }




  export type FlagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlagWhereInput
    orderBy?: FlagOrderByWithAggregationInput | FlagOrderByWithAggregationInput[]
    by: FlagScalarFieldEnum[] | FlagScalarFieldEnum
    having?: FlagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlagCountAggregateInputType | true
    _avg?: FlagAvgAggregateInputType
    _sum?: FlagSumAggregateInputType
    _min?: FlagMinAggregateInputType
    _max?: FlagMaxAggregateInputType
  }

  export type FlagGroupByOutputType = {
    id_flag: number
    name: string
    type: string
    url: string
    _count: FlagCountAggregateOutputType | null
    _avg: FlagAvgAggregateOutputType | null
    _sum: FlagSumAggregateOutputType | null
    _min: FlagMinAggregateOutputType | null
    _max: FlagMaxAggregateOutputType | null
  }

  type GetFlagGroupByPayload<T extends FlagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlagGroupByOutputType[P]>
            : GetScalarType<T[P], FlagGroupByOutputType[P]>
        }
      >
    >


  export type FlagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_flag?: boolean
    name?: boolean
    type?: boolean
    url?: boolean
    country?: boolean | Flag$countryArgs<ExtArgs>
    _count?: boolean | FlagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flag"]>

  export type FlagSelectScalar = {
    id_flag?: boolean
    name?: boolean
    type?: boolean
    url?: boolean
  }

  export type FlagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | Flag$countryArgs<ExtArgs>
    _count?: boolean | FlagCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $FlagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Flag"
    objects: {
      country: Prisma.$CountryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_flag: number
      name: string
      type: string
      url: string
    }, ExtArgs["result"]["flag"]>
    composites: {}
  }


  type FlagGetPayload<S extends boolean | null | undefined | FlagDefaultArgs> = $Result.GetResult<Prisma.$FlagPayload, S>

  type FlagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FlagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FlagCountAggregateInputType | true
    }

  export interface FlagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Flag'], meta: { name: 'Flag' } }
    /**
     * Find zero or one Flag that matches the filter.
     * @param {FlagFindUniqueArgs} args - Arguments to find a Flag
     * @example
     * // Get one Flag
     * const flag = await prisma.flag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FlagFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FlagFindUniqueArgs<ExtArgs>>
    ): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Flag that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FlagFindUniqueOrThrowArgs} args - Arguments to find a Flag
     * @example
     * // Get one Flag
     * const flag = await prisma.flag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FlagFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FlagFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Flag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagFindFirstArgs} args - Arguments to find a Flag
     * @example
     * // Get one Flag
     * const flag = await prisma.flag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FlagFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FlagFindFirstArgs<ExtArgs>>
    ): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Flag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagFindFirstOrThrowArgs} args - Arguments to find a Flag
     * @example
     * // Get one Flag
     * const flag = await prisma.flag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FlagFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FlagFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Flags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flags
     * const flags = await prisma.flag.findMany()
     * 
     * // Get first 10 Flags
     * const flags = await prisma.flag.findMany({ take: 10 })
     * 
     * // Only select the `id_flag`
     * const flagWithId_flagOnly = await prisma.flag.findMany({ select: { id_flag: true } })
     * 
    **/
    findMany<T extends FlagFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FlagFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Flag.
     * @param {FlagCreateArgs} args - Arguments to create a Flag.
     * @example
     * // Create one Flag
     * const Flag = await prisma.flag.create({
     *   data: {
     *     // ... data to create a Flag
     *   }
     * })
     * 
    **/
    create<T extends FlagCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FlagCreateArgs<ExtArgs>>
    ): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Flags.
     *     @param {FlagCreateManyArgs} args - Arguments to create many Flags.
     *     @example
     *     // Create many Flags
     *     const flag = await prisma.flag.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FlagCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FlagCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Flag.
     * @param {FlagDeleteArgs} args - Arguments to delete one Flag.
     * @example
     * // Delete one Flag
     * const Flag = await prisma.flag.delete({
     *   where: {
     *     // ... filter to delete one Flag
     *   }
     * })
     * 
    **/
    delete<T extends FlagDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FlagDeleteArgs<ExtArgs>>
    ): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Flag.
     * @param {FlagUpdateArgs} args - Arguments to update one Flag.
     * @example
     * // Update one Flag
     * const flag = await prisma.flag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FlagUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FlagUpdateArgs<ExtArgs>>
    ): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Flags.
     * @param {FlagDeleteManyArgs} args - Arguments to filter Flags to delete.
     * @example
     * // Delete a few Flags
     * const { count } = await prisma.flag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FlagDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FlagDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flags
     * const flag = await prisma.flag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FlagUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FlagUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Flag.
     * @param {FlagUpsertArgs} args - Arguments to update or create a Flag.
     * @example
     * // Update or create a Flag
     * const flag = await prisma.flag.upsert({
     *   create: {
     *     // ... data to create a Flag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flag we want to update
     *   }
     * })
    **/
    upsert<T extends FlagUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FlagUpsertArgs<ExtArgs>>
    ): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Flags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagCountArgs} args - Arguments to filter Flags to count.
     * @example
     * // Count the number of Flags
     * const count = await prisma.flag.count({
     *   where: {
     *     // ... the filter for the Flags we want to count
     *   }
     * })
    **/
    count<T extends FlagCountArgs>(
      args?: Subset<T, FlagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FlagAggregateArgs>(args: Subset<T, FlagAggregateArgs>): Prisma.PrismaPromise<GetFlagAggregateType<T>>

    /**
     * Group by Flag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FlagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlagGroupByArgs['orderBy'] }
        : { orderBy?: FlagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FlagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Flag model
   */
  readonly fields: FlagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Flag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    country<T extends Flag$countryArgs<ExtArgs> = {}>(args?: Subset<T, Flag$countryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Flag model
   */ 
  interface FlagFieldRefs {
    readonly id_flag: FieldRef<"Flag", 'Int'>
    readonly name: FieldRef<"Flag", 'String'>
    readonly type: FieldRef<"Flag", 'String'>
    readonly url: FieldRef<"Flag", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Flag findUnique
   */
  export type FlagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * Filter, which Flag to fetch.
     */
    where: FlagWhereUniqueInput
  }


  /**
   * Flag findUniqueOrThrow
   */
  export type FlagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * Filter, which Flag to fetch.
     */
    where: FlagWhereUniqueInput
  }


  /**
   * Flag findFirst
   */
  export type FlagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * Filter, which Flag to fetch.
     */
    where?: FlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flags to fetch.
     */
    orderBy?: FlagOrderByWithRelationInput | FlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flags.
     */
    cursor?: FlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flags.
     */
    distinct?: FlagScalarFieldEnum | FlagScalarFieldEnum[]
  }


  /**
   * Flag findFirstOrThrow
   */
  export type FlagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * Filter, which Flag to fetch.
     */
    where?: FlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flags to fetch.
     */
    orderBy?: FlagOrderByWithRelationInput | FlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flags.
     */
    cursor?: FlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flags.
     */
    distinct?: FlagScalarFieldEnum | FlagScalarFieldEnum[]
  }


  /**
   * Flag findMany
   */
  export type FlagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * Filter, which Flags to fetch.
     */
    where?: FlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flags to fetch.
     */
    orderBy?: FlagOrderByWithRelationInput | FlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Flags.
     */
    cursor?: FlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flags.
     */
    skip?: number
    distinct?: FlagScalarFieldEnum | FlagScalarFieldEnum[]
  }


  /**
   * Flag create
   */
  export type FlagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * The data needed to create a Flag.
     */
    data: XOR<FlagCreateInput, FlagUncheckedCreateInput>
  }


  /**
   * Flag createMany
   */
  export type FlagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Flags.
     */
    data: FlagCreateManyInput | FlagCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Flag update
   */
  export type FlagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * The data needed to update a Flag.
     */
    data: XOR<FlagUpdateInput, FlagUncheckedUpdateInput>
    /**
     * Choose, which Flag to update.
     */
    where: FlagWhereUniqueInput
  }


  /**
   * Flag updateMany
   */
  export type FlagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Flags.
     */
    data: XOR<FlagUpdateManyMutationInput, FlagUncheckedUpdateManyInput>
    /**
     * Filter which Flags to update
     */
    where?: FlagWhereInput
  }


  /**
   * Flag upsert
   */
  export type FlagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * The filter to search for the Flag to update in case it exists.
     */
    where: FlagWhereUniqueInput
    /**
     * In case the Flag found by the `where` argument doesn't exist, create a new Flag with this data.
     */
    create: XOR<FlagCreateInput, FlagUncheckedCreateInput>
    /**
     * In case the Flag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlagUpdateInput, FlagUncheckedUpdateInput>
  }


  /**
   * Flag delete
   */
  export type FlagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * Filter which Flag to delete.
     */
    where: FlagWhereUniqueInput
  }


  /**
   * Flag deleteMany
   */
  export type FlagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flags to delete
     */
    where?: FlagWhereInput
  }


  /**
   * Flag.country
   */
  export type Flag$countryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    cursor?: CountryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }


  /**
   * Flag without action
   */
  export type FlagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlagInclude<ExtArgs> | null
  }



  /**
   * Model Coat_Of_Arm
   */

  export type AggregateCoat_Of_Arm = {
    _count: Coat_Of_ArmCountAggregateOutputType | null
    _avg: Coat_Of_ArmAvgAggregateOutputType | null
    _sum: Coat_Of_ArmSumAggregateOutputType | null
    _min: Coat_Of_ArmMinAggregateOutputType | null
    _max: Coat_Of_ArmMaxAggregateOutputType | null
  }

  export type Coat_Of_ArmAvgAggregateOutputType = {
    id_coat_of_arm: number | null
  }

  export type Coat_Of_ArmSumAggregateOutputType = {
    id_coat_of_arm: number | null
  }

  export type Coat_Of_ArmMinAggregateOutputType = {
    id_coat_of_arm: number | null
    name: string | null
    type: string | null
    url: string | null
  }

  export type Coat_Of_ArmMaxAggregateOutputType = {
    id_coat_of_arm: number | null
    name: string | null
    type: string | null
    url: string | null
  }

  export type Coat_Of_ArmCountAggregateOutputType = {
    id_coat_of_arm: number
    name: number
    type: number
    url: number
    _all: number
  }


  export type Coat_Of_ArmAvgAggregateInputType = {
    id_coat_of_arm?: true
  }

  export type Coat_Of_ArmSumAggregateInputType = {
    id_coat_of_arm?: true
  }

  export type Coat_Of_ArmMinAggregateInputType = {
    id_coat_of_arm?: true
    name?: true
    type?: true
    url?: true
  }

  export type Coat_Of_ArmMaxAggregateInputType = {
    id_coat_of_arm?: true
    name?: true
    type?: true
    url?: true
  }

  export type Coat_Of_ArmCountAggregateInputType = {
    id_coat_of_arm?: true
    name?: true
    type?: true
    url?: true
    _all?: true
  }

  export type Coat_Of_ArmAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coat_Of_Arm to aggregate.
     */
    where?: Coat_Of_ArmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coat_Of_Arms to fetch.
     */
    orderBy?: Coat_Of_ArmOrderByWithRelationInput | Coat_Of_ArmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Coat_Of_ArmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coat_Of_Arms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coat_Of_Arms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Coat_Of_Arms
    **/
    _count?: true | Coat_Of_ArmCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Coat_Of_ArmAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Coat_Of_ArmSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Coat_Of_ArmMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Coat_Of_ArmMaxAggregateInputType
  }

  export type GetCoat_Of_ArmAggregateType<T extends Coat_Of_ArmAggregateArgs> = {
        [P in keyof T & keyof AggregateCoat_Of_Arm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoat_Of_Arm[P]>
      : GetScalarType<T[P], AggregateCoat_Of_Arm[P]>
  }




  export type Coat_Of_ArmGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Coat_Of_ArmWhereInput
    orderBy?: Coat_Of_ArmOrderByWithAggregationInput | Coat_Of_ArmOrderByWithAggregationInput[]
    by: Coat_Of_ArmScalarFieldEnum[] | Coat_Of_ArmScalarFieldEnum
    having?: Coat_Of_ArmScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Coat_Of_ArmCountAggregateInputType | true
    _avg?: Coat_Of_ArmAvgAggregateInputType
    _sum?: Coat_Of_ArmSumAggregateInputType
    _min?: Coat_Of_ArmMinAggregateInputType
    _max?: Coat_Of_ArmMaxAggregateInputType
  }

  export type Coat_Of_ArmGroupByOutputType = {
    id_coat_of_arm: number
    name: string
    type: string
    url: string
    _count: Coat_Of_ArmCountAggregateOutputType | null
    _avg: Coat_Of_ArmAvgAggregateOutputType | null
    _sum: Coat_Of_ArmSumAggregateOutputType | null
    _min: Coat_Of_ArmMinAggregateOutputType | null
    _max: Coat_Of_ArmMaxAggregateOutputType | null
  }

  type GetCoat_Of_ArmGroupByPayload<T extends Coat_Of_ArmGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Coat_Of_ArmGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Coat_Of_ArmGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Coat_Of_ArmGroupByOutputType[P]>
            : GetScalarType<T[P], Coat_Of_ArmGroupByOutputType[P]>
        }
      >
    >


  export type Coat_Of_ArmSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_coat_of_arm?: boolean
    name?: boolean
    type?: boolean
    url?: boolean
    country?: boolean | Coat_Of_Arm$countryArgs<ExtArgs>
    _count?: boolean | Coat_Of_ArmCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coat_Of_Arm"]>

  export type Coat_Of_ArmSelectScalar = {
    id_coat_of_arm?: boolean
    name?: boolean
    type?: boolean
    url?: boolean
  }

  export type Coat_Of_ArmInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | Coat_Of_Arm$countryArgs<ExtArgs>
    _count?: boolean | Coat_Of_ArmCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $Coat_Of_ArmPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Coat_Of_Arm"
    objects: {
      country: Prisma.$CountryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_coat_of_arm: number
      name: string
      type: string
      url: string
    }, ExtArgs["result"]["coat_Of_Arm"]>
    composites: {}
  }


  type Coat_Of_ArmGetPayload<S extends boolean | null | undefined | Coat_Of_ArmDefaultArgs> = $Result.GetResult<Prisma.$Coat_Of_ArmPayload, S>

  type Coat_Of_ArmCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Coat_Of_ArmFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Coat_Of_ArmCountAggregateInputType | true
    }

  export interface Coat_Of_ArmDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Coat_Of_Arm'], meta: { name: 'Coat_Of_Arm' } }
    /**
     * Find zero or one Coat_Of_Arm that matches the filter.
     * @param {Coat_Of_ArmFindUniqueArgs} args - Arguments to find a Coat_Of_Arm
     * @example
     * // Get one Coat_Of_Arm
     * const coat_Of_Arm = await prisma.coat_Of_Arm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Coat_Of_ArmFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Coat_Of_ArmFindUniqueArgs<ExtArgs>>
    ): Prisma__Coat_Of_ArmClient<$Result.GetResult<Prisma.$Coat_Of_ArmPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Coat_Of_Arm that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Coat_Of_ArmFindUniqueOrThrowArgs} args - Arguments to find a Coat_Of_Arm
     * @example
     * // Get one Coat_Of_Arm
     * const coat_Of_Arm = await prisma.coat_Of_Arm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Coat_Of_ArmFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Coat_Of_ArmFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Coat_Of_ArmClient<$Result.GetResult<Prisma.$Coat_Of_ArmPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Coat_Of_Arm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Coat_Of_ArmFindFirstArgs} args - Arguments to find a Coat_Of_Arm
     * @example
     * // Get one Coat_Of_Arm
     * const coat_Of_Arm = await prisma.coat_Of_Arm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Coat_Of_ArmFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Coat_Of_ArmFindFirstArgs<ExtArgs>>
    ): Prisma__Coat_Of_ArmClient<$Result.GetResult<Prisma.$Coat_Of_ArmPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Coat_Of_Arm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Coat_Of_ArmFindFirstOrThrowArgs} args - Arguments to find a Coat_Of_Arm
     * @example
     * // Get one Coat_Of_Arm
     * const coat_Of_Arm = await prisma.coat_Of_Arm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Coat_Of_ArmFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Coat_Of_ArmFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Coat_Of_ArmClient<$Result.GetResult<Prisma.$Coat_Of_ArmPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Coat_Of_Arms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Coat_Of_ArmFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coat_Of_Arms
     * const coat_Of_Arms = await prisma.coat_Of_Arm.findMany()
     * 
     * // Get first 10 Coat_Of_Arms
     * const coat_Of_Arms = await prisma.coat_Of_Arm.findMany({ take: 10 })
     * 
     * // Only select the `id_coat_of_arm`
     * const coat_Of_ArmWithId_coat_of_armOnly = await prisma.coat_Of_Arm.findMany({ select: { id_coat_of_arm: true } })
     * 
    **/
    findMany<T extends Coat_Of_ArmFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Coat_Of_ArmFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Coat_Of_ArmPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Coat_Of_Arm.
     * @param {Coat_Of_ArmCreateArgs} args - Arguments to create a Coat_Of_Arm.
     * @example
     * // Create one Coat_Of_Arm
     * const Coat_Of_Arm = await prisma.coat_Of_Arm.create({
     *   data: {
     *     // ... data to create a Coat_Of_Arm
     *   }
     * })
     * 
    **/
    create<T extends Coat_Of_ArmCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Coat_Of_ArmCreateArgs<ExtArgs>>
    ): Prisma__Coat_Of_ArmClient<$Result.GetResult<Prisma.$Coat_Of_ArmPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Coat_Of_Arms.
     *     @param {Coat_Of_ArmCreateManyArgs} args - Arguments to create many Coat_Of_Arms.
     *     @example
     *     // Create many Coat_Of_Arms
     *     const coat_Of_Arm = await prisma.coat_Of_Arm.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Coat_Of_ArmCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Coat_Of_ArmCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Coat_Of_Arm.
     * @param {Coat_Of_ArmDeleteArgs} args - Arguments to delete one Coat_Of_Arm.
     * @example
     * // Delete one Coat_Of_Arm
     * const Coat_Of_Arm = await prisma.coat_Of_Arm.delete({
     *   where: {
     *     // ... filter to delete one Coat_Of_Arm
     *   }
     * })
     * 
    **/
    delete<T extends Coat_Of_ArmDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Coat_Of_ArmDeleteArgs<ExtArgs>>
    ): Prisma__Coat_Of_ArmClient<$Result.GetResult<Prisma.$Coat_Of_ArmPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Coat_Of_Arm.
     * @param {Coat_Of_ArmUpdateArgs} args - Arguments to update one Coat_Of_Arm.
     * @example
     * // Update one Coat_Of_Arm
     * const coat_Of_Arm = await prisma.coat_Of_Arm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Coat_Of_ArmUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Coat_Of_ArmUpdateArgs<ExtArgs>>
    ): Prisma__Coat_Of_ArmClient<$Result.GetResult<Prisma.$Coat_Of_ArmPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Coat_Of_Arms.
     * @param {Coat_Of_ArmDeleteManyArgs} args - Arguments to filter Coat_Of_Arms to delete.
     * @example
     * // Delete a few Coat_Of_Arms
     * const { count } = await prisma.coat_Of_Arm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Coat_Of_ArmDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Coat_Of_ArmDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coat_Of_Arms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Coat_Of_ArmUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coat_Of_Arms
     * const coat_Of_Arm = await prisma.coat_Of_Arm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Coat_Of_ArmUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Coat_Of_ArmUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Coat_Of_Arm.
     * @param {Coat_Of_ArmUpsertArgs} args - Arguments to update or create a Coat_Of_Arm.
     * @example
     * // Update or create a Coat_Of_Arm
     * const coat_Of_Arm = await prisma.coat_Of_Arm.upsert({
     *   create: {
     *     // ... data to create a Coat_Of_Arm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coat_Of_Arm we want to update
     *   }
     * })
    **/
    upsert<T extends Coat_Of_ArmUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Coat_Of_ArmUpsertArgs<ExtArgs>>
    ): Prisma__Coat_Of_ArmClient<$Result.GetResult<Prisma.$Coat_Of_ArmPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Coat_Of_Arms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Coat_Of_ArmCountArgs} args - Arguments to filter Coat_Of_Arms to count.
     * @example
     * // Count the number of Coat_Of_Arms
     * const count = await prisma.coat_Of_Arm.count({
     *   where: {
     *     // ... the filter for the Coat_Of_Arms we want to count
     *   }
     * })
    **/
    count<T extends Coat_Of_ArmCountArgs>(
      args?: Subset<T, Coat_Of_ArmCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Coat_Of_ArmCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coat_Of_Arm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Coat_Of_ArmAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Coat_Of_ArmAggregateArgs>(args: Subset<T, Coat_Of_ArmAggregateArgs>): Prisma.PrismaPromise<GetCoat_Of_ArmAggregateType<T>>

    /**
     * Group by Coat_Of_Arm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Coat_Of_ArmGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Coat_Of_ArmGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Coat_Of_ArmGroupByArgs['orderBy'] }
        : { orderBy?: Coat_Of_ArmGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Coat_Of_ArmGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoat_Of_ArmGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Coat_Of_Arm model
   */
  readonly fields: Coat_Of_ArmFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coat_Of_Arm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Coat_Of_ArmClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    country<T extends Coat_Of_Arm$countryArgs<ExtArgs> = {}>(args?: Subset<T, Coat_Of_Arm$countryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Coat_Of_Arm model
   */ 
  interface Coat_Of_ArmFieldRefs {
    readonly id_coat_of_arm: FieldRef<"Coat_Of_Arm", 'Int'>
    readonly name: FieldRef<"Coat_Of_Arm", 'String'>
    readonly type: FieldRef<"Coat_Of_Arm", 'String'>
    readonly url: FieldRef<"Coat_Of_Arm", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Coat_Of_Arm findUnique
   */
  export type Coat_Of_ArmFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coat_Of_Arm
     */
    select?: Coat_Of_ArmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Coat_Of_ArmInclude<ExtArgs> | null
    /**
     * Filter, which Coat_Of_Arm to fetch.
     */
    where: Coat_Of_ArmWhereUniqueInput
  }


  /**
   * Coat_Of_Arm findUniqueOrThrow
   */
  export type Coat_Of_ArmFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coat_Of_Arm
     */
    select?: Coat_Of_ArmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Coat_Of_ArmInclude<ExtArgs> | null
    /**
     * Filter, which Coat_Of_Arm to fetch.
     */
    where: Coat_Of_ArmWhereUniqueInput
  }


  /**
   * Coat_Of_Arm findFirst
   */
  export type Coat_Of_ArmFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coat_Of_Arm
     */
    select?: Coat_Of_ArmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Coat_Of_ArmInclude<ExtArgs> | null
    /**
     * Filter, which Coat_Of_Arm to fetch.
     */
    where?: Coat_Of_ArmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coat_Of_Arms to fetch.
     */
    orderBy?: Coat_Of_ArmOrderByWithRelationInput | Coat_Of_ArmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coat_Of_Arms.
     */
    cursor?: Coat_Of_ArmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coat_Of_Arms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coat_Of_Arms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coat_Of_Arms.
     */
    distinct?: Coat_Of_ArmScalarFieldEnum | Coat_Of_ArmScalarFieldEnum[]
  }


  /**
   * Coat_Of_Arm findFirstOrThrow
   */
  export type Coat_Of_ArmFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coat_Of_Arm
     */
    select?: Coat_Of_ArmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Coat_Of_ArmInclude<ExtArgs> | null
    /**
     * Filter, which Coat_Of_Arm to fetch.
     */
    where?: Coat_Of_ArmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coat_Of_Arms to fetch.
     */
    orderBy?: Coat_Of_ArmOrderByWithRelationInput | Coat_Of_ArmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coat_Of_Arms.
     */
    cursor?: Coat_Of_ArmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coat_Of_Arms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coat_Of_Arms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coat_Of_Arms.
     */
    distinct?: Coat_Of_ArmScalarFieldEnum | Coat_Of_ArmScalarFieldEnum[]
  }


  /**
   * Coat_Of_Arm findMany
   */
  export type Coat_Of_ArmFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coat_Of_Arm
     */
    select?: Coat_Of_ArmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Coat_Of_ArmInclude<ExtArgs> | null
    /**
     * Filter, which Coat_Of_Arms to fetch.
     */
    where?: Coat_Of_ArmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coat_Of_Arms to fetch.
     */
    orderBy?: Coat_Of_ArmOrderByWithRelationInput | Coat_Of_ArmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coat_Of_Arms.
     */
    cursor?: Coat_Of_ArmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coat_Of_Arms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coat_Of_Arms.
     */
    skip?: number
    distinct?: Coat_Of_ArmScalarFieldEnum | Coat_Of_ArmScalarFieldEnum[]
  }


  /**
   * Coat_Of_Arm create
   */
  export type Coat_Of_ArmCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coat_Of_Arm
     */
    select?: Coat_Of_ArmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Coat_Of_ArmInclude<ExtArgs> | null
    /**
     * The data needed to create a Coat_Of_Arm.
     */
    data: XOR<Coat_Of_ArmCreateInput, Coat_Of_ArmUncheckedCreateInput>
  }


  /**
   * Coat_Of_Arm createMany
   */
  export type Coat_Of_ArmCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Coat_Of_Arms.
     */
    data: Coat_Of_ArmCreateManyInput | Coat_Of_ArmCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Coat_Of_Arm update
   */
  export type Coat_Of_ArmUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coat_Of_Arm
     */
    select?: Coat_Of_ArmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Coat_Of_ArmInclude<ExtArgs> | null
    /**
     * The data needed to update a Coat_Of_Arm.
     */
    data: XOR<Coat_Of_ArmUpdateInput, Coat_Of_ArmUncheckedUpdateInput>
    /**
     * Choose, which Coat_Of_Arm to update.
     */
    where: Coat_Of_ArmWhereUniqueInput
  }


  /**
   * Coat_Of_Arm updateMany
   */
  export type Coat_Of_ArmUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Coat_Of_Arms.
     */
    data: XOR<Coat_Of_ArmUpdateManyMutationInput, Coat_Of_ArmUncheckedUpdateManyInput>
    /**
     * Filter which Coat_Of_Arms to update
     */
    where?: Coat_Of_ArmWhereInput
  }


  /**
   * Coat_Of_Arm upsert
   */
  export type Coat_Of_ArmUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coat_Of_Arm
     */
    select?: Coat_Of_ArmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Coat_Of_ArmInclude<ExtArgs> | null
    /**
     * The filter to search for the Coat_Of_Arm to update in case it exists.
     */
    where: Coat_Of_ArmWhereUniqueInput
    /**
     * In case the Coat_Of_Arm found by the `where` argument doesn't exist, create a new Coat_Of_Arm with this data.
     */
    create: XOR<Coat_Of_ArmCreateInput, Coat_Of_ArmUncheckedCreateInput>
    /**
     * In case the Coat_Of_Arm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Coat_Of_ArmUpdateInput, Coat_Of_ArmUncheckedUpdateInput>
  }


  /**
   * Coat_Of_Arm delete
   */
  export type Coat_Of_ArmDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coat_Of_Arm
     */
    select?: Coat_Of_ArmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Coat_Of_ArmInclude<ExtArgs> | null
    /**
     * Filter which Coat_Of_Arm to delete.
     */
    where: Coat_Of_ArmWhereUniqueInput
  }


  /**
   * Coat_Of_Arm deleteMany
   */
  export type Coat_Of_ArmDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coat_Of_Arms to delete
     */
    where?: Coat_Of_ArmWhereInput
  }


  /**
   * Coat_Of_Arm.country
   */
  export type Coat_Of_Arm$countryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    cursor?: CountryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }


  /**
   * Coat_Of_Arm without action
   */
  export type Coat_Of_ArmDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coat_Of_Arm
     */
    select?: Coat_Of_ArmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Coat_Of_ArmInclude<ExtArgs> | null
  }



  /**
   * Model Country
   */

  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryAvgAggregateOutputType = {
    id_country: number | null
    population: number | null
    id_coat_of_arm: number | null
    id_flag: number | null
    id_currency: number | null
    id_date_format: number | null
    id_region: number | null
    id_sub_region: number | null
  }

  export type CountrySumAggregateOutputType = {
    id_country: number | null
    population: number | null
    id_coat_of_arm: number | null
    id_flag: number | null
    id_currency: number | null
    id_date_format: number | null
    id_region: number | null
    id_sub_region: number | null
  }

  export type CountryMinAggregateOutputType = {
    id_country: number | null
    name: string | null
    official_name: string | null
    abbr: string | null
    internet_tld: string | null
    motto: string | null
    anthem: string | null
    capital: string | null
    official_language: string | null
    population: number | null
    iso_3166_1_alpha_2: string | null
    iso_3166_1_alpha_3: string | null
    calling_code: string | null
    timezone: string | null
    id_coat_of_arm: number | null
    id_flag: number | null
    id_currency: number | null
    id_date_format: number | null
    id_region: number | null
    id_sub_region: number | null
  }

  export type CountryMaxAggregateOutputType = {
    id_country: number | null
    name: string | null
    official_name: string | null
    abbr: string | null
    internet_tld: string | null
    motto: string | null
    anthem: string | null
    capital: string | null
    official_language: string | null
    population: number | null
    iso_3166_1_alpha_2: string | null
    iso_3166_1_alpha_3: string | null
    calling_code: string | null
    timezone: string | null
    id_coat_of_arm: number | null
    id_flag: number | null
    id_currency: number | null
    id_date_format: number | null
    id_region: number | null
    id_sub_region: number | null
  }

  export type CountryCountAggregateOutputType = {
    id_country: number
    name: number
    official_name: number
    abbr: number
    internet_tld: number
    motto: number
    anthem: number
    capital: number
    official_language: number
    population: number
    iso_3166_1_alpha_2: number
    iso_3166_1_alpha_3: number
    calling_code: number
    timezone: number
    id_coat_of_arm: number
    id_flag: number
    id_currency: number
    id_date_format: number
    id_region: number
    id_sub_region: number
    _all: number
  }


  export type CountryAvgAggregateInputType = {
    id_country?: true
    population?: true
    id_coat_of_arm?: true
    id_flag?: true
    id_currency?: true
    id_date_format?: true
    id_region?: true
    id_sub_region?: true
  }

  export type CountrySumAggregateInputType = {
    id_country?: true
    population?: true
    id_coat_of_arm?: true
    id_flag?: true
    id_currency?: true
    id_date_format?: true
    id_region?: true
    id_sub_region?: true
  }

  export type CountryMinAggregateInputType = {
    id_country?: true
    name?: true
    official_name?: true
    abbr?: true
    internet_tld?: true
    motto?: true
    anthem?: true
    capital?: true
    official_language?: true
    population?: true
    iso_3166_1_alpha_2?: true
    iso_3166_1_alpha_3?: true
    calling_code?: true
    timezone?: true
    id_coat_of_arm?: true
    id_flag?: true
    id_currency?: true
    id_date_format?: true
    id_region?: true
    id_sub_region?: true
  }

  export type CountryMaxAggregateInputType = {
    id_country?: true
    name?: true
    official_name?: true
    abbr?: true
    internet_tld?: true
    motto?: true
    anthem?: true
    capital?: true
    official_language?: true
    population?: true
    iso_3166_1_alpha_2?: true
    iso_3166_1_alpha_3?: true
    calling_code?: true
    timezone?: true
    id_coat_of_arm?: true
    id_flag?: true
    id_currency?: true
    id_date_format?: true
    id_region?: true
    id_sub_region?: true
  }

  export type CountryCountAggregateInputType = {
    id_country?: true
    name?: true
    official_name?: true
    abbr?: true
    internet_tld?: true
    motto?: true
    anthem?: true
    capital?: true
    official_language?: true
    population?: true
    iso_3166_1_alpha_2?: true
    iso_3166_1_alpha_3?: true
    calling_code?: true
    timezone?: true
    id_coat_of_arm?: true
    id_flag?: true
    id_currency?: true
    id_date_format?: true
    id_region?: true
    id_sub_region?: true
    _all?: true
  }

  export type CountryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Country to aggregate.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type CountryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithAggregationInput | CountryOrderByWithAggregationInput[]
    by: CountryScalarFieldEnum[] | CountryScalarFieldEnum
    having?: CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _avg?: CountryAvgAggregateInputType
    _sum?: CountrySumAggregateInputType
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }

  export type CountryGroupByOutputType = {
    id_country: number
    name: string
    official_name: string
    abbr: string
    internet_tld: string
    motto: string | null
    anthem: string | null
    capital: string
    official_language: string
    population: number
    iso_3166_1_alpha_2: string | null
    iso_3166_1_alpha_3: string | null
    calling_code: string | null
    timezone: string | null
    id_coat_of_arm: number | null
    id_flag: number | null
    id_currency: number | null
    id_date_format: number | null
    id_region: number | null
    id_sub_region: number | null
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type CountrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_country?: boolean
    name?: boolean
    official_name?: boolean
    abbr?: boolean
    internet_tld?: boolean
    motto?: boolean
    anthem?: boolean
    capital?: boolean
    official_language?: boolean
    population?: boolean
    iso_3166_1_alpha_2?: boolean
    iso_3166_1_alpha_3?: boolean
    calling_code?: boolean
    timezone?: boolean
    id_coat_of_arm?: boolean
    id_flag?: boolean
    id_currency?: boolean
    id_date_format?: boolean
    id_region?: boolean
    id_sub_region?: boolean
    coat_of_arm?: boolean | Country$coat_of_armArgs<ExtArgs>
    flag?: boolean | Country$flagArgs<ExtArgs>
    currency?: boolean | Country$currencyArgs<ExtArgs>
    date_format?: boolean | Country$date_formatArgs<ExtArgs>
    region?: boolean | Country$regionArgs<ExtArgs>
    sub_region?: boolean | Country$sub_regionArgs<ExtArgs>
  }, ExtArgs["result"]["country"]>

  export type CountrySelectScalar = {
    id_country?: boolean
    name?: boolean
    official_name?: boolean
    abbr?: boolean
    internet_tld?: boolean
    motto?: boolean
    anthem?: boolean
    capital?: boolean
    official_language?: boolean
    population?: boolean
    iso_3166_1_alpha_2?: boolean
    iso_3166_1_alpha_3?: boolean
    calling_code?: boolean
    timezone?: boolean
    id_coat_of_arm?: boolean
    id_flag?: boolean
    id_currency?: boolean
    id_date_format?: boolean
    id_region?: boolean
    id_sub_region?: boolean
  }

  export type CountryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coat_of_arm?: boolean | Country$coat_of_armArgs<ExtArgs>
    flag?: boolean | Country$flagArgs<ExtArgs>
    currency?: boolean | Country$currencyArgs<ExtArgs>
    date_format?: boolean | Country$date_formatArgs<ExtArgs>
    region?: boolean | Country$regionArgs<ExtArgs>
    sub_region?: boolean | Country$sub_regionArgs<ExtArgs>
  }


  export type $CountryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Country"
    objects: {
      coat_of_arm: Prisma.$Coat_Of_ArmPayload<ExtArgs> | null
      flag: Prisma.$FlagPayload<ExtArgs> | null
      currency: Prisma.$CurrencyPayload<ExtArgs> | null
      date_format: Prisma.$Date_FormatPayload<ExtArgs> | null
      region: Prisma.$RegionPayload<ExtArgs> | null
      sub_region: Prisma.$Sub_RegionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_country: number
      name: string
      official_name: string
      abbr: string
      internet_tld: string
      motto: string | null
      anthem: string | null
      capital: string
      official_language: string
      population: number
      iso_3166_1_alpha_2: string | null
      iso_3166_1_alpha_3: string | null
      calling_code: string | null
      timezone: string | null
      id_coat_of_arm: number | null
      id_flag: number | null
      id_currency: number | null
      id_date_format: number | null
      id_region: number | null
      id_sub_region: number | null
    }, ExtArgs["result"]["country"]>
    composites: {}
  }


  type CountryGetPayload<S extends boolean | null | undefined | CountryDefaultArgs> = $Result.GetResult<Prisma.$CountryPayload, S>

  type CountryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CountryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface CountryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Country'], meta: { name: 'Country' } }
    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CountryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CountryFindUniqueArgs<ExtArgs>>
    ): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Country that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CountryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CountryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CountryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CountryFindFirstArgs<ExtArgs>>
    ): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Country that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CountryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `id_country`
     * const countryWithId_countryOnly = await prisma.country.findMany({ select: { id_country: true } })
     * 
    **/
    findMany<T extends CountryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CountryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
    **/
    create<T extends CountryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CountryCreateArgs<ExtArgs>>
    ): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Countries.
     *     @param {CountryCreateManyArgs} args - Arguments to create many Countries.
     *     @example
     *     // Create many Countries
     *     const country = await prisma.country.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CountryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CountryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
    **/
    delete<T extends CountryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CountryDeleteArgs<ExtArgs>>
    ): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CountryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CountryUpdateArgs<ExtArgs>>
    ): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CountryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CountryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CountryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CountryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
    **/
    upsert<T extends CountryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CountryUpsertArgs<ExtArgs>>
    ): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(
      args?: Subset<T, CountryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Country model
   */
  readonly fields: CountryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    coat_of_arm<T extends Country$coat_of_armArgs<ExtArgs> = {}>(args?: Subset<T, Country$coat_of_armArgs<ExtArgs>>): Prisma__Coat_Of_ArmClient<$Result.GetResult<Prisma.$Coat_Of_ArmPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    flag<T extends Country$flagArgs<ExtArgs> = {}>(args?: Subset<T, Country$flagArgs<ExtArgs>>): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    currency<T extends Country$currencyArgs<ExtArgs> = {}>(args?: Subset<T, Country$currencyArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    date_format<T extends Country$date_formatArgs<ExtArgs> = {}>(args?: Subset<T, Country$date_formatArgs<ExtArgs>>): Prisma__Date_FormatClient<$Result.GetResult<Prisma.$Date_FormatPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    region<T extends Country$regionArgs<ExtArgs> = {}>(args?: Subset<T, Country$regionArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    sub_region<T extends Country$sub_regionArgs<ExtArgs> = {}>(args?: Subset<T, Country$sub_regionArgs<ExtArgs>>): Prisma__Sub_RegionClient<$Result.GetResult<Prisma.$Sub_RegionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Country model
   */ 
  interface CountryFieldRefs {
    readonly id_country: FieldRef<"Country", 'Int'>
    readonly name: FieldRef<"Country", 'String'>
    readonly official_name: FieldRef<"Country", 'String'>
    readonly abbr: FieldRef<"Country", 'String'>
    readonly internet_tld: FieldRef<"Country", 'String'>
    readonly motto: FieldRef<"Country", 'String'>
    readonly anthem: FieldRef<"Country", 'String'>
    readonly capital: FieldRef<"Country", 'String'>
    readonly official_language: FieldRef<"Country", 'String'>
    readonly population: FieldRef<"Country", 'Int'>
    readonly iso_3166_1_alpha_2: FieldRef<"Country", 'String'>
    readonly iso_3166_1_alpha_3: FieldRef<"Country", 'String'>
    readonly calling_code: FieldRef<"Country", 'String'>
    readonly timezone: FieldRef<"Country", 'String'>
    readonly id_coat_of_arm: FieldRef<"Country", 'Int'>
    readonly id_flag: FieldRef<"Country", 'Int'>
    readonly id_currency: FieldRef<"Country", 'Int'>
    readonly id_date_format: FieldRef<"Country", 'Int'>
    readonly id_region: FieldRef<"Country", 'Int'>
    readonly id_sub_region: FieldRef<"Country", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Country findUnique
   */
  export type CountryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }


  /**
   * Country findUniqueOrThrow
   */
  export type CountryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }


  /**
   * Country findFirst
   */
  export type CountryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }


  /**
   * Country findFirstOrThrow
   */
  export type CountryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }


  /**
   * Country findMany
   */
  export type CountryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }


  /**
   * Country create
   */
  export type CountryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to create a Country.
     */
    data: XOR<CountryCreateInput, CountryUncheckedCreateInput>
  }


  /**
   * Country createMany
   */
  export type CountryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Country update
   */
  export type CountryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to update a Country.
     */
    data: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
    /**
     * Choose, which Country to update.
     */
    where: CountryWhereUniqueInput
  }


  /**
   * Country updateMany
   */
  export type CountryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
  }


  /**
   * Country upsert
   */
  export type CountryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The filter to search for the Country to update in case it exists.
     */
    where: CountryWhereUniqueInput
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     */
    create: XOR<CountryCreateInput, CountryUncheckedCreateInput>
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
  }


  /**
   * Country delete
   */
  export type CountryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter which Country to delete.
     */
    where: CountryWhereUniqueInput
  }


  /**
   * Country deleteMany
   */
  export type CountryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to delete
     */
    where?: CountryWhereInput
  }


  /**
   * Country.coat_of_arm
   */
  export type Country$coat_of_armArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coat_Of_Arm
     */
    select?: Coat_Of_ArmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Coat_Of_ArmInclude<ExtArgs> | null
    where?: Coat_Of_ArmWhereInput
  }


  /**
   * Country.flag
   */
  export type Country$flagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlagInclude<ExtArgs> | null
    where?: FlagWhereInput
  }


  /**
   * Country.currency
   */
  export type Country$currencyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CurrencyInclude<ExtArgs> | null
    where?: CurrencyWhereInput
  }


  /**
   * Country.date_format
   */
  export type Country$date_formatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Date_Format
     */
    select?: Date_FormatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Date_FormatInclude<ExtArgs> | null
    where?: Date_FormatWhereInput
  }


  /**
   * Country.region
   */
  export type Country$regionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RegionInclude<ExtArgs> | null
    where?: RegionWhereInput
  }


  /**
   * Country.sub_region
   */
  export type Country$sub_regionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sub_Region
     */
    select?: Sub_RegionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Sub_RegionInclude<ExtArgs> | null
    where?: Sub_RegionWhereInput
  }


  /**
   * Country without action
   */
  export type CountryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id_user: 'id_user',
    name: 'name',
    email: 'email',
    password: 'password',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RegionScalarFieldEnum: {
    id_region: 'id_region',
    name: 'name'
  };

  export type RegionScalarFieldEnum = (typeof RegionScalarFieldEnum)[keyof typeof RegionScalarFieldEnum]


  export const Sub_RegionScalarFieldEnum: {
    id_sub_region: 'id_sub_region',
    name: 'name',
    id_region: 'id_region'
  };

  export type Sub_RegionScalarFieldEnum = (typeof Sub_RegionScalarFieldEnum)[keyof typeof Sub_RegionScalarFieldEnum]


  export const Date_FormatScalarFieldEnum: {
    id_date_format: 'id_date_format',
    format: 'format'
  };

  export type Date_FormatScalarFieldEnum = (typeof Date_FormatScalarFieldEnum)[keyof typeof Date_FormatScalarFieldEnum]


  export const CurrencyScalarFieldEnum: {
    id_currency: 'id_currency',
    abbr: 'abbr',
    name: 'name',
    symbol: 'symbol'
  };

  export type CurrencyScalarFieldEnum = (typeof CurrencyScalarFieldEnum)[keyof typeof CurrencyScalarFieldEnum]


  export const FlagScalarFieldEnum: {
    id_flag: 'id_flag',
    name: 'name',
    type: 'type',
    url: 'url'
  };

  export type FlagScalarFieldEnum = (typeof FlagScalarFieldEnum)[keyof typeof FlagScalarFieldEnum]


  export const Coat_Of_ArmScalarFieldEnum: {
    id_coat_of_arm: 'id_coat_of_arm',
    name: 'name',
    type: 'type',
    url: 'url'
  };

  export type Coat_Of_ArmScalarFieldEnum = (typeof Coat_Of_ArmScalarFieldEnum)[keyof typeof Coat_Of_ArmScalarFieldEnum]


  export const CountryScalarFieldEnum: {
    id_country: 'id_country',
    name: 'name',
    official_name: 'official_name',
    abbr: 'abbr',
    internet_tld: 'internet_tld',
    motto: 'motto',
    anthem: 'anthem',
    capital: 'capital',
    official_language: 'official_language',
    population: 'population',
    iso_3166_1_alpha_2: 'iso_3166_1_alpha_2',
    iso_3166_1_alpha_3: 'iso_3166_1_alpha_3',
    calling_code: 'calling_code',
    timezone: 'timezone',
    id_coat_of_arm: 'id_coat_of_arm',
    id_flag: 'id_flag',
    id_currency: 'id_currency',
    id_date_format: 'id_date_format',
    id_region: 'id_region',
    id_sub_region: 'id_sub_region'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id_user?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id_user?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id_user?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
  }, "id_user" | "email">

  export type UserOrderByWithAggregationInput = {
    id_user?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id_user?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RegionWhereInput = {
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    id_region?: IntFilter<"Region"> | number
    name?: StringFilter<"Region"> | string
    sub_region?: Sub_RegionListRelationFilter
    country?: CountryListRelationFilter
  }

  export type RegionOrderByWithRelationInput = {
    id_region?: SortOrder
    name?: SortOrder
    sub_region?: Sub_RegionOrderByRelationAggregateInput
    country?: CountryOrderByRelationAggregateInput
  }

  export type RegionWhereUniqueInput = Prisma.AtLeast<{
    id_region?: number
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    name?: StringFilter<"Region"> | string
    sub_region?: Sub_RegionListRelationFilter
    country?: CountryListRelationFilter
  }, "id_region">

  export type RegionOrderByWithAggregationInput = {
    id_region?: SortOrder
    name?: SortOrder
    _count?: RegionCountOrderByAggregateInput
    _avg?: RegionAvgOrderByAggregateInput
    _max?: RegionMaxOrderByAggregateInput
    _min?: RegionMinOrderByAggregateInput
    _sum?: RegionSumOrderByAggregateInput
  }

  export type RegionScalarWhereWithAggregatesInput = {
    AND?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    OR?: RegionScalarWhereWithAggregatesInput[]
    NOT?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    id_region?: IntWithAggregatesFilter<"Region"> | number
    name?: StringWithAggregatesFilter<"Region"> | string
  }

  export type Sub_RegionWhereInput = {
    AND?: Sub_RegionWhereInput | Sub_RegionWhereInput[]
    OR?: Sub_RegionWhereInput[]
    NOT?: Sub_RegionWhereInput | Sub_RegionWhereInput[]
    id_sub_region?: IntFilter<"Sub_Region"> | number
    name?: StringFilter<"Sub_Region"> | string
    id_region?: IntFilter<"Sub_Region"> | number
    region?: XOR<RegionRelationFilter, RegionWhereInput>
    country?: CountryListRelationFilter
  }

  export type Sub_RegionOrderByWithRelationInput = {
    id_sub_region?: SortOrder
    name?: SortOrder
    id_region?: SortOrder
    region?: RegionOrderByWithRelationInput
    country?: CountryOrderByRelationAggregateInput
  }

  export type Sub_RegionWhereUniqueInput = Prisma.AtLeast<{
    id_sub_region?: number
    AND?: Sub_RegionWhereInput | Sub_RegionWhereInput[]
    OR?: Sub_RegionWhereInput[]
    NOT?: Sub_RegionWhereInput | Sub_RegionWhereInput[]
    name?: StringFilter<"Sub_Region"> | string
    id_region?: IntFilter<"Sub_Region"> | number
    region?: XOR<RegionRelationFilter, RegionWhereInput>
    country?: CountryListRelationFilter
  }, "id_sub_region">

  export type Sub_RegionOrderByWithAggregationInput = {
    id_sub_region?: SortOrder
    name?: SortOrder
    id_region?: SortOrder
    _count?: Sub_RegionCountOrderByAggregateInput
    _avg?: Sub_RegionAvgOrderByAggregateInput
    _max?: Sub_RegionMaxOrderByAggregateInput
    _min?: Sub_RegionMinOrderByAggregateInput
    _sum?: Sub_RegionSumOrderByAggregateInput
  }

  export type Sub_RegionScalarWhereWithAggregatesInput = {
    AND?: Sub_RegionScalarWhereWithAggregatesInput | Sub_RegionScalarWhereWithAggregatesInput[]
    OR?: Sub_RegionScalarWhereWithAggregatesInput[]
    NOT?: Sub_RegionScalarWhereWithAggregatesInput | Sub_RegionScalarWhereWithAggregatesInput[]
    id_sub_region?: IntWithAggregatesFilter<"Sub_Region"> | number
    name?: StringWithAggregatesFilter<"Sub_Region"> | string
    id_region?: IntWithAggregatesFilter<"Sub_Region"> | number
  }

  export type Date_FormatWhereInput = {
    AND?: Date_FormatWhereInput | Date_FormatWhereInput[]
    OR?: Date_FormatWhereInput[]
    NOT?: Date_FormatWhereInput | Date_FormatWhereInput[]
    id_date_format?: IntFilter<"Date_Format"> | number
    format?: StringFilter<"Date_Format"> | string
    country?: CountryListRelationFilter
  }

  export type Date_FormatOrderByWithRelationInput = {
    id_date_format?: SortOrder
    format?: SortOrder
    country?: CountryOrderByRelationAggregateInput
  }

  export type Date_FormatWhereUniqueInput = Prisma.AtLeast<{
    id_date_format?: number
    AND?: Date_FormatWhereInput | Date_FormatWhereInput[]
    OR?: Date_FormatWhereInput[]
    NOT?: Date_FormatWhereInput | Date_FormatWhereInput[]
    format?: StringFilter<"Date_Format"> | string
    country?: CountryListRelationFilter
  }, "id_date_format">

  export type Date_FormatOrderByWithAggregationInput = {
    id_date_format?: SortOrder
    format?: SortOrder
    _count?: Date_FormatCountOrderByAggregateInput
    _avg?: Date_FormatAvgOrderByAggregateInput
    _max?: Date_FormatMaxOrderByAggregateInput
    _min?: Date_FormatMinOrderByAggregateInput
    _sum?: Date_FormatSumOrderByAggregateInput
  }

  export type Date_FormatScalarWhereWithAggregatesInput = {
    AND?: Date_FormatScalarWhereWithAggregatesInput | Date_FormatScalarWhereWithAggregatesInput[]
    OR?: Date_FormatScalarWhereWithAggregatesInput[]
    NOT?: Date_FormatScalarWhereWithAggregatesInput | Date_FormatScalarWhereWithAggregatesInput[]
    id_date_format?: IntWithAggregatesFilter<"Date_Format"> | number
    format?: StringWithAggregatesFilter<"Date_Format"> | string
  }

  export type CurrencyWhereInput = {
    AND?: CurrencyWhereInput | CurrencyWhereInput[]
    OR?: CurrencyWhereInput[]
    NOT?: CurrencyWhereInput | CurrencyWhereInput[]
    id_currency?: IntFilter<"Currency"> | number
    abbr?: StringFilter<"Currency"> | string
    name?: StringFilter<"Currency"> | string
    symbol?: StringFilter<"Currency"> | string
    country?: CountryListRelationFilter
  }

  export type CurrencyOrderByWithRelationInput = {
    id_currency?: SortOrder
    abbr?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    country?: CountryOrderByRelationAggregateInput
  }

  export type CurrencyWhereUniqueInput = Prisma.AtLeast<{
    id_currency?: number
    AND?: CurrencyWhereInput | CurrencyWhereInput[]
    OR?: CurrencyWhereInput[]
    NOT?: CurrencyWhereInput | CurrencyWhereInput[]
    abbr?: StringFilter<"Currency"> | string
    name?: StringFilter<"Currency"> | string
    symbol?: StringFilter<"Currency"> | string
    country?: CountryListRelationFilter
  }, "id_currency">

  export type CurrencyOrderByWithAggregationInput = {
    id_currency?: SortOrder
    abbr?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    _count?: CurrencyCountOrderByAggregateInput
    _avg?: CurrencyAvgOrderByAggregateInput
    _max?: CurrencyMaxOrderByAggregateInput
    _min?: CurrencyMinOrderByAggregateInput
    _sum?: CurrencySumOrderByAggregateInput
  }

  export type CurrencyScalarWhereWithAggregatesInput = {
    AND?: CurrencyScalarWhereWithAggregatesInput | CurrencyScalarWhereWithAggregatesInput[]
    OR?: CurrencyScalarWhereWithAggregatesInput[]
    NOT?: CurrencyScalarWhereWithAggregatesInput | CurrencyScalarWhereWithAggregatesInput[]
    id_currency?: IntWithAggregatesFilter<"Currency"> | number
    abbr?: StringWithAggregatesFilter<"Currency"> | string
    name?: StringWithAggregatesFilter<"Currency"> | string
    symbol?: StringWithAggregatesFilter<"Currency"> | string
  }

  export type FlagWhereInput = {
    AND?: FlagWhereInput | FlagWhereInput[]
    OR?: FlagWhereInput[]
    NOT?: FlagWhereInput | FlagWhereInput[]
    id_flag?: IntFilter<"Flag"> | number
    name?: StringFilter<"Flag"> | string
    type?: StringFilter<"Flag"> | string
    url?: StringFilter<"Flag"> | string
    country?: CountryListRelationFilter
  }

  export type FlagOrderByWithRelationInput = {
    id_flag?: SortOrder
    name?: SortOrder
    type?: SortOrder
    url?: SortOrder
    country?: CountryOrderByRelationAggregateInput
  }

  export type FlagWhereUniqueInput = Prisma.AtLeast<{
    id_flag?: number
    AND?: FlagWhereInput | FlagWhereInput[]
    OR?: FlagWhereInput[]
    NOT?: FlagWhereInput | FlagWhereInput[]
    name?: StringFilter<"Flag"> | string
    type?: StringFilter<"Flag"> | string
    url?: StringFilter<"Flag"> | string
    country?: CountryListRelationFilter
  }, "id_flag">

  export type FlagOrderByWithAggregationInput = {
    id_flag?: SortOrder
    name?: SortOrder
    type?: SortOrder
    url?: SortOrder
    _count?: FlagCountOrderByAggregateInput
    _avg?: FlagAvgOrderByAggregateInput
    _max?: FlagMaxOrderByAggregateInput
    _min?: FlagMinOrderByAggregateInput
    _sum?: FlagSumOrderByAggregateInput
  }

  export type FlagScalarWhereWithAggregatesInput = {
    AND?: FlagScalarWhereWithAggregatesInput | FlagScalarWhereWithAggregatesInput[]
    OR?: FlagScalarWhereWithAggregatesInput[]
    NOT?: FlagScalarWhereWithAggregatesInput | FlagScalarWhereWithAggregatesInput[]
    id_flag?: IntWithAggregatesFilter<"Flag"> | number
    name?: StringWithAggregatesFilter<"Flag"> | string
    type?: StringWithAggregatesFilter<"Flag"> | string
    url?: StringWithAggregatesFilter<"Flag"> | string
  }

  export type Coat_Of_ArmWhereInput = {
    AND?: Coat_Of_ArmWhereInput | Coat_Of_ArmWhereInput[]
    OR?: Coat_Of_ArmWhereInput[]
    NOT?: Coat_Of_ArmWhereInput | Coat_Of_ArmWhereInput[]
    id_coat_of_arm?: IntFilter<"Coat_Of_Arm"> | number
    name?: StringFilter<"Coat_Of_Arm"> | string
    type?: StringFilter<"Coat_Of_Arm"> | string
    url?: StringFilter<"Coat_Of_Arm"> | string
    country?: CountryListRelationFilter
  }

  export type Coat_Of_ArmOrderByWithRelationInput = {
    id_coat_of_arm?: SortOrder
    name?: SortOrder
    type?: SortOrder
    url?: SortOrder
    country?: CountryOrderByRelationAggregateInput
  }

  export type Coat_Of_ArmWhereUniqueInput = Prisma.AtLeast<{
    id_coat_of_arm?: number
    AND?: Coat_Of_ArmWhereInput | Coat_Of_ArmWhereInput[]
    OR?: Coat_Of_ArmWhereInput[]
    NOT?: Coat_Of_ArmWhereInput | Coat_Of_ArmWhereInput[]
    name?: StringFilter<"Coat_Of_Arm"> | string
    type?: StringFilter<"Coat_Of_Arm"> | string
    url?: StringFilter<"Coat_Of_Arm"> | string
    country?: CountryListRelationFilter
  }, "id_coat_of_arm">

  export type Coat_Of_ArmOrderByWithAggregationInput = {
    id_coat_of_arm?: SortOrder
    name?: SortOrder
    type?: SortOrder
    url?: SortOrder
    _count?: Coat_Of_ArmCountOrderByAggregateInput
    _avg?: Coat_Of_ArmAvgOrderByAggregateInput
    _max?: Coat_Of_ArmMaxOrderByAggregateInput
    _min?: Coat_Of_ArmMinOrderByAggregateInput
    _sum?: Coat_Of_ArmSumOrderByAggregateInput
  }

  export type Coat_Of_ArmScalarWhereWithAggregatesInput = {
    AND?: Coat_Of_ArmScalarWhereWithAggregatesInput | Coat_Of_ArmScalarWhereWithAggregatesInput[]
    OR?: Coat_Of_ArmScalarWhereWithAggregatesInput[]
    NOT?: Coat_Of_ArmScalarWhereWithAggregatesInput | Coat_Of_ArmScalarWhereWithAggregatesInput[]
    id_coat_of_arm?: IntWithAggregatesFilter<"Coat_Of_Arm"> | number
    name?: StringWithAggregatesFilter<"Coat_Of_Arm"> | string
    type?: StringWithAggregatesFilter<"Coat_Of_Arm"> | string
    url?: StringWithAggregatesFilter<"Coat_Of_Arm"> | string
  }

  export type CountryWhereInput = {
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    id_country?: IntFilter<"Country"> | number
    name?: StringFilter<"Country"> | string
    official_name?: StringFilter<"Country"> | string
    abbr?: StringFilter<"Country"> | string
    internet_tld?: StringFilter<"Country"> | string
    motto?: StringNullableFilter<"Country"> | string | null
    anthem?: StringNullableFilter<"Country"> | string | null
    capital?: StringFilter<"Country"> | string
    official_language?: StringFilter<"Country"> | string
    population?: IntFilter<"Country"> | number
    iso_3166_1_alpha_2?: StringNullableFilter<"Country"> | string | null
    iso_3166_1_alpha_3?: StringNullableFilter<"Country"> | string | null
    calling_code?: StringNullableFilter<"Country"> | string | null
    timezone?: StringNullableFilter<"Country"> | string | null
    id_coat_of_arm?: IntNullableFilter<"Country"> | number | null
    id_flag?: IntNullableFilter<"Country"> | number | null
    id_currency?: IntNullableFilter<"Country"> | number | null
    id_date_format?: IntNullableFilter<"Country"> | number | null
    id_region?: IntNullableFilter<"Country"> | number | null
    id_sub_region?: IntNullableFilter<"Country"> | number | null
    coat_of_arm?: XOR<Coat_Of_ArmNullableRelationFilter, Coat_Of_ArmWhereInput> | null
    flag?: XOR<FlagNullableRelationFilter, FlagWhereInput> | null
    currency?: XOR<CurrencyNullableRelationFilter, CurrencyWhereInput> | null
    date_format?: XOR<Date_FormatNullableRelationFilter, Date_FormatWhereInput> | null
    region?: XOR<RegionNullableRelationFilter, RegionWhereInput> | null
    sub_region?: XOR<Sub_RegionNullableRelationFilter, Sub_RegionWhereInput> | null
  }

  export type CountryOrderByWithRelationInput = {
    id_country?: SortOrder
    name?: SortOrder
    official_name?: SortOrder
    abbr?: SortOrder
    internet_tld?: SortOrder
    motto?: SortOrderInput | SortOrder
    anthem?: SortOrderInput | SortOrder
    capital?: SortOrder
    official_language?: SortOrder
    population?: SortOrder
    iso_3166_1_alpha_2?: SortOrderInput | SortOrder
    iso_3166_1_alpha_3?: SortOrderInput | SortOrder
    calling_code?: SortOrderInput | SortOrder
    timezone?: SortOrderInput | SortOrder
    id_coat_of_arm?: SortOrderInput | SortOrder
    id_flag?: SortOrderInput | SortOrder
    id_currency?: SortOrderInput | SortOrder
    id_date_format?: SortOrderInput | SortOrder
    id_region?: SortOrderInput | SortOrder
    id_sub_region?: SortOrderInput | SortOrder
    coat_of_arm?: Coat_Of_ArmOrderByWithRelationInput
    flag?: FlagOrderByWithRelationInput
    currency?: CurrencyOrderByWithRelationInput
    date_format?: Date_FormatOrderByWithRelationInput
    region?: RegionOrderByWithRelationInput
    sub_region?: Sub_RegionOrderByWithRelationInput
  }

  export type CountryWhereUniqueInput = Prisma.AtLeast<{
    id_country?: number
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    name?: StringFilter<"Country"> | string
    official_name?: StringFilter<"Country"> | string
    abbr?: StringFilter<"Country"> | string
    internet_tld?: StringFilter<"Country"> | string
    motto?: StringNullableFilter<"Country"> | string | null
    anthem?: StringNullableFilter<"Country"> | string | null
    capital?: StringFilter<"Country"> | string
    official_language?: StringFilter<"Country"> | string
    population?: IntFilter<"Country"> | number
    iso_3166_1_alpha_2?: StringNullableFilter<"Country"> | string | null
    iso_3166_1_alpha_3?: StringNullableFilter<"Country"> | string | null
    calling_code?: StringNullableFilter<"Country"> | string | null
    timezone?: StringNullableFilter<"Country"> | string | null
    id_coat_of_arm?: IntNullableFilter<"Country"> | number | null
    id_flag?: IntNullableFilter<"Country"> | number | null
    id_currency?: IntNullableFilter<"Country"> | number | null
    id_date_format?: IntNullableFilter<"Country"> | number | null
    id_region?: IntNullableFilter<"Country"> | number | null
    id_sub_region?: IntNullableFilter<"Country"> | number | null
    coat_of_arm?: XOR<Coat_Of_ArmNullableRelationFilter, Coat_Of_ArmWhereInput> | null
    flag?: XOR<FlagNullableRelationFilter, FlagWhereInput> | null
    currency?: XOR<CurrencyNullableRelationFilter, CurrencyWhereInput> | null
    date_format?: XOR<Date_FormatNullableRelationFilter, Date_FormatWhereInput> | null
    region?: XOR<RegionNullableRelationFilter, RegionWhereInput> | null
    sub_region?: XOR<Sub_RegionNullableRelationFilter, Sub_RegionWhereInput> | null
  }, "id_country">

  export type CountryOrderByWithAggregationInput = {
    id_country?: SortOrder
    name?: SortOrder
    official_name?: SortOrder
    abbr?: SortOrder
    internet_tld?: SortOrder
    motto?: SortOrderInput | SortOrder
    anthem?: SortOrderInput | SortOrder
    capital?: SortOrder
    official_language?: SortOrder
    population?: SortOrder
    iso_3166_1_alpha_2?: SortOrderInput | SortOrder
    iso_3166_1_alpha_3?: SortOrderInput | SortOrder
    calling_code?: SortOrderInput | SortOrder
    timezone?: SortOrderInput | SortOrder
    id_coat_of_arm?: SortOrderInput | SortOrder
    id_flag?: SortOrderInput | SortOrder
    id_currency?: SortOrderInput | SortOrder
    id_date_format?: SortOrderInput | SortOrder
    id_region?: SortOrderInput | SortOrder
    id_sub_region?: SortOrderInput | SortOrder
    _count?: CountryCountOrderByAggregateInput
    _avg?: CountryAvgOrderByAggregateInput
    _max?: CountryMaxOrderByAggregateInput
    _min?: CountryMinOrderByAggregateInput
    _sum?: CountrySumOrderByAggregateInput
  }

  export type CountryScalarWhereWithAggregatesInput = {
    AND?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    OR?: CountryScalarWhereWithAggregatesInput[]
    NOT?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    id_country?: IntWithAggregatesFilter<"Country"> | number
    name?: StringWithAggregatesFilter<"Country"> | string
    official_name?: StringWithAggregatesFilter<"Country"> | string
    abbr?: StringWithAggregatesFilter<"Country"> | string
    internet_tld?: StringWithAggregatesFilter<"Country"> | string
    motto?: StringNullableWithAggregatesFilter<"Country"> | string | null
    anthem?: StringNullableWithAggregatesFilter<"Country"> | string | null
    capital?: StringWithAggregatesFilter<"Country"> | string
    official_language?: StringWithAggregatesFilter<"Country"> | string
    population?: IntWithAggregatesFilter<"Country"> | number
    iso_3166_1_alpha_2?: StringNullableWithAggregatesFilter<"Country"> | string | null
    iso_3166_1_alpha_3?: StringNullableWithAggregatesFilter<"Country"> | string | null
    calling_code?: StringNullableWithAggregatesFilter<"Country"> | string | null
    timezone?: StringNullableWithAggregatesFilter<"Country"> | string | null
    id_coat_of_arm?: IntNullableWithAggregatesFilter<"Country"> | number | null
    id_flag?: IntNullableWithAggregatesFilter<"Country"> | number | null
    id_currency?: IntNullableWithAggregatesFilter<"Country"> | number | null
    id_date_format?: IntNullableWithAggregatesFilter<"Country"> | number | null
    id_region?: IntNullableWithAggregatesFilter<"Country"> | number | null
    id_sub_region?: IntNullableWithAggregatesFilter<"Country"> | number | null
  }

  export type UserCreateInput = {
    name: string
    email: string
    password?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id_user?: number
    name: string
    email: string
    password?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id_user?: number
    name: string
    email: string
    password?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegionCreateInput = {
    name: string
    sub_region?: Sub_RegionCreateNestedManyWithoutRegionInput
    country?: CountryCreateNestedManyWithoutRegionInput
  }

  export type RegionUncheckedCreateInput = {
    id_region?: number
    name: string
    sub_region?: Sub_RegionUncheckedCreateNestedManyWithoutRegionInput
    country?: CountryUncheckedCreateNestedManyWithoutRegionInput
  }

  export type RegionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    sub_region?: Sub_RegionUpdateManyWithoutRegionNestedInput
    country?: CountryUpdateManyWithoutRegionNestedInput
  }

  export type RegionUncheckedUpdateInput = {
    id_region?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sub_region?: Sub_RegionUncheckedUpdateManyWithoutRegionNestedInput
    country?: CountryUncheckedUpdateManyWithoutRegionNestedInput
  }

  export type RegionCreateManyInput = {
    id_region?: number
    name: string
  }

  export type RegionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RegionUncheckedUpdateManyInput = {
    id_region?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Sub_RegionCreateInput = {
    name: string
    region: RegionCreateNestedOneWithoutSub_regionInput
    country?: CountryCreateNestedManyWithoutSub_regionInput
  }

  export type Sub_RegionUncheckedCreateInput = {
    id_sub_region?: number
    name: string
    id_region: number
    country?: CountryUncheckedCreateNestedManyWithoutSub_regionInput
  }

  export type Sub_RegionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    region?: RegionUpdateOneRequiredWithoutSub_regionNestedInput
    country?: CountryUpdateManyWithoutSub_regionNestedInput
  }

  export type Sub_RegionUncheckedUpdateInput = {
    id_sub_region?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    id_region?: IntFieldUpdateOperationsInput | number
    country?: CountryUncheckedUpdateManyWithoutSub_regionNestedInput
  }

  export type Sub_RegionCreateManyInput = {
    id_sub_region?: number
    name: string
    id_region: number
  }

  export type Sub_RegionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type Sub_RegionUncheckedUpdateManyInput = {
    id_sub_region?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    id_region?: IntFieldUpdateOperationsInput | number
  }

  export type Date_FormatCreateInput = {
    format: string
    country?: CountryCreateNestedManyWithoutDate_formatInput
  }

  export type Date_FormatUncheckedCreateInput = {
    id_date_format?: number
    format: string
    country?: CountryUncheckedCreateNestedManyWithoutDate_formatInput
  }

  export type Date_FormatUpdateInput = {
    format?: StringFieldUpdateOperationsInput | string
    country?: CountryUpdateManyWithoutDate_formatNestedInput
  }

  export type Date_FormatUncheckedUpdateInput = {
    id_date_format?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
    country?: CountryUncheckedUpdateManyWithoutDate_formatNestedInput
  }

  export type Date_FormatCreateManyInput = {
    id_date_format?: number
    format: string
  }

  export type Date_FormatUpdateManyMutationInput = {
    format?: StringFieldUpdateOperationsInput | string
  }

  export type Date_FormatUncheckedUpdateManyInput = {
    id_date_format?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
  }

  export type CurrencyCreateInput = {
    abbr: string
    name: string
    symbol: string
    country?: CountryCreateNestedManyWithoutCurrencyInput
  }

  export type CurrencyUncheckedCreateInput = {
    id_currency?: number
    abbr: string
    name: string
    symbol: string
    country?: CountryUncheckedCreateNestedManyWithoutCurrencyInput
  }

  export type CurrencyUpdateInput = {
    abbr?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    country?: CountryUpdateManyWithoutCurrencyNestedInput
  }

  export type CurrencyUncheckedUpdateInput = {
    id_currency?: IntFieldUpdateOperationsInput | number
    abbr?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    country?: CountryUncheckedUpdateManyWithoutCurrencyNestedInput
  }

  export type CurrencyCreateManyInput = {
    id_currency?: number
    abbr: string
    name: string
    symbol: string
  }

  export type CurrencyUpdateManyMutationInput = {
    abbr?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
  }

  export type CurrencyUncheckedUpdateManyInput = {
    id_currency?: IntFieldUpdateOperationsInput | number
    abbr?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
  }

  export type FlagCreateInput = {
    name: string
    type: string
    url: string
    country?: CountryCreateNestedManyWithoutFlagInput
  }

  export type FlagUncheckedCreateInput = {
    id_flag?: number
    name: string
    type: string
    url: string
    country?: CountryUncheckedCreateNestedManyWithoutFlagInput
  }

  export type FlagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    country?: CountryUpdateManyWithoutFlagNestedInput
  }

  export type FlagUncheckedUpdateInput = {
    id_flag?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    country?: CountryUncheckedUpdateManyWithoutFlagNestedInput
  }

  export type FlagCreateManyInput = {
    id_flag?: number
    name: string
    type: string
    url: string
  }

  export type FlagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type FlagUncheckedUpdateManyInput = {
    id_flag?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type Coat_Of_ArmCreateInput = {
    name: string
    type: string
    url: string
    country?: CountryCreateNestedManyWithoutCoat_of_armInput
  }

  export type Coat_Of_ArmUncheckedCreateInput = {
    id_coat_of_arm?: number
    name: string
    type: string
    url: string
    country?: CountryUncheckedCreateNestedManyWithoutCoat_of_armInput
  }

  export type Coat_Of_ArmUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    country?: CountryUpdateManyWithoutCoat_of_armNestedInput
  }

  export type Coat_Of_ArmUncheckedUpdateInput = {
    id_coat_of_arm?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    country?: CountryUncheckedUpdateManyWithoutCoat_of_armNestedInput
  }

  export type Coat_Of_ArmCreateManyInput = {
    id_coat_of_arm?: number
    name: string
    type: string
    url: string
  }

  export type Coat_Of_ArmUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type Coat_Of_ArmUncheckedUpdateManyInput = {
    id_coat_of_arm?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type CountryCreateInput = {
    name: string
    official_name: string
    abbr: string
    internet_tld: string
    motto?: string | null
    anthem?: string | null
    capital: string
    official_language: string
    population: number
    iso_3166_1_alpha_2?: string | null
    iso_3166_1_alpha_3?: string | null
    calling_code?: string | null
    timezone?: string | null
    coat_of_arm?: Coat_Of_ArmCreateNestedOneWithoutCountryInput
    flag?: FlagCreateNestedOneWithoutCountryInput
    currency?: CurrencyCreateNestedOneWithoutCountryInput
    date_format?: Date_FormatCreateNestedOneWithoutCountryInput
    region?: RegionCreateNestedOneWithoutCountryInput
    sub_region?: Sub_RegionCreateNestedOneWithoutCountryInput
  }

  export type CountryUncheckedCreateInput = {
    id_country?: number
    name: string
    official_name: string
    abbr: string
    internet_tld: string
    motto?: string | null
    anthem?: string | null
    capital: string
    official_language: string
    population: number
    iso_3166_1_alpha_2?: string | null
    iso_3166_1_alpha_3?: string | null
    calling_code?: string | null
    timezone?: string | null
    id_coat_of_arm?: number | null
    id_flag?: number | null
    id_currency?: number | null
    id_date_format?: number | null
    id_region?: number | null
    id_sub_region?: number | null
  }

  export type CountryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    official_name?: StringFieldUpdateOperationsInput | string
    abbr?: StringFieldUpdateOperationsInput | string
    internet_tld?: StringFieldUpdateOperationsInput | string
    motto?: NullableStringFieldUpdateOperationsInput | string | null
    anthem?: NullableStringFieldUpdateOperationsInput | string | null
    capital?: StringFieldUpdateOperationsInput | string
    official_language?: StringFieldUpdateOperationsInput | string
    population?: IntFieldUpdateOperationsInput | number
    iso_3166_1_alpha_2?: NullableStringFieldUpdateOperationsInput | string | null
    iso_3166_1_alpha_3?: NullableStringFieldUpdateOperationsInput | string | null
    calling_code?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    coat_of_arm?: Coat_Of_ArmUpdateOneWithoutCountryNestedInput
    flag?: FlagUpdateOneWithoutCountryNestedInput
    currency?: CurrencyUpdateOneWithoutCountryNestedInput
    date_format?: Date_FormatUpdateOneWithoutCountryNestedInput
    region?: RegionUpdateOneWithoutCountryNestedInput
    sub_region?: Sub_RegionUpdateOneWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateInput = {
    id_country?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    official_name?: StringFieldUpdateOperationsInput | string
    abbr?: StringFieldUpdateOperationsInput | string
    internet_tld?: StringFieldUpdateOperationsInput | string
    motto?: NullableStringFieldUpdateOperationsInput | string | null
    anthem?: NullableStringFieldUpdateOperationsInput | string | null
    capital?: StringFieldUpdateOperationsInput | string
    official_language?: StringFieldUpdateOperationsInput | string
    population?: IntFieldUpdateOperationsInput | number
    iso_3166_1_alpha_2?: NullableStringFieldUpdateOperationsInput | string | null
    iso_3166_1_alpha_3?: NullableStringFieldUpdateOperationsInput | string | null
    calling_code?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    id_coat_of_arm?: NullableIntFieldUpdateOperationsInput | number | null
    id_flag?: NullableIntFieldUpdateOperationsInput | number | null
    id_currency?: NullableIntFieldUpdateOperationsInput | number | null
    id_date_format?: NullableIntFieldUpdateOperationsInput | number | null
    id_region?: NullableIntFieldUpdateOperationsInput | number | null
    id_sub_region?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CountryCreateManyInput = {
    id_country?: number
    name: string
    official_name: string
    abbr: string
    internet_tld: string
    motto?: string | null
    anthem?: string | null
    capital: string
    official_language: string
    population: number
    iso_3166_1_alpha_2?: string | null
    iso_3166_1_alpha_3?: string | null
    calling_code?: string | null
    timezone?: string | null
    id_coat_of_arm?: number | null
    id_flag?: number | null
    id_currency?: number | null
    id_date_format?: number | null
    id_region?: number | null
    id_sub_region?: number | null
  }

  export type CountryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    official_name?: StringFieldUpdateOperationsInput | string
    abbr?: StringFieldUpdateOperationsInput | string
    internet_tld?: StringFieldUpdateOperationsInput | string
    motto?: NullableStringFieldUpdateOperationsInput | string | null
    anthem?: NullableStringFieldUpdateOperationsInput | string | null
    capital?: StringFieldUpdateOperationsInput | string
    official_language?: StringFieldUpdateOperationsInput | string
    population?: IntFieldUpdateOperationsInput | number
    iso_3166_1_alpha_2?: NullableStringFieldUpdateOperationsInput | string | null
    iso_3166_1_alpha_3?: NullableStringFieldUpdateOperationsInput | string | null
    calling_code?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CountryUncheckedUpdateManyInput = {
    id_country?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    official_name?: StringFieldUpdateOperationsInput | string
    abbr?: StringFieldUpdateOperationsInput | string
    internet_tld?: StringFieldUpdateOperationsInput | string
    motto?: NullableStringFieldUpdateOperationsInput | string | null
    anthem?: NullableStringFieldUpdateOperationsInput | string | null
    capital?: StringFieldUpdateOperationsInput | string
    official_language?: StringFieldUpdateOperationsInput | string
    population?: IntFieldUpdateOperationsInput | number
    iso_3166_1_alpha_2?: NullableStringFieldUpdateOperationsInput | string | null
    iso_3166_1_alpha_3?: NullableStringFieldUpdateOperationsInput | string | null
    calling_code?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    id_coat_of_arm?: NullableIntFieldUpdateOperationsInput | number | null
    id_flag?: NullableIntFieldUpdateOperationsInput | number | null
    id_currency?: NullableIntFieldUpdateOperationsInput | number | null
    id_date_format?: NullableIntFieldUpdateOperationsInput | number | null
    id_region?: NullableIntFieldUpdateOperationsInput | number | null
    id_sub_region?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id_user?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id_user?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id_user?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id_user?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id_user?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Sub_RegionListRelationFilter = {
    every?: Sub_RegionWhereInput
    some?: Sub_RegionWhereInput
    none?: Sub_RegionWhereInput
  }

  export type CountryListRelationFilter = {
    every?: CountryWhereInput
    some?: CountryWhereInput
    none?: CountryWhereInput
  }

  export type Sub_RegionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegionCountOrderByAggregateInput = {
    id_region?: SortOrder
    name?: SortOrder
  }

  export type RegionAvgOrderByAggregateInput = {
    id_region?: SortOrder
  }

  export type RegionMaxOrderByAggregateInput = {
    id_region?: SortOrder
    name?: SortOrder
  }

  export type RegionMinOrderByAggregateInput = {
    id_region?: SortOrder
    name?: SortOrder
  }

  export type RegionSumOrderByAggregateInput = {
    id_region?: SortOrder
  }

  export type RegionRelationFilter = {
    is?: RegionWhereInput
    isNot?: RegionWhereInput
  }

  export type Sub_RegionCountOrderByAggregateInput = {
    id_sub_region?: SortOrder
    name?: SortOrder
    id_region?: SortOrder
  }

  export type Sub_RegionAvgOrderByAggregateInput = {
    id_sub_region?: SortOrder
    id_region?: SortOrder
  }

  export type Sub_RegionMaxOrderByAggregateInput = {
    id_sub_region?: SortOrder
    name?: SortOrder
    id_region?: SortOrder
  }

  export type Sub_RegionMinOrderByAggregateInput = {
    id_sub_region?: SortOrder
    name?: SortOrder
    id_region?: SortOrder
  }

  export type Sub_RegionSumOrderByAggregateInput = {
    id_sub_region?: SortOrder
    id_region?: SortOrder
  }

  export type Date_FormatCountOrderByAggregateInput = {
    id_date_format?: SortOrder
    format?: SortOrder
  }

  export type Date_FormatAvgOrderByAggregateInput = {
    id_date_format?: SortOrder
  }

  export type Date_FormatMaxOrderByAggregateInput = {
    id_date_format?: SortOrder
    format?: SortOrder
  }

  export type Date_FormatMinOrderByAggregateInput = {
    id_date_format?: SortOrder
    format?: SortOrder
  }

  export type Date_FormatSumOrderByAggregateInput = {
    id_date_format?: SortOrder
  }

  export type CurrencyCountOrderByAggregateInput = {
    id_currency?: SortOrder
    abbr?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
  }

  export type CurrencyAvgOrderByAggregateInput = {
    id_currency?: SortOrder
  }

  export type CurrencyMaxOrderByAggregateInput = {
    id_currency?: SortOrder
    abbr?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
  }

  export type CurrencyMinOrderByAggregateInput = {
    id_currency?: SortOrder
    abbr?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
  }

  export type CurrencySumOrderByAggregateInput = {
    id_currency?: SortOrder
  }

  export type FlagCountOrderByAggregateInput = {
    id_flag?: SortOrder
    name?: SortOrder
    type?: SortOrder
    url?: SortOrder
  }

  export type FlagAvgOrderByAggregateInput = {
    id_flag?: SortOrder
  }

  export type FlagMaxOrderByAggregateInput = {
    id_flag?: SortOrder
    name?: SortOrder
    type?: SortOrder
    url?: SortOrder
  }

  export type FlagMinOrderByAggregateInput = {
    id_flag?: SortOrder
    name?: SortOrder
    type?: SortOrder
    url?: SortOrder
  }

  export type FlagSumOrderByAggregateInput = {
    id_flag?: SortOrder
  }

  export type Coat_Of_ArmCountOrderByAggregateInput = {
    id_coat_of_arm?: SortOrder
    name?: SortOrder
    type?: SortOrder
    url?: SortOrder
  }

  export type Coat_Of_ArmAvgOrderByAggregateInput = {
    id_coat_of_arm?: SortOrder
  }

  export type Coat_Of_ArmMaxOrderByAggregateInput = {
    id_coat_of_arm?: SortOrder
    name?: SortOrder
    type?: SortOrder
    url?: SortOrder
  }

  export type Coat_Of_ArmMinOrderByAggregateInput = {
    id_coat_of_arm?: SortOrder
    name?: SortOrder
    type?: SortOrder
    url?: SortOrder
  }

  export type Coat_Of_ArmSumOrderByAggregateInput = {
    id_coat_of_arm?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Coat_Of_ArmNullableRelationFilter = {
    is?: Coat_Of_ArmWhereInput | null
    isNot?: Coat_Of_ArmWhereInput | null
  }

  export type FlagNullableRelationFilter = {
    is?: FlagWhereInput | null
    isNot?: FlagWhereInput | null
  }

  export type CurrencyNullableRelationFilter = {
    is?: CurrencyWhereInput | null
    isNot?: CurrencyWhereInput | null
  }

  export type Date_FormatNullableRelationFilter = {
    is?: Date_FormatWhereInput | null
    isNot?: Date_FormatWhereInput | null
  }

  export type RegionNullableRelationFilter = {
    is?: RegionWhereInput | null
    isNot?: RegionWhereInput | null
  }

  export type Sub_RegionNullableRelationFilter = {
    is?: Sub_RegionWhereInput | null
    isNot?: Sub_RegionWhereInput | null
  }

  export type CountryCountOrderByAggregateInput = {
    id_country?: SortOrder
    name?: SortOrder
    official_name?: SortOrder
    abbr?: SortOrder
    internet_tld?: SortOrder
    motto?: SortOrder
    anthem?: SortOrder
    capital?: SortOrder
    official_language?: SortOrder
    population?: SortOrder
    iso_3166_1_alpha_2?: SortOrder
    iso_3166_1_alpha_3?: SortOrder
    calling_code?: SortOrder
    timezone?: SortOrder
    id_coat_of_arm?: SortOrder
    id_flag?: SortOrder
    id_currency?: SortOrder
    id_date_format?: SortOrder
    id_region?: SortOrder
    id_sub_region?: SortOrder
  }

  export type CountryAvgOrderByAggregateInput = {
    id_country?: SortOrder
    population?: SortOrder
    id_coat_of_arm?: SortOrder
    id_flag?: SortOrder
    id_currency?: SortOrder
    id_date_format?: SortOrder
    id_region?: SortOrder
    id_sub_region?: SortOrder
  }

  export type CountryMaxOrderByAggregateInput = {
    id_country?: SortOrder
    name?: SortOrder
    official_name?: SortOrder
    abbr?: SortOrder
    internet_tld?: SortOrder
    motto?: SortOrder
    anthem?: SortOrder
    capital?: SortOrder
    official_language?: SortOrder
    population?: SortOrder
    iso_3166_1_alpha_2?: SortOrder
    iso_3166_1_alpha_3?: SortOrder
    calling_code?: SortOrder
    timezone?: SortOrder
    id_coat_of_arm?: SortOrder
    id_flag?: SortOrder
    id_currency?: SortOrder
    id_date_format?: SortOrder
    id_region?: SortOrder
    id_sub_region?: SortOrder
  }

  export type CountryMinOrderByAggregateInput = {
    id_country?: SortOrder
    name?: SortOrder
    official_name?: SortOrder
    abbr?: SortOrder
    internet_tld?: SortOrder
    motto?: SortOrder
    anthem?: SortOrder
    capital?: SortOrder
    official_language?: SortOrder
    population?: SortOrder
    iso_3166_1_alpha_2?: SortOrder
    iso_3166_1_alpha_3?: SortOrder
    calling_code?: SortOrder
    timezone?: SortOrder
    id_coat_of_arm?: SortOrder
    id_flag?: SortOrder
    id_currency?: SortOrder
    id_date_format?: SortOrder
    id_region?: SortOrder
    id_sub_region?: SortOrder
  }

  export type CountrySumOrderByAggregateInput = {
    id_country?: SortOrder
    population?: SortOrder
    id_coat_of_arm?: SortOrder
    id_flag?: SortOrder
    id_currency?: SortOrder
    id_date_format?: SortOrder
    id_region?: SortOrder
    id_sub_region?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Sub_RegionCreateNestedManyWithoutRegionInput = {
    create?: XOR<Sub_RegionCreateWithoutRegionInput, Sub_RegionUncheckedCreateWithoutRegionInput> | Sub_RegionCreateWithoutRegionInput[] | Sub_RegionUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: Sub_RegionCreateOrConnectWithoutRegionInput | Sub_RegionCreateOrConnectWithoutRegionInput[]
    createMany?: Sub_RegionCreateManyRegionInputEnvelope
    connect?: Sub_RegionWhereUniqueInput | Sub_RegionWhereUniqueInput[]
  }

  export type CountryCreateNestedManyWithoutRegionInput = {
    create?: XOR<CountryCreateWithoutRegionInput, CountryUncheckedCreateWithoutRegionInput> | CountryCreateWithoutRegionInput[] | CountryUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutRegionInput | CountryCreateOrConnectWithoutRegionInput[]
    createMany?: CountryCreateManyRegionInputEnvelope
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
  }

  export type Sub_RegionUncheckedCreateNestedManyWithoutRegionInput = {
    create?: XOR<Sub_RegionCreateWithoutRegionInput, Sub_RegionUncheckedCreateWithoutRegionInput> | Sub_RegionCreateWithoutRegionInput[] | Sub_RegionUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: Sub_RegionCreateOrConnectWithoutRegionInput | Sub_RegionCreateOrConnectWithoutRegionInput[]
    createMany?: Sub_RegionCreateManyRegionInputEnvelope
    connect?: Sub_RegionWhereUniqueInput | Sub_RegionWhereUniqueInput[]
  }

  export type CountryUncheckedCreateNestedManyWithoutRegionInput = {
    create?: XOR<CountryCreateWithoutRegionInput, CountryUncheckedCreateWithoutRegionInput> | CountryCreateWithoutRegionInput[] | CountryUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutRegionInput | CountryCreateOrConnectWithoutRegionInput[]
    createMany?: CountryCreateManyRegionInputEnvelope
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
  }

  export type Sub_RegionUpdateManyWithoutRegionNestedInput = {
    create?: XOR<Sub_RegionCreateWithoutRegionInput, Sub_RegionUncheckedCreateWithoutRegionInput> | Sub_RegionCreateWithoutRegionInput[] | Sub_RegionUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: Sub_RegionCreateOrConnectWithoutRegionInput | Sub_RegionCreateOrConnectWithoutRegionInput[]
    upsert?: Sub_RegionUpsertWithWhereUniqueWithoutRegionInput | Sub_RegionUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: Sub_RegionCreateManyRegionInputEnvelope
    set?: Sub_RegionWhereUniqueInput | Sub_RegionWhereUniqueInput[]
    disconnect?: Sub_RegionWhereUniqueInput | Sub_RegionWhereUniqueInput[]
    delete?: Sub_RegionWhereUniqueInput | Sub_RegionWhereUniqueInput[]
    connect?: Sub_RegionWhereUniqueInput | Sub_RegionWhereUniqueInput[]
    update?: Sub_RegionUpdateWithWhereUniqueWithoutRegionInput | Sub_RegionUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: Sub_RegionUpdateManyWithWhereWithoutRegionInput | Sub_RegionUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: Sub_RegionScalarWhereInput | Sub_RegionScalarWhereInput[]
  }

  export type CountryUpdateManyWithoutRegionNestedInput = {
    create?: XOR<CountryCreateWithoutRegionInput, CountryUncheckedCreateWithoutRegionInput> | CountryCreateWithoutRegionInput[] | CountryUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutRegionInput | CountryCreateOrConnectWithoutRegionInput[]
    upsert?: CountryUpsertWithWhereUniqueWithoutRegionInput | CountryUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: CountryCreateManyRegionInputEnvelope
    set?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    disconnect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    delete?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    update?: CountryUpdateWithWhereUniqueWithoutRegionInput | CountryUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: CountryUpdateManyWithWhereWithoutRegionInput | CountryUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: CountryScalarWhereInput | CountryScalarWhereInput[]
  }

  export type Sub_RegionUncheckedUpdateManyWithoutRegionNestedInput = {
    create?: XOR<Sub_RegionCreateWithoutRegionInput, Sub_RegionUncheckedCreateWithoutRegionInput> | Sub_RegionCreateWithoutRegionInput[] | Sub_RegionUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: Sub_RegionCreateOrConnectWithoutRegionInput | Sub_RegionCreateOrConnectWithoutRegionInput[]
    upsert?: Sub_RegionUpsertWithWhereUniqueWithoutRegionInput | Sub_RegionUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: Sub_RegionCreateManyRegionInputEnvelope
    set?: Sub_RegionWhereUniqueInput | Sub_RegionWhereUniqueInput[]
    disconnect?: Sub_RegionWhereUniqueInput | Sub_RegionWhereUniqueInput[]
    delete?: Sub_RegionWhereUniqueInput | Sub_RegionWhereUniqueInput[]
    connect?: Sub_RegionWhereUniqueInput | Sub_RegionWhereUniqueInput[]
    update?: Sub_RegionUpdateWithWhereUniqueWithoutRegionInput | Sub_RegionUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: Sub_RegionUpdateManyWithWhereWithoutRegionInput | Sub_RegionUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: Sub_RegionScalarWhereInput | Sub_RegionScalarWhereInput[]
  }

  export type CountryUncheckedUpdateManyWithoutRegionNestedInput = {
    create?: XOR<CountryCreateWithoutRegionInput, CountryUncheckedCreateWithoutRegionInput> | CountryCreateWithoutRegionInput[] | CountryUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutRegionInput | CountryCreateOrConnectWithoutRegionInput[]
    upsert?: CountryUpsertWithWhereUniqueWithoutRegionInput | CountryUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: CountryCreateManyRegionInputEnvelope
    set?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    disconnect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    delete?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    update?: CountryUpdateWithWhereUniqueWithoutRegionInput | CountryUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: CountryUpdateManyWithWhereWithoutRegionInput | CountryUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: CountryScalarWhereInput | CountryScalarWhereInput[]
  }

  export type RegionCreateNestedOneWithoutSub_regionInput = {
    create?: XOR<RegionCreateWithoutSub_regionInput, RegionUncheckedCreateWithoutSub_regionInput>
    connectOrCreate?: RegionCreateOrConnectWithoutSub_regionInput
    connect?: RegionWhereUniqueInput
  }

  export type CountryCreateNestedManyWithoutSub_regionInput = {
    create?: XOR<CountryCreateWithoutSub_regionInput, CountryUncheckedCreateWithoutSub_regionInput> | CountryCreateWithoutSub_regionInput[] | CountryUncheckedCreateWithoutSub_regionInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutSub_regionInput | CountryCreateOrConnectWithoutSub_regionInput[]
    createMany?: CountryCreateManySub_regionInputEnvelope
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
  }

  export type CountryUncheckedCreateNestedManyWithoutSub_regionInput = {
    create?: XOR<CountryCreateWithoutSub_regionInput, CountryUncheckedCreateWithoutSub_regionInput> | CountryCreateWithoutSub_regionInput[] | CountryUncheckedCreateWithoutSub_regionInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutSub_regionInput | CountryCreateOrConnectWithoutSub_regionInput[]
    createMany?: CountryCreateManySub_regionInputEnvelope
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
  }

  export type RegionUpdateOneRequiredWithoutSub_regionNestedInput = {
    create?: XOR<RegionCreateWithoutSub_regionInput, RegionUncheckedCreateWithoutSub_regionInput>
    connectOrCreate?: RegionCreateOrConnectWithoutSub_regionInput
    upsert?: RegionUpsertWithoutSub_regionInput
    connect?: RegionWhereUniqueInput
    update?: XOR<XOR<RegionUpdateToOneWithWhereWithoutSub_regionInput, RegionUpdateWithoutSub_regionInput>, RegionUncheckedUpdateWithoutSub_regionInput>
  }

  export type CountryUpdateManyWithoutSub_regionNestedInput = {
    create?: XOR<CountryCreateWithoutSub_regionInput, CountryUncheckedCreateWithoutSub_regionInput> | CountryCreateWithoutSub_regionInput[] | CountryUncheckedCreateWithoutSub_regionInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutSub_regionInput | CountryCreateOrConnectWithoutSub_regionInput[]
    upsert?: CountryUpsertWithWhereUniqueWithoutSub_regionInput | CountryUpsertWithWhereUniqueWithoutSub_regionInput[]
    createMany?: CountryCreateManySub_regionInputEnvelope
    set?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    disconnect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    delete?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    update?: CountryUpdateWithWhereUniqueWithoutSub_regionInput | CountryUpdateWithWhereUniqueWithoutSub_regionInput[]
    updateMany?: CountryUpdateManyWithWhereWithoutSub_regionInput | CountryUpdateManyWithWhereWithoutSub_regionInput[]
    deleteMany?: CountryScalarWhereInput | CountryScalarWhereInput[]
  }

  export type CountryUncheckedUpdateManyWithoutSub_regionNestedInput = {
    create?: XOR<CountryCreateWithoutSub_regionInput, CountryUncheckedCreateWithoutSub_regionInput> | CountryCreateWithoutSub_regionInput[] | CountryUncheckedCreateWithoutSub_regionInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutSub_regionInput | CountryCreateOrConnectWithoutSub_regionInput[]
    upsert?: CountryUpsertWithWhereUniqueWithoutSub_regionInput | CountryUpsertWithWhereUniqueWithoutSub_regionInput[]
    createMany?: CountryCreateManySub_regionInputEnvelope
    set?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    disconnect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    delete?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    update?: CountryUpdateWithWhereUniqueWithoutSub_regionInput | CountryUpdateWithWhereUniqueWithoutSub_regionInput[]
    updateMany?: CountryUpdateManyWithWhereWithoutSub_regionInput | CountryUpdateManyWithWhereWithoutSub_regionInput[]
    deleteMany?: CountryScalarWhereInput | CountryScalarWhereInput[]
  }

  export type CountryCreateNestedManyWithoutDate_formatInput = {
    create?: XOR<CountryCreateWithoutDate_formatInput, CountryUncheckedCreateWithoutDate_formatInput> | CountryCreateWithoutDate_formatInput[] | CountryUncheckedCreateWithoutDate_formatInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutDate_formatInput | CountryCreateOrConnectWithoutDate_formatInput[]
    createMany?: CountryCreateManyDate_formatInputEnvelope
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
  }

  export type CountryUncheckedCreateNestedManyWithoutDate_formatInput = {
    create?: XOR<CountryCreateWithoutDate_formatInput, CountryUncheckedCreateWithoutDate_formatInput> | CountryCreateWithoutDate_formatInput[] | CountryUncheckedCreateWithoutDate_formatInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutDate_formatInput | CountryCreateOrConnectWithoutDate_formatInput[]
    createMany?: CountryCreateManyDate_formatInputEnvelope
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
  }

  export type CountryUpdateManyWithoutDate_formatNestedInput = {
    create?: XOR<CountryCreateWithoutDate_formatInput, CountryUncheckedCreateWithoutDate_formatInput> | CountryCreateWithoutDate_formatInput[] | CountryUncheckedCreateWithoutDate_formatInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutDate_formatInput | CountryCreateOrConnectWithoutDate_formatInput[]
    upsert?: CountryUpsertWithWhereUniqueWithoutDate_formatInput | CountryUpsertWithWhereUniqueWithoutDate_formatInput[]
    createMany?: CountryCreateManyDate_formatInputEnvelope
    set?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    disconnect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    delete?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    update?: CountryUpdateWithWhereUniqueWithoutDate_formatInput | CountryUpdateWithWhereUniqueWithoutDate_formatInput[]
    updateMany?: CountryUpdateManyWithWhereWithoutDate_formatInput | CountryUpdateManyWithWhereWithoutDate_formatInput[]
    deleteMany?: CountryScalarWhereInput | CountryScalarWhereInput[]
  }

  export type CountryUncheckedUpdateManyWithoutDate_formatNestedInput = {
    create?: XOR<CountryCreateWithoutDate_formatInput, CountryUncheckedCreateWithoutDate_formatInput> | CountryCreateWithoutDate_formatInput[] | CountryUncheckedCreateWithoutDate_formatInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutDate_formatInput | CountryCreateOrConnectWithoutDate_formatInput[]
    upsert?: CountryUpsertWithWhereUniqueWithoutDate_formatInput | CountryUpsertWithWhereUniqueWithoutDate_formatInput[]
    createMany?: CountryCreateManyDate_formatInputEnvelope
    set?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    disconnect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    delete?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    update?: CountryUpdateWithWhereUniqueWithoutDate_formatInput | CountryUpdateWithWhereUniqueWithoutDate_formatInput[]
    updateMany?: CountryUpdateManyWithWhereWithoutDate_formatInput | CountryUpdateManyWithWhereWithoutDate_formatInput[]
    deleteMany?: CountryScalarWhereInput | CountryScalarWhereInput[]
  }

  export type CountryCreateNestedManyWithoutCurrencyInput = {
    create?: XOR<CountryCreateWithoutCurrencyInput, CountryUncheckedCreateWithoutCurrencyInput> | CountryCreateWithoutCurrencyInput[] | CountryUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutCurrencyInput | CountryCreateOrConnectWithoutCurrencyInput[]
    createMany?: CountryCreateManyCurrencyInputEnvelope
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
  }

  export type CountryUncheckedCreateNestedManyWithoutCurrencyInput = {
    create?: XOR<CountryCreateWithoutCurrencyInput, CountryUncheckedCreateWithoutCurrencyInput> | CountryCreateWithoutCurrencyInput[] | CountryUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutCurrencyInput | CountryCreateOrConnectWithoutCurrencyInput[]
    createMany?: CountryCreateManyCurrencyInputEnvelope
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
  }

  export type CountryUpdateManyWithoutCurrencyNestedInput = {
    create?: XOR<CountryCreateWithoutCurrencyInput, CountryUncheckedCreateWithoutCurrencyInput> | CountryCreateWithoutCurrencyInput[] | CountryUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutCurrencyInput | CountryCreateOrConnectWithoutCurrencyInput[]
    upsert?: CountryUpsertWithWhereUniqueWithoutCurrencyInput | CountryUpsertWithWhereUniqueWithoutCurrencyInput[]
    createMany?: CountryCreateManyCurrencyInputEnvelope
    set?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    disconnect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    delete?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    update?: CountryUpdateWithWhereUniqueWithoutCurrencyInput | CountryUpdateWithWhereUniqueWithoutCurrencyInput[]
    updateMany?: CountryUpdateManyWithWhereWithoutCurrencyInput | CountryUpdateManyWithWhereWithoutCurrencyInput[]
    deleteMany?: CountryScalarWhereInput | CountryScalarWhereInput[]
  }

  export type CountryUncheckedUpdateManyWithoutCurrencyNestedInput = {
    create?: XOR<CountryCreateWithoutCurrencyInput, CountryUncheckedCreateWithoutCurrencyInput> | CountryCreateWithoutCurrencyInput[] | CountryUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutCurrencyInput | CountryCreateOrConnectWithoutCurrencyInput[]
    upsert?: CountryUpsertWithWhereUniqueWithoutCurrencyInput | CountryUpsertWithWhereUniqueWithoutCurrencyInput[]
    createMany?: CountryCreateManyCurrencyInputEnvelope
    set?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    disconnect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    delete?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    update?: CountryUpdateWithWhereUniqueWithoutCurrencyInput | CountryUpdateWithWhereUniqueWithoutCurrencyInput[]
    updateMany?: CountryUpdateManyWithWhereWithoutCurrencyInput | CountryUpdateManyWithWhereWithoutCurrencyInput[]
    deleteMany?: CountryScalarWhereInput | CountryScalarWhereInput[]
  }

  export type CountryCreateNestedManyWithoutFlagInput = {
    create?: XOR<CountryCreateWithoutFlagInput, CountryUncheckedCreateWithoutFlagInput> | CountryCreateWithoutFlagInput[] | CountryUncheckedCreateWithoutFlagInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutFlagInput | CountryCreateOrConnectWithoutFlagInput[]
    createMany?: CountryCreateManyFlagInputEnvelope
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
  }

  export type CountryUncheckedCreateNestedManyWithoutFlagInput = {
    create?: XOR<CountryCreateWithoutFlagInput, CountryUncheckedCreateWithoutFlagInput> | CountryCreateWithoutFlagInput[] | CountryUncheckedCreateWithoutFlagInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutFlagInput | CountryCreateOrConnectWithoutFlagInput[]
    createMany?: CountryCreateManyFlagInputEnvelope
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
  }

  export type CountryUpdateManyWithoutFlagNestedInput = {
    create?: XOR<CountryCreateWithoutFlagInput, CountryUncheckedCreateWithoutFlagInput> | CountryCreateWithoutFlagInput[] | CountryUncheckedCreateWithoutFlagInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutFlagInput | CountryCreateOrConnectWithoutFlagInput[]
    upsert?: CountryUpsertWithWhereUniqueWithoutFlagInput | CountryUpsertWithWhereUniqueWithoutFlagInput[]
    createMany?: CountryCreateManyFlagInputEnvelope
    set?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    disconnect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    delete?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    update?: CountryUpdateWithWhereUniqueWithoutFlagInput | CountryUpdateWithWhereUniqueWithoutFlagInput[]
    updateMany?: CountryUpdateManyWithWhereWithoutFlagInput | CountryUpdateManyWithWhereWithoutFlagInput[]
    deleteMany?: CountryScalarWhereInput | CountryScalarWhereInput[]
  }

  export type CountryUncheckedUpdateManyWithoutFlagNestedInput = {
    create?: XOR<CountryCreateWithoutFlagInput, CountryUncheckedCreateWithoutFlagInput> | CountryCreateWithoutFlagInput[] | CountryUncheckedCreateWithoutFlagInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutFlagInput | CountryCreateOrConnectWithoutFlagInput[]
    upsert?: CountryUpsertWithWhereUniqueWithoutFlagInput | CountryUpsertWithWhereUniqueWithoutFlagInput[]
    createMany?: CountryCreateManyFlagInputEnvelope
    set?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    disconnect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    delete?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    update?: CountryUpdateWithWhereUniqueWithoutFlagInput | CountryUpdateWithWhereUniqueWithoutFlagInput[]
    updateMany?: CountryUpdateManyWithWhereWithoutFlagInput | CountryUpdateManyWithWhereWithoutFlagInput[]
    deleteMany?: CountryScalarWhereInput | CountryScalarWhereInput[]
  }

  export type CountryCreateNestedManyWithoutCoat_of_armInput = {
    create?: XOR<CountryCreateWithoutCoat_of_armInput, CountryUncheckedCreateWithoutCoat_of_armInput> | CountryCreateWithoutCoat_of_armInput[] | CountryUncheckedCreateWithoutCoat_of_armInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutCoat_of_armInput | CountryCreateOrConnectWithoutCoat_of_armInput[]
    createMany?: CountryCreateManyCoat_of_armInputEnvelope
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
  }

  export type CountryUncheckedCreateNestedManyWithoutCoat_of_armInput = {
    create?: XOR<CountryCreateWithoutCoat_of_armInput, CountryUncheckedCreateWithoutCoat_of_armInput> | CountryCreateWithoutCoat_of_armInput[] | CountryUncheckedCreateWithoutCoat_of_armInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutCoat_of_armInput | CountryCreateOrConnectWithoutCoat_of_armInput[]
    createMany?: CountryCreateManyCoat_of_armInputEnvelope
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
  }

  export type CountryUpdateManyWithoutCoat_of_armNestedInput = {
    create?: XOR<CountryCreateWithoutCoat_of_armInput, CountryUncheckedCreateWithoutCoat_of_armInput> | CountryCreateWithoutCoat_of_armInput[] | CountryUncheckedCreateWithoutCoat_of_armInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutCoat_of_armInput | CountryCreateOrConnectWithoutCoat_of_armInput[]
    upsert?: CountryUpsertWithWhereUniqueWithoutCoat_of_armInput | CountryUpsertWithWhereUniqueWithoutCoat_of_armInput[]
    createMany?: CountryCreateManyCoat_of_armInputEnvelope
    set?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    disconnect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    delete?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    update?: CountryUpdateWithWhereUniqueWithoutCoat_of_armInput | CountryUpdateWithWhereUniqueWithoutCoat_of_armInput[]
    updateMany?: CountryUpdateManyWithWhereWithoutCoat_of_armInput | CountryUpdateManyWithWhereWithoutCoat_of_armInput[]
    deleteMany?: CountryScalarWhereInput | CountryScalarWhereInput[]
  }

  export type CountryUncheckedUpdateManyWithoutCoat_of_armNestedInput = {
    create?: XOR<CountryCreateWithoutCoat_of_armInput, CountryUncheckedCreateWithoutCoat_of_armInput> | CountryCreateWithoutCoat_of_armInput[] | CountryUncheckedCreateWithoutCoat_of_armInput[]
    connectOrCreate?: CountryCreateOrConnectWithoutCoat_of_armInput | CountryCreateOrConnectWithoutCoat_of_armInput[]
    upsert?: CountryUpsertWithWhereUniqueWithoutCoat_of_armInput | CountryUpsertWithWhereUniqueWithoutCoat_of_armInput[]
    createMany?: CountryCreateManyCoat_of_armInputEnvelope
    set?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    disconnect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    delete?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    connect?: CountryWhereUniqueInput | CountryWhereUniqueInput[]
    update?: CountryUpdateWithWhereUniqueWithoutCoat_of_armInput | CountryUpdateWithWhereUniqueWithoutCoat_of_armInput[]
    updateMany?: CountryUpdateManyWithWhereWithoutCoat_of_armInput | CountryUpdateManyWithWhereWithoutCoat_of_armInput[]
    deleteMany?: CountryScalarWhereInput | CountryScalarWhereInput[]
  }

  export type Coat_Of_ArmCreateNestedOneWithoutCountryInput = {
    create?: XOR<Coat_Of_ArmCreateWithoutCountryInput, Coat_Of_ArmUncheckedCreateWithoutCountryInput>
    connectOrCreate?: Coat_Of_ArmCreateOrConnectWithoutCountryInput
    connect?: Coat_Of_ArmWhereUniqueInput
  }

  export type FlagCreateNestedOneWithoutCountryInput = {
    create?: XOR<FlagCreateWithoutCountryInput, FlagUncheckedCreateWithoutCountryInput>
    connectOrCreate?: FlagCreateOrConnectWithoutCountryInput
    connect?: FlagWhereUniqueInput
  }

  export type CurrencyCreateNestedOneWithoutCountryInput = {
    create?: XOR<CurrencyCreateWithoutCountryInput, CurrencyUncheckedCreateWithoutCountryInput>
    connectOrCreate?: CurrencyCreateOrConnectWithoutCountryInput
    connect?: CurrencyWhereUniqueInput
  }

  export type Date_FormatCreateNestedOneWithoutCountryInput = {
    create?: XOR<Date_FormatCreateWithoutCountryInput, Date_FormatUncheckedCreateWithoutCountryInput>
    connectOrCreate?: Date_FormatCreateOrConnectWithoutCountryInput
    connect?: Date_FormatWhereUniqueInput
  }

  export type RegionCreateNestedOneWithoutCountryInput = {
    create?: XOR<RegionCreateWithoutCountryInput, RegionUncheckedCreateWithoutCountryInput>
    connectOrCreate?: RegionCreateOrConnectWithoutCountryInput
    connect?: RegionWhereUniqueInput
  }

  export type Sub_RegionCreateNestedOneWithoutCountryInput = {
    create?: XOR<Sub_RegionCreateWithoutCountryInput, Sub_RegionUncheckedCreateWithoutCountryInput>
    connectOrCreate?: Sub_RegionCreateOrConnectWithoutCountryInput
    connect?: Sub_RegionWhereUniqueInput
  }

  export type Coat_Of_ArmUpdateOneWithoutCountryNestedInput = {
    create?: XOR<Coat_Of_ArmCreateWithoutCountryInput, Coat_Of_ArmUncheckedCreateWithoutCountryInput>
    connectOrCreate?: Coat_Of_ArmCreateOrConnectWithoutCountryInput
    upsert?: Coat_Of_ArmUpsertWithoutCountryInput
    disconnect?: Coat_Of_ArmWhereInput | boolean
    delete?: Coat_Of_ArmWhereInput | boolean
    connect?: Coat_Of_ArmWhereUniqueInput
    update?: XOR<XOR<Coat_Of_ArmUpdateToOneWithWhereWithoutCountryInput, Coat_Of_ArmUpdateWithoutCountryInput>, Coat_Of_ArmUncheckedUpdateWithoutCountryInput>
  }

  export type FlagUpdateOneWithoutCountryNestedInput = {
    create?: XOR<FlagCreateWithoutCountryInput, FlagUncheckedCreateWithoutCountryInput>
    connectOrCreate?: FlagCreateOrConnectWithoutCountryInput
    upsert?: FlagUpsertWithoutCountryInput
    disconnect?: FlagWhereInput | boolean
    delete?: FlagWhereInput | boolean
    connect?: FlagWhereUniqueInput
    update?: XOR<XOR<FlagUpdateToOneWithWhereWithoutCountryInput, FlagUpdateWithoutCountryInput>, FlagUncheckedUpdateWithoutCountryInput>
  }

  export type CurrencyUpdateOneWithoutCountryNestedInput = {
    create?: XOR<CurrencyCreateWithoutCountryInput, CurrencyUncheckedCreateWithoutCountryInput>
    connectOrCreate?: CurrencyCreateOrConnectWithoutCountryInput
    upsert?: CurrencyUpsertWithoutCountryInput
    disconnect?: CurrencyWhereInput | boolean
    delete?: CurrencyWhereInput | boolean
    connect?: CurrencyWhereUniqueInput
    update?: XOR<XOR<CurrencyUpdateToOneWithWhereWithoutCountryInput, CurrencyUpdateWithoutCountryInput>, CurrencyUncheckedUpdateWithoutCountryInput>
  }

  export type Date_FormatUpdateOneWithoutCountryNestedInput = {
    create?: XOR<Date_FormatCreateWithoutCountryInput, Date_FormatUncheckedCreateWithoutCountryInput>
    connectOrCreate?: Date_FormatCreateOrConnectWithoutCountryInput
    upsert?: Date_FormatUpsertWithoutCountryInput
    disconnect?: Date_FormatWhereInput | boolean
    delete?: Date_FormatWhereInput | boolean
    connect?: Date_FormatWhereUniqueInput
    update?: XOR<XOR<Date_FormatUpdateToOneWithWhereWithoutCountryInput, Date_FormatUpdateWithoutCountryInput>, Date_FormatUncheckedUpdateWithoutCountryInput>
  }

  export type RegionUpdateOneWithoutCountryNestedInput = {
    create?: XOR<RegionCreateWithoutCountryInput, RegionUncheckedCreateWithoutCountryInput>
    connectOrCreate?: RegionCreateOrConnectWithoutCountryInput
    upsert?: RegionUpsertWithoutCountryInput
    disconnect?: RegionWhereInput | boolean
    delete?: RegionWhereInput | boolean
    connect?: RegionWhereUniqueInput
    update?: XOR<XOR<RegionUpdateToOneWithWhereWithoutCountryInput, RegionUpdateWithoutCountryInput>, RegionUncheckedUpdateWithoutCountryInput>
  }

  export type Sub_RegionUpdateOneWithoutCountryNestedInput = {
    create?: XOR<Sub_RegionCreateWithoutCountryInput, Sub_RegionUncheckedCreateWithoutCountryInput>
    connectOrCreate?: Sub_RegionCreateOrConnectWithoutCountryInput
    upsert?: Sub_RegionUpsertWithoutCountryInput
    disconnect?: Sub_RegionWhereInput | boolean
    delete?: Sub_RegionWhereInput | boolean
    connect?: Sub_RegionWhereUniqueInput
    update?: XOR<XOR<Sub_RegionUpdateToOneWithWhereWithoutCountryInput, Sub_RegionUpdateWithoutCountryInput>, Sub_RegionUncheckedUpdateWithoutCountryInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type Sub_RegionCreateWithoutRegionInput = {
    name: string
    country?: CountryCreateNestedManyWithoutSub_regionInput
  }

  export type Sub_RegionUncheckedCreateWithoutRegionInput = {
    id_sub_region?: number
    name: string
    country?: CountryUncheckedCreateNestedManyWithoutSub_regionInput
  }

  export type Sub_RegionCreateOrConnectWithoutRegionInput = {
    where: Sub_RegionWhereUniqueInput
    create: XOR<Sub_RegionCreateWithoutRegionInput, Sub_RegionUncheckedCreateWithoutRegionInput>
  }

  export type Sub_RegionCreateManyRegionInputEnvelope = {
    data: Sub_RegionCreateManyRegionInput | Sub_RegionCreateManyRegionInput[]
    skipDuplicates?: boolean
  }

  export type CountryCreateWithoutRegionInput = {
    name: string
    official_name: string
    abbr: string
    internet_tld: string
    motto?: string | null
    anthem?: string | null
    capital: string
    official_language: string
    population: number
    iso_3166_1_alpha_2?: string | null
    iso_3166_1_alpha_3?: string | null
    calling_code?: string | null
    timezone?: string | null
    coat_of_arm?: Coat_Of_ArmCreateNestedOneWithoutCountryInput
    flag?: FlagCreateNestedOneWithoutCountryInput
    currency?: CurrencyCreateNestedOneWithoutCountryInput
    date_format?: Date_FormatCreateNestedOneWithoutCountryInput
    sub_region?: Sub_RegionCreateNestedOneWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutRegionInput = {
    id_country?: number
    name: string
    official_name: string
    abbr: string
    internet_tld: string
    motto?: string | null
    anthem?: string | null
    capital: string
    official_language: string
    population: number
    iso_3166_1_alpha_2?: string | null
    iso_3166_1_alpha_3?: string | null
    calling_code?: string | null
    timezone?: string | null
    id_coat_of_arm?: number | null
    id_flag?: number | null
    id_currency?: number | null
    id_date_format?: number | null
    id_sub_region?: number | null
  }

  export type CountryCreateOrConnectWithoutRegionInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutRegionInput, CountryUncheckedCreateWithoutRegionInput>
  }

  export type CountryCreateManyRegionInputEnvelope = {
    data: CountryCreateManyRegionInput | CountryCreateManyRegionInput[]
    skipDuplicates?: boolean
  }

  export type Sub_RegionUpsertWithWhereUniqueWithoutRegionInput = {
    where: Sub_RegionWhereUniqueInput
    update: XOR<Sub_RegionUpdateWithoutRegionInput, Sub_RegionUncheckedUpdateWithoutRegionInput>
    create: XOR<Sub_RegionCreateWithoutRegionInput, Sub_RegionUncheckedCreateWithoutRegionInput>
  }

  export type Sub_RegionUpdateWithWhereUniqueWithoutRegionInput = {
    where: Sub_RegionWhereUniqueInput
    data: XOR<Sub_RegionUpdateWithoutRegionInput, Sub_RegionUncheckedUpdateWithoutRegionInput>
  }

  export type Sub_RegionUpdateManyWithWhereWithoutRegionInput = {
    where: Sub_RegionScalarWhereInput
    data: XOR<Sub_RegionUpdateManyMutationInput, Sub_RegionUncheckedUpdateManyWithoutRegionInput>
  }

  export type Sub_RegionScalarWhereInput = {
    AND?: Sub_RegionScalarWhereInput | Sub_RegionScalarWhereInput[]
    OR?: Sub_RegionScalarWhereInput[]
    NOT?: Sub_RegionScalarWhereInput | Sub_RegionScalarWhereInput[]
    id_sub_region?: IntFilter<"Sub_Region"> | number
    name?: StringFilter<"Sub_Region"> | string
    id_region?: IntFilter<"Sub_Region"> | number
  }

  export type CountryUpsertWithWhereUniqueWithoutRegionInput = {
    where: CountryWhereUniqueInput
    update: XOR<CountryUpdateWithoutRegionInput, CountryUncheckedUpdateWithoutRegionInput>
    create: XOR<CountryCreateWithoutRegionInput, CountryUncheckedCreateWithoutRegionInput>
  }

  export type CountryUpdateWithWhereUniqueWithoutRegionInput = {
    where: CountryWhereUniqueInput
    data: XOR<CountryUpdateWithoutRegionInput, CountryUncheckedUpdateWithoutRegionInput>
  }

  export type CountryUpdateManyWithWhereWithoutRegionInput = {
    where: CountryScalarWhereInput
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyWithoutRegionInput>
  }

  export type CountryScalarWhereInput = {
    AND?: CountryScalarWhereInput | CountryScalarWhereInput[]
    OR?: CountryScalarWhereInput[]
    NOT?: CountryScalarWhereInput | CountryScalarWhereInput[]
    id_country?: IntFilter<"Country"> | number
    name?: StringFilter<"Country"> | string
    official_name?: StringFilter<"Country"> | string
    abbr?: StringFilter<"Country"> | string
    internet_tld?: StringFilter<"Country"> | string
    motto?: StringNullableFilter<"Country"> | string | null
    anthem?: StringNullableFilter<"Country"> | string | null
    capital?: StringFilter<"Country"> | string
    official_language?: StringFilter<"Country"> | string
    population?: IntFilter<"Country"> | number
    iso_3166_1_alpha_2?: StringNullableFilter<"Country"> | string | null
    iso_3166_1_alpha_3?: StringNullableFilter<"Country"> | string | null
    calling_code?: StringNullableFilter<"Country"> | string | null
    timezone?: StringNullableFilter<"Country"> | string | null
    id_coat_of_arm?: IntNullableFilter<"Country"> | number | null
    id_flag?: IntNullableFilter<"Country"> | number | null
    id_currency?: IntNullableFilter<"Country"> | number | null
    id_date_format?: IntNullableFilter<"Country"> | number | null
    id_region?: IntNullableFilter<"Country"> | number | null
    id_sub_region?: IntNullableFilter<"Country"> | number | null
  }

  export type RegionCreateWithoutSub_regionInput = {
    name: string
    country?: CountryCreateNestedManyWithoutRegionInput
  }

  export type RegionUncheckedCreateWithoutSub_regionInput = {
    id_region?: number
    name: string
    country?: CountryUncheckedCreateNestedManyWithoutRegionInput
  }

  export type RegionCreateOrConnectWithoutSub_regionInput = {
    where: RegionWhereUniqueInput
    create: XOR<RegionCreateWithoutSub_regionInput, RegionUncheckedCreateWithoutSub_regionInput>
  }

  export type CountryCreateWithoutSub_regionInput = {
    name: string
    official_name: string
    abbr: string
    internet_tld: string
    motto?: string | null
    anthem?: string | null
    capital: string
    official_language: string
    population: number
    iso_3166_1_alpha_2?: string | null
    iso_3166_1_alpha_3?: string | null
    calling_code?: string | null
    timezone?: string | null
    coat_of_arm?: Coat_Of_ArmCreateNestedOneWithoutCountryInput
    flag?: FlagCreateNestedOneWithoutCountryInput
    currency?: CurrencyCreateNestedOneWithoutCountryInput
    date_format?: Date_FormatCreateNestedOneWithoutCountryInput
    region?: RegionCreateNestedOneWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutSub_regionInput = {
    id_country?: number
    name: string
    official_name: string
    abbr: string
    internet_tld: string
    motto?: string | null
    anthem?: string | null
    capital: string
    official_language: string
    population: number
    iso_3166_1_alpha_2?: string | null
    iso_3166_1_alpha_3?: string | null
    calling_code?: string | null
    timezone?: string | null
    id_coat_of_arm?: number | null
    id_flag?: number | null
    id_currency?: number | null
    id_date_format?: number | null
    id_region?: number | null
  }

  export type CountryCreateOrConnectWithoutSub_regionInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutSub_regionInput, CountryUncheckedCreateWithoutSub_regionInput>
  }

  export type CountryCreateManySub_regionInputEnvelope = {
    data: CountryCreateManySub_regionInput | CountryCreateManySub_regionInput[]
    skipDuplicates?: boolean
  }

  export type RegionUpsertWithoutSub_regionInput = {
    update: XOR<RegionUpdateWithoutSub_regionInput, RegionUncheckedUpdateWithoutSub_regionInput>
    create: XOR<RegionCreateWithoutSub_regionInput, RegionUncheckedCreateWithoutSub_regionInput>
    where?: RegionWhereInput
  }

  export type RegionUpdateToOneWithWhereWithoutSub_regionInput = {
    where?: RegionWhereInput
    data: XOR<RegionUpdateWithoutSub_regionInput, RegionUncheckedUpdateWithoutSub_regionInput>
  }

  export type RegionUpdateWithoutSub_regionInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: CountryUpdateManyWithoutRegionNestedInput
  }

  export type RegionUncheckedUpdateWithoutSub_regionInput = {
    id_region?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country?: CountryUncheckedUpdateManyWithoutRegionNestedInput
  }

  export type CountryUpsertWithWhereUniqueWithoutSub_regionInput = {
    where: CountryWhereUniqueInput
    update: XOR<CountryUpdateWithoutSub_regionInput, CountryUncheckedUpdateWithoutSub_regionInput>
    create: XOR<CountryCreateWithoutSub_regionInput, CountryUncheckedCreateWithoutSub_regionInput>
  }

  export type CountryUpdateWithWhereUniqueWithoutSub_regionInput = {
    where: CountryWhereUniqueInput
    data: XOR<CountryUpdateWithoutSub_regionInput, CountryUncheckedUpdateWithoutSub_regionInput>
  }

  export type CountryUpdateManyWithWhereWithoutSub_regionInput = {
    where: CountryScalarWhereInput
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyWithoutSub_regionInput>
  }

  export type CountryCreateWithoutDate_formatInput = {
    name: string
    official_name: string
    abbr: string
    internet_tld: string
    motto?: string | null
    anthem?: string | null
    capital: string
    official_language: string
    population: number
    iso_3166_1_alpha_2?: string | null
    iso_3166_1_alpha_3?: string | null
    calling_code?: string | null
    timezone?: string | null
    coat_of_arm?: Coat_Of_ArmCreateNestedOneWithoutCountryInput
    flag?: FlagCreateNestedOneWithoutCountryInput
    currency?: CurrencyCreateNestedOneWithoutCountryInput
    region?: RegionCreateNestedOneWithoutCountryInput
    sub_region?: Sub_RegionCreateNestedOneWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutDate_formatInput = {
    id_country?: number
    name: string
    official_name: string
    abbr: string
    internet_tld: string
    motto?: string | null
    anthem?: string | null
    capital: string
    official_language: string
    population: number
    iso_3166_1_alpha_2?: string | null
    iso_3166_1_alpha_3?: string | null
    calling_code?: string | null
    timezone?: string | null
    id_coat_of_arm?: number | null
    id_flag?: number | null
    id_currency?: number | null
    id_region?: number | null
    id_sub_region?: number | null
  }

  export type CountryCreateOrConnectWithoutDate_formatInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutDate_formatInput, CountryUncheckedCreateWithoutDate_formatInput>
  }

  export type CountryCreateManyDate_formatInputEnvelope = {
    data: CountryCreateManyDate_formatInput | CountryCreateManyDate_formatInput[]
    skipDuplicates?: boolean
  }

  export type CountryUpsertWithWhereUniqueWithoutDate_formatInput = {
    where: CountryWhereUniqueInput
    update: XOR<CountryUpdateWithoutDate_formatInput, CountryUncheckedUpdateWithoutDate_formatInput>
    create: XOR<CountryCreateWithoutDate_formatInput, CountryUncheckedCreateWithoutDate_formatInput>
  }

  export type CountryUpdateWithWhereUniqueWithoutDate_formatInput = {
    where: CountryWhereUniqueInput
    data: XOR<CountryUpdateWithoutDate_formatInput, CountryUncheckedUpdateWithoutDate_formatInput>
  }

  export type CountryUpdateManyWithWhereWithoutDate_formatInput = {
    where: CountryScalarWhereInput
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyWithoutDate_formatInput>
  }

  export type CountryCreateWithoutCurrencyInput = {
    name: string
    official_name: string
    abbr: string
    internet_tld: string
    motto?: string | null
    anthem?: string | null
    capital: string
    official_language: string
    population: number
    iso_3166_1_alpha_2?: string | null
    iso_3166_1_alpha_3?: string | null
    calling_code?: string | null
    timezone?: string | null
    coat_of_arm?: Coat_Of_ArmCreateNestedOneWithoutCountryInput
    flag?: FlagCreateNestedOneWithoutCountryInput
    date_format?: Date_FormatCreateNestedOneWithoutCountryInput
    region?: RegionCreateNestedOneWithoutCountryInput
    sub_region?: Sub_RegionCreateNestedOneWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutCurrencyInput = {
    id_country?: number
    name: string
    official_name: string
    abbr: string
    internet_tld: string
    motto?: string | null
    anthem?: string | null
    capital: string
    official_language: string
    population: number
    iso_3166_1_alpha_2?: string | null
    iso_3166_1_alpha_3?: string | null
    calling_code?: string | null
    timezone?: string | null
    id_coat_of_arm?: number | null
    id_flag?: number | null
    id_date_format?: number | null
    id_region?: number | null
    id_sub_region?: number | null
  }

  export type CountryCreateOrConnectWithoutCurrencyInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutCurrencyInput, CountryUncheckedCreateWithoutCurrencyInput>
  }

  export type CountryCreateManyCurrencyInputEnvelope = {
    data: CountryCreateManyCurrencyInput | CountryCreateManyCurrencyInput[]
    skipDuplicates?: boolean
  }

  export type CountryUpsertWithWhereUniqueWithoutCurrencyInput = {
    where: CountryWhereUniqueInput
    update: XOR<CountryUpdateWithoutCurrencyInput, CountryUncheckedUpdateWithoutCurrencyInput>
    create: XOR<CountryCreateWithoutCurrencyInput, CountryUncheckedCreateWithoutCurrencyInput>
  }

  export type CountryUpdateWithWhereUniqueWithoutCurrencyInput = {
    where: CountryWhereUniqueInput
    data: XOR<CountryUpdateWithoutCurrencyInput, CountryUncheckedUpdateWithoutCurrencyInput>
  }

  export type CountryUpdateManyWithWhereWithoutCurrencyInput = {
    where: CountryScalarWhereInput
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyWithoutCurrencyInput>
  }

  export type CountryCreateWithoutFlagInput = {
    name: string
    official_name: string
    abbr: string
    internet_tld: string
    motto?: string | null
    anthem?: string | null
    capital: string
    official_language: string
    population: number
    iso_3166_1_alpha_2?: string | null
    iso_3166_1_alpha_3?: string | null
    calling_code?: string | null
    timezone?: string | null
    coat_of_arm?: Coat_Of_ArmCreateNestedOneWithoutCountryInput
    currency?: CurrencyCreateNestedOneWithoutCountryInput
    date_format?: Date_FormatCreateNestedOneWithoutCountryInput
    region?: RegionCreateNestedOneWithoutCountryInput
    sub_region?: Sub_RegionCreateNestedOneWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutFlagInput = {
    id_country?: number
    name: string
    official_name: string
    abbr: string
    internet_tld: string
    motto?: string | null
    anthem?: string | null
    capital: string
    official_language: string
    population: number
    iso_3166_1_alpha_2?: string | null
    iso_3166_1_alpha_3?: string | null
    calling_code?: string | null
    timezone?: string | null
    id_coat_of_arm?: number | null
    id_currency?: number | null
    id_date_format?: number | null
    id_region?: number | null
    id_sub_region?: number | null
  }

  export type CountryCreateOrConnectWithoutFlagInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutFlagInput, CountryUncheckedCreateWithoutFlagInput>
  }

  export type CountryCreateManyFlagInputEnvelope = {
    data: CountryCreateManyFlagInput | CountryCreateManyFlagInput[]
    skipDuplicates?: boolean
  }

  export type CountryUpsertWithWhereUniqueWithoutFlagInput = {
    where: CountryWhereUniqueInput
    update: XOR<CountryUpdateWithoutFlagInput, CountryUncheckedUpdateWithoutFlagInput>
    create: XOR<CountryCreateWithoutFlagInput, CountryUncheckedCreateWithoutFlagInput>
  }

  export type CountryUpdateWithWhereUniqueWithoutFlagInput = {
    where: CountryWhereUniqueInput
    data: XOR<CountryUpdateWithoutFlagInput, CountryUncheckedUpdateWithoutFlagInput>
  }

  export type CountryUpdateManyWithWhereWithoutFlagInput = {
    where: CountryScalarWhereInput
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyWithoutFlagInput>
  }

  export type CountryCreateWithoutCoat_of_armInput = {
    name: string
    official_name: string
    abbr: string
    internet_tld: string
    motto?: string | null
    anthem?: string | null
    capital: string
    official_language: string
    population: number
    iso_3166_1_alpha_2?: string | null
    iso_3166_1_alpha_3?: string | null
    calling_code?: string | null
    timezone?: string | null
    flag?: FlagCreateNestedOneWithoutCountryInput
    currency?: CurrencyCreateNestedOneWithoutCountryInput
    date_format?: Date_FormatCreateNestedOneWithoutCountryInput
    region?: RegionCreateNestedOneWithoutCountryInput
    sub_region?: Sub_RegionCreateNestedOneWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutCoat_of_armInput = {
    id_country?: number
    name: string
    official_name: string
    abbr: string
    internet_tld: string
    motto?: string | null
    anthem?: string | null
    capital: string
    official_language: string
    population: number
    iso_3166_1_alpha_2?: string | null
    iso_3166_1_alpha_3?: string | null
    calling_code?: string | null
    timezone?: string | null
    id_flag?: number | null
    id_currency?: number | null
    id_date_format?: number | null
    id_region?: number | null
    id_sub_region?: number | null
  }

  export type CountryCreateOrConnectWithoutCoat_of_armInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutCoat_of_armInput, CountryUncheckedCreateWithoutCoat_of_armInput>
  }

  export type CountryCreateManyCoat_of_armInputEnvelope = {
    data: CountryCreateManyCoat_of_armInput | CountryCreateManyCoat_of_armInput[]
    skipDuplicates?: boolean
  }

  export type CountryUpsertWithWhereUniqueWithoutCoat_of_armInput = {
    where: CountryWhereUniqueInput
    update: XOR<CountryUpdateWithoutCoat_of_armInput, CountryUncheckedUpdateWithoutCoat_of_armInput>
    create: XOR<CountryCreateWithoutCoat_of_armInput, CountryUncheckedCreateWithoutCoat_of_armInput>
  }

  export type CountryUpdateWithWhereUniqueWithoutCoat_of_armInput = {
    where: CountryWhereUniqueInput
    data: XOR<CountryUpdateWithoutCoat_of_armInput, CountryUncheckedUpdateWithoutCoat_of_armInput>
  }

  export type CountryUpdateManyWithWhereWithoutCoat_of_armInput = {
    where: CountryScalarWhereInput
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyWithoutCoat_of_armInput>
  }

  export type Coat_Of_ArmCreateWithoutCountryInput = {
    name: string
    type: string
    url: string
  }

  export type Coat_Of_ArmUncheckedCreateWithoutCountryInput = {
    id_coat_of_arm?: number
    name: string
    type: string
    url: string
  }

  export type Coat_Of_ArmCreateOrConnectWithoutCountryInput = {
    where: Coat_Of_ArmWhereUniqueInput
    create: XOR<Coat_Of_ArmCreateWithoutCountryInput, Coat_Of_ArmUncheckedCreateWithoutCountryInput>
  }

  export type FlagCreateWithoutCountryInput = {
    name: string
    type: string
    url: string
  }

  export type FlagUncheckedCreateWithoutCountryInput = {
    id_flag?: number
    name: string
    type: string
    url: string
  }

  export type FlagCreateOrConnectWithoutCountryInput = {
    where: FlagWhereUniqueInput
    create: XOR<FlagCreateWithoutCountryInput, FlagUncheckedCreateWithoutCountryInput>
  }

  export type CurrencyCreateWithoutCountryInput = {
    abbr: string
    name: string
    symbol: string
  }

  export type CurrencyUncheckedCreateWithoutCountryInput = {
    id_currency?: number
    abbr: string
    name: string
    symbol: string
  }

  export type CurrencyCreateOrConnectWithoutCountryInput = {
    where: CurrencyWhereUniqueInput
    create: XOR<CurrencyCreateWithoutCountryInput, CurrencyUncheckedCreateWithoutCountryInput>
  }

  export type Date_FormatCreateWithoutCountryInput = {
    format: string
  }

  export type Date_FormatUncheckedCreateWithoutCountryInput = {
    id_date_format?: number
    format: string
  }

  export type Date_FormatCreateOrConnectWithoutCountryInput = {
    where: Date_FormatWhereUniqueInput
    create: XOR<Date_FormatCreateWithoutCountryInput, Date_FormatUncheckedCreateWithoutCountryInput>
  }

  export type RegionCreateWithoutCountryInput = {
    name: string
    sub_region?: Sub_RegionCreateNestedManyWithoutRegionInput
  }

  export type RegionUncheckedCreateWithoutCountryInput = {
    id_region?: number
    name: string
    sub_region?: Sub_RegionUncheckedCreateNestedManyWithoutRegionInput
  }

  export type RegionCreateOrConnectWithoutCountryInput = {
    where: RegionWhereUniqueInput
    create: XOR<RegionCreateWithoutCountryInput, RegionUncheckedCreateWithoutCountryInput>
  }

  export type Sub_RegionCreateWithoutCountryInput = {
    name: string
    region: RegionCreateNestedOneWithoutSub_regionInput
  }

  export type Sub_RegionUncheckedCreateWithoutCountryInput = {
    id_sub_region?: number
    name: string
    id_region: number
  }

  export type Sub_RegionCreateOrConnectWithoutCountryInput = {
    where: Sub_RegionWhereUniqueInput
    create: XOR<Sub_RegionCreateWithoutCountryInput, Sub_RegionUncheckedCreateWithoutCountryInput>
  }

  export type Coat_Of_ArmUpsertWithoutCountryInput = {
    update: XOR<Coat_Of_ArmUpdateWithoutCountryInput, Coat_Of_ArmUncheckedUpdateWithoutCountryInput>
    create: XOR<Coat_Of_ArmCreateWithoutCountryInput, Coat_Of_ArmUncheckedCreateWithoutCountryInput>
    where?: Coat_Of_ArmWhereInput
  }

  export type Coat_Of_ArmUpdateToOneWithWhereWithoutCountryInput = {
    where?: Coat_Of_ArmWhereInput
    data: XOR<Coat_Of_ArmUpdateWithoutCountryInput, Coat_Of_ArmUncheckedUpdateWithoutCountryInput>
  }

  export type Coat_Of_ArmUpdateWithoutCountryInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type Coat_Of_ArmUncheckedUpdateWithoutCountryInput = {
    id_coat_of_arm?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type FlagUpsertWithoutCountryInput = {
    update: XOR<FlagUpdateWithoutCountryInput, FlagUncheckedUpdateWithoutCountryInput>
    create: XOR<FlagCreateWithoutCountryInput, FlagUncheckedCreateWithoutCountryInput>
    where?: FlagWhereInput
  }

  export type FlagUpdateToOneWithWhereWithoutCountryInput = {
    where?: FlagWhereInput
    data: XOR<FlagUpdateWithoutCountryInput, FlagUncheckedUpdateWithoutCountryInput>
  }

  export type FlagUpdateWithoutCountryInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type FlagUncheckedUpdateWithoutCountryInput = {
    id_flag?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type CurrencyUpsertWithoutCountryInput = {
    update: XOR<CurrencyUpdateWithoutCountryInput, CurrencyUncheckedUpdateWithoutCountryInput>
    create: XOR<CurrencyCreateWithoutCountryInput, CurrencyUncheckedCreateWithoutCountryInput>
    where?: CurrencyWhereInput
  }

  export type CurrencyUpdateToOneWithWhereWithoutCountryInput = {
    where?: CurrencyWhereInput
    data: XOR<CurrencyUpdateWithoutCountryInput, CurrencyUncheckedUpdateWithoutCountryInput>
  }

  export type CurrencyUpdateWithoutCountryInput = {
    abbr?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
  }

  export type CurrencyUncheckedUpdateWithoutCountryInput = {
    id_currency?: IntFieldUpdateOperationsInput | number
    abbr?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
  }

  export type Date_FormatUpsertWithoutCountryInput = {
    update: XOR<Date_FormatUpdateWithoutCountryInput, Date_FormatUncheckedUpdateWithoutCountryInput>
    create: XOR<Date_FormatCreateWithoutCountryInput, Date_FormatUncheckedCreateWithoutCountryInput>
    where?: Date_FormatWhereInput
  }

  export type Date_FormatUpdateToOneWithWhereWithoutCountryInput = {
    where?: Date_FormatWhereInput
    data: XOR<Date_FormatUpdateWithoutCountryInput, Date_FormatUncheckedUpdateWithoutCountryInput>
  }

  export type Date_FormatUpdateWithoutCountryInput = {
    format?: StringFieldUpdateOperationsInput | string
  }

  export type Date_FormatUncheckedUpdateWithoutCountryInput = {
    id_date_format?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
  }

  export type RegionUpsertWithoutCountryInput = {
    update: XOR<RegionUpdateWithoutCountryInput, RegionUncheckedUpdateWithoutCountryInput>
    create: XOR<RegionCreateWithoutCountryInput, RegionUncheckedCreateWithoutCountryInput>
    where?: RegionWhereInput
  }

  export type RegionUpdateToOneWithWhereWithoutCountryInput = {
    where?: RegionWhereInput
    data: XOR<RegionUpdateWithoutCountryInput, RegionUncheckedUpdateWithoutCountryInput>
  }

  export type RegionUpdateWithoutCountryInput = {
    name?: StringFieldUpdateOperationsInput | string
    sub_region?: Sub_RegionUpdateManyWithoutRegionNestedInput
  }

  export type RegionUncheckedUpdateWithoutCountryInput = {
    id_region?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sub_region?: Sub_RegionUncheckedUpdateManyWithoutRegionNestedInput
  }

  export type Sub_RegionUpsertWithoutCountryInput = {
    update: XOR<Sub_RegionUpdateWithoutCountryInput, Sub_RegionUncheckedUpdateWithoutCountryInput>
    create: XOR<Sub_RegionCreateWithoutCountryInput, Sub_RegionUncheckedCreateWithoutCountryInput>
    where?: Sub_RegionWhereInput
  }

  export type Sub_RegionUpdateToOneWithWhereWithoutCountryInput = {
    where?: Sub_RegionWhereInput
    data: XOR<Sub_RegionUpdateWithoutCountryInput, Sub_RegionUncheckedUpdateWithoutCountryInput>
  }

  export type Sub_RegionUpdateWithoutCountryInput = {
    name?: StringFieldUpdateOperationsInput | string
    region?: RegionUpdateOneRequiredWithoutSub_regionNestedInput
  }

  export type Sub_RegionUncheckedUpdateWithoutCountryInput = {
    id_sub_region?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    id_region?: IntFieldUpdateOperationsInput | number
  }

  export type Sub_RegionCreateManyRegionInput = {
    id_sub_region?: number
    name: string
  }

  export type CountryCreateManyRegionInput = {
    id_country?: number
    name: string
    official_name: string
    abbr: string
    internet_tld: string
    motto?: string | null
    anthem?: string | null
    capital: string
    official_language: string
    population: number
    iso_3166_1_alpha_2?: string | null
    iso_3166_1_alpha_3?: string | null
    calling_code?: string | null
    timezone?: string | null
    id_coat_of_arm?: number | null
    id_flag?: number | null
    id_currency?: number | null
    id_date_format?: number | null
    id_sub_region?: number | null
  }

  export type Sub_RegionUpdateWithoutRegionInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: CountryUpdateManyWithoutSub_regionNestedInput
  }

  export type Sub_RegionUncheckedUpdateWithoutRegionInput = {
    id_sub_region?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country?: CountryUncheckedUpdateManyWithoutSub_regionNestedInput
  }

  export type Sub_RegionUncheckedUpdateManyWithoutRegionInput = {
    id_sub_region?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CountryUpdateWithoutRegionInput = {
    name?: StringFieldUpdateOperationsInput | string
    official_name?: StringFieldUpdateOperationsInput | string
    abbr?: StringFieldUpdateOperationsInput | string
    internet_tld?: StringFieldUpdateOperationsInput | string
    motto?: NullableStringFieldUpdateOperationsInput | string | null
    anthem?: NullableStringFieldUpdateOperationsInput | string | null
    capital?: StringFieldUpdateOperationsInput | string
    official_language?: StringFieldUpdateOperationsInput | string
    population?: IntFieldUpdateOperationsInput | number
    iso_3166_1_alpha_2?: NullableStringFieldUpdateOperationsInput | string | null
    iso_3166_1_alpha_3?: NullableStringFieldUpdateOperationsInput | string | null
    calling_code?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    coat_of_arm?: Coat_Of_ArmUpdateOneWithoutCountryNestedInput
    flag?: FlagUpdateOneWithoutCountryNestedInput
    currency?: CurrencyUpdateOneWithoutCountryNestedInput
    date_format?: Date_FormatUpdateOneWithoutCountryNestedInput
    sub_region?: Sub_RegionUpdateOneWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutRegionInput = {
    id_country?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    official_name?: StringFieldUpdateOperationsInput | string
    abbr?: StringFieldUpdateOperationsInput | string
    internet_tld?: StringFieldUpdateOperationsInput | string
    motto?: NullableStringFieldUpdateOperationsInput | string | null
    anthem?: NullableStringFieldUpdateOperationsInput | string | null
    capital?: StringFieldUpdateOperationsInput | string
    official_language?: StringFieldUpdateOperationsInput | string
    population?: IntFieldUpdateOperationsInput | number
    iso_3166_1_alpha_2?: NullableStringFieldUpdateOperationsInput | string | null
    iso_3166_1_alpha_3?: NullableStringFieldUpdateOperationsInput | string | null
    calling_code?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    id_coat_of_arm?: NullableIntFieldUpdateOperationsInput | number | null
    id_flag?: NullableIntFieldUpdateOperationsInput | number | null
    id_currency?: NullableIntFieldUpdateOperationsInput | number | null
    id_date_format?: NullableIntFieldUpdateOperationsInput | number | null
    id_sub_region?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CountryUncheckedUpdateManyWithoutRegionInput = {
    id_country?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    official_name?: StringFieldUpdateOperationsInput | string
    abbr?: StringFieldUpdateOperationsInput | string
    internet_tld?: StringFieldUpdateOperationsInput | string
    motto?: NullableStringFieldUpdateOperationsInput | string | null
    anthem?: NullableStringFieldUpdateOperationsInput | string | null
    capital?: StringFieldUpdateOperationsInput | string
    official_language?: StringFieldUpdateOperationsInput | string
    population?: IntFieldUpdateOperationsInput | number
    iso_3166_1_alpha_2?: NullableStringFieldUpdateOperationsInput | string | null
    iso_3166_1_alpha_3?: NullableStringFieldUpdateOperationsInput | string | null
    calling_code?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    id_coat_of_arm?: NullableIntFieldUpdateOperationsInput | number | null
    id_flag?: NullableIntFieldUpdateOperationsInput | number | null
    id_currency?: NullableIntFieldUpdateOperationsInput | number | null
    id_date_format?: NullableIntFieldUpdateOperationsInput | number | null
    id_sub_region?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CountryCreateManySub_regionInput = {
    id_country?: number
    name: string
    official_name: string
    abbr: string
    internet_tld: string
    motto?: string | null
    anthem?: string | null
    capital: string
    official_language: string
    population: number
    iso_3166_1_alpha_2?: string | null
    iso_3166_1_alpha_3?: string | null
    calling_code?: string | null
    timezone?: string | null
    id_coat_of_arm?: number | null
    id_flag?: number | null
    id_currency?: number | null
    id_date_format?: number | null
    id_region?: number | null
  }

  export type CountryUpdateWithoutSub_regionInput = {
    name?: StringFieldUpdateOperationsInput | string
    official_name?: StringFieldUpdateOperationsInput | string
    abbr?: StringFieldUpdateOperationsInput | string
    internet_tld?: StringFieldUpdateOperationsInput | string
    motto?: NullableStringFieldUpdateOperationsInput | string | null
    anthem?: NullableStringFieldUpdateOperationsInput | string | null
    capital?: StringFieldUpdateOperationsInput | string
    official_language?: StringFieldUpdateOperationsInput | string
    population?: IntFieldUpdateOperationsInput | number
    iso_3166_1_alpha_2?: NullableStringFieldUpdateOperationsInput | string | null
    iso_3166_1_alpha_3?: NullableStringFieldUpdateOperationsInput | string | null
    calling_code?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    coat_of_arm?: Coat_Of_ArmUpdateOneWithoutCountryNestedInput
    flag?: FlagUpdateOneWithoutCountryNestedInput
    currency?: CurrencyUpdateOneWithoutCountryNestedInput
    date_format?: Date_FormatUpdateOneWithoutCountryNestedInput
    region?: RegionUpdateOneWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutSub_regionInput = {
    id_country?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    official_name?: StringFieldUpdateOperationsInput | string
    abbr?: StringFieldUpdateOperationsInput | string
    internet_tld?: StringFieldUpdateOperationsInput | string
    motto?: NullableStringFieldUpdateOperationsInput | string | null
    anthem?: NullableStringFieldUpdateOperationsInput | string | null
    capital?: StringFieldUpdateOperationsInput | string
    official_language?: StringFieldUpdateOperationsInput | string
    population?: IntFieldUpdateOperationsInput | number
    iso_3166_1_alpha_2?: NullableStringFieldUpdateOperationsInput | string | null
    iso_3166_1_alpha_3?: NullableStringFieldUpdateOperationsInput | string | null
    calling_code?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    id_coat_of_arm?: NullableIntFieldUpdateOperationsInput | number | null
    id_flag?: NullableIntFieldUpdateOperationsInput | number | null
    id_currency?: NullableIntFieldUpdateOperationsInput | number | null
    id_date_format?: NullableIntFieldUpdateOperationsInput | number | null
    id_region?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CountryUncheckedUpdateManyWithoutSub_regionInput = {
    id_country?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    official_name?: StringFieldUpdateOperationsInput | string
    abbr?: StringFieldUpdateOperationsInput | string
    internet_tld?: StringFieldUpdateOperationsInput | string
    motto?: NullableStringFieldUpdateOperationsInput | string | null
    anthem?: NullableStringFieldUpdateOperationsInput | string | null
    capital?: StringFieldUpdateOperationsInput | string
    official_language?: StringFieldUpdateOperationsInput | string
    population?: IntFieldUpdateOperationsInput | number
    iso_3166_1_alpha_2?: NullableStringFieldUpdateOperationsInput | string | null
    iso_3166_1_alpha_3?: NullableStringFieldUpdateOperationsInput | string | null
    calling_code?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    id_coat_of_arm?: NullableIntFieldUpdateOperationsInput | number | null
    id_flag?: NullableIntFieldUpdateOperationsInput | number | null
    id_currency?: NullableIntFieldUpdateOperationsInput | number | null
    id_date_format?: NullableIntFieldUpdateOperationsInput | number | null
    id_region?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CountryCreateManyDate_formatInput = {
    id_country?: number
    name: string
    official_name: string
    abbr: string
    internet_tld: string
    motto?: string | null
    anthem?: string | null
    capital: string
    official_language: string
    population: number
    iso_3166_1_alpha_2?: string | null
    iso_3166_1_alpha_3?: string | null
    calling_code?: string | null
    timezone?: string | null
    id_coat_of_arm?: number | null
    id_flag?: number | null
    id_currency?: number | null
    id_region?: number | null
    id_sub_region?: number | null
  }

  export type CountryUpdateWithoutDate_formatInput = {
    name?: StringFieldUpdateOperationsInput | string
    official_name?: StringFieldUpdateOperationsInput | string
    abbr?: StringFieldUpdateOperationsInput | string
    internet_tld?: StringFieldUpdateOperationsInput | string
    motto?: NullableStringFieldUpdateOperationsInput | string | null
    anthem?: NullableStringFieldUpdateOperationsInput | string | null
    capital?: StringFieldUpdateOperationsInput | string
    official_language?: StringFieldUpdateOperationsInput | string
    population?: IntFieldUpdateOperationsInput | number
    iso_3166_1_alpha_2?: NullableStringFieldUpdateOperationsInput | string | null
    iso_3166_1_alpha_3?: NullableStringFieldUpdateOperationsInput | string | null
    calling_code?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    coat_of_arm?: Coat_Of_ArmUpdateOneWithoutCountryNestedInput
    flag?: FlagUpdateOneWithoutCountryNestedInput
    currency?: CurrencyUpdateOneWithoutCountryNestedInput
    region?: RegionUpdateOneWithoutCountryNestedInput
    sub_region?: Sub_RegionUpdateOneWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutDate_formatInput = {
    id_country?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    official_name?: StringFieldUpdateOperationsInput | string
    abbr?: StringFieldUpdateOperationsInput | string
    internet_tld?: StringFieldUpdateOperationsInput | string
    motto?: NullableStringFieldUpdateOperationsInput | string | null
    anthem?: NullableStringFieldUpdateOperationsInput | string | null
    capital?: StringFieldUpdateOperationsInput | string
    official_language?: StringFieldUpdateOperationsInput | string
    population?: IntFieldUpdateOperationsInput | number
    iso_3166_1_alpha_2?: NullableStringFieldUpdateOperationsInput | string | null
    iso_3166_1_alpha_3?: NullableStringFieldUpdateOperationsInput | string | null
    calling_code?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    id_coat_of_arm?: NullableIntFieldUpdateOperationsInput | number | null
    id_flag?: NullableIntFieldUpdateOperationsInput | number | null
    id_currency?: NullableIntFieldUpdateOperationsInput | number | null
    id_region?: NullableIntFieldUpdateOperationsInput | number | null
    id_sub_region?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CountryUncheckedUpdateManyWithoutDate_formatInput = {
    id_country?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    official_name?: StringFieldUpdateOperationsInput | string
    abbr?: StringFieldUpdateOperationsInput | string
    internet_tld?: StringFieldUpdateOperationsInput | string
    motto?: NullableStringFieldUpdateOperationsInput | string | null
    anthem?: NullableStringFieldUpdateOperationsInput | string | null
    capital?: StringFieldUpdateOperationsInput | string
    official_language?: StringFieldUpdateOperationsInput | string
    population?: IntFieldUpdateOperationsInput | number
    iso_3166_1_alpha_2?: NullableStringFieldUpdateOperationsInput | string | null
    iso_3166_1_alpha_3?: NullableStringFieldUpdateOperationsInput | string | null
    calling_code?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    id_coat_of_arm?: NullableIntFieldUpdateOperationsInput | number | null
    id_flag?: NullableIntFieldUpdateOperationsInput | number | null
    id_currency?: NullableIntFieldUpdateOperationsInput | number | null
    id_region?: NullableIntFieldUpdateOperationsInput | number | null
    id_sub_region?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CountryCreateManyCurrencyInput = {
    id_country?: number
    name: string
    official_name: string
    abbr: string
    internet_tld: string
    motto?: string | null
    anthem?: string | null
    capital: string
    official_language: string
    population: number
    iso_3166_1_alpha_2?: string | null
    iso_3166_1_alpha_3?: string | null
    calling_code?: string | null
    timezone?: string | null
    id_coat_of_arm?: number | null
    id_flag?: number | null
    id_date_format?: number | null
    id_region?: number | null
    id_sub_region?: number | null
  }

  export type CountryUpdateWithoutCurrencyInput = {
    name?: StringFieldUpdateOperationsInput | string
    official_name?: StringFieldUpdateOperationsInput | string
    abbr?: StringFieldUpdateOperationsInput | string
    internet_tld?: StringFieldUpdateOperationsInput | string
    motto?: NullableStringFieldUpdateOperationsInput | string | null
    anthem?: NullableStringFieldUpdateOperationsInput | string | null
    capital?: StringFieldUpdateOperationsInput | string
    official_language?: StringFieldUpdateOperationsInput | string
    population?: IntFieldUpdateOperationsInput | number
    iso_3166_1_alpha_2?: NullableStringFieldUpdateOperationsInput | string | null
    iso_3166_1_alpha_3?: NullableStringFieldUpdateOperationsInput | string | null
    calling_code?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    coat_of_arm?: Coat_Of_ArmUpdateOneWithoutCountryNestedInput
    flag?: FlagUpdateOneWithoutCountryNestedInput
    date_format?: Date_FormatUpdateOneWithoutCountryNestedInput
    region?: RegionUpdateOneWithoutCountryNestedInput
    sub_region?: Sub_RegionUpdateOneWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutCurrencyInput = {
    id_country?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    official_name?: StringFieldUpdateOperationsInput | string
    abbr?: StringFieldUpdateOperationsInput | string
    internet_tld?: StringFieldUpdateOperationsInput | string
    motto?: NullableStringFieldUpdateOperationsInput | string | null
    anthem?: NullableStringFieldUpdateOperationsInput | string | null
    capital?: StringFieldUpdateOperationsInput | string
    official_language?: StringFieldUpdateOperationsInput | string
    population?: IntFieldUpdateOperationsInput | number
    iso_3166_1_alpha_2?: NullableStringFieldUpdateOperationsInput | string | null
    iso_3166_1_alpha_3?: NullableStringFieldUpdateOperationsInput | string | null
    calling_code?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    id_coat_of_arm?: NullableIntFieldUpdateOperationsInput | number | null
    id_flag?: NullableIntFieldUpdateOperationsInput | number | null
    id_date_format?: NullableIntFieldUpdateOperationsInput | number | null
    id_region?: NullableIntFieldUpdateOperationsInput | number | null
    id_sub_region?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CountryUncheckedUpdateManyWithoutCurrencyInput = {
    id_country?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    official_name?: StringFieldUpdateOperationsInput | string
    abbr?: StringFieldUpdateOperationsInput | string
    internet_tld?: StringFieldUpdateOperationsInput | string
    motto?: NullableStringFieldUpdateOperationsInput | string | null
    anthem?: NullableStringFieldUpdateOperationsInput | string | null
    capital?: StringFieldUpdateOperationsInput | string
    official_language?: StringFieldUpdateOperationsInput | string
    population?: IntFieldUpdateOperationsInput | number
    iso_3166_1_alpha_2?: NullableStringFieldUpdateOperationsInput | string | null
    iso_3166_1_alpha_3?: NullableStringFieldUpdateOperationsInput | string | null
    calling_code?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    id_coat_of_arm?: NullableIntFieldUpdateOperationsInput | number | null
    id_flag?: NullableIntFieldUpdateOperationsInput | number | null
    id_date_format?: NullableIntFieldUpdateOperationsInput | number | null
    id_region?: NullableIntFieldUpdateOperationsInput | number | null
    id_sub_region?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CountryCreateManyFlagInput = {
    id_country?: number
    name: string
    official_name: string
    abbr: string
    internet_tld: string
    motto?: string | null
    anthem?: string | null
    capital: string
    official_language: string
    population: number
    iso_3166_1_alpha_2?: string | null
    iso_3166_1_alpha_3?: string | null
    calling_code?: string | null
    timezone?: string | null
    id_coat_of_arm?: number | null
    id_currency?: number | null
    id_date_format?: number | null
    id_region?: number | null
    id_sub_region?: number | null
  }

  export type CountryUpdateWithoutFlagInput = {
    name?: StringFieldUpdateOperationsInput | string
    official_name?: StringFieldUpdateOperationsInput | string
    abbr?: StringFieldUpdateOperationsInput | string
    internet_tld?: StringFieldUpdateOperationsInput | string
    motto?: NullableStringFieldUpdateOperationsInput | string | null
    anthem?: NullableStringFieldUpdateOperationsInput | string | null
    capital?: StringFieldUpdateOperationsInput | string
    official_language?: StringFieldUpdateOperationsInput | string
    population?: IntFieldUpdateOperationsInput | number
    iso_3166_1_alpha_2?: NullableStringFieldUpdateOperationsInput | string | null
    iso_3166_1_alpha_3?: NullableStringFieldUpdateOperationsInput | string | null
    calling_code?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    coat_of_arm?: Coat_Of_ArmUpdateOneWithoutCountryNestedInput
    currency?: CurrencyUpdateOneWithoutCountryNestedInput
    date_format?: Date_FormatUpdateOneWithoutCountryNestedInput
    region?: RegionUpdateOneWithoutCountryNestedInput
    sub_region?: Sub_RegionUpdateOneWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutFlagInput = {
    id_country?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    official_name?: StringFieldUpdateOperationsInput | string
    abbr?: StringFieldUpdateOperationsInput | string
    internet_tld?: StringFieldUpdateOperationsInput | string
    motto?: NullableStringFieldUpdateOperationsInput | string | null
    anthem?: NullableStringFieldUpdateOperationsInput | string | null
    capital?: StringFieldUpdateOperationsInput | string
    official_language?: StringFieldUpdateOperationsInput | string
    population?: IntFieldUpdateOperationsInput | number
    iso_3166_1_alpha_2?: NullableStringFieldUpdateOperationsInput | string | null
    iso_3166_1_alpha_3?: NullableStringFieldUpdateOperationsInput | string | null
    calling_code?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    id_coat_of_arm?: NullableIntFieldUpdateOperationsInput | number | null
    id_currency?: NullableIntFieldUpdateOperationsInput | number | null
    id_date_format?: NullableIntFieldUpdateOperationsInput | number | null
    id_region?: NullableIntFieldUpdateOperationsInput | number | null
    id_sub_region?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CountryUncheckedUpdateManyWithoutFlagInput = {
    id_country?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    official_name?: StringFieldUpdateOperationsInput | string
    abbr?: StringFieldUpdateOperationsInput | string
    internet_tld?: StringFieldUpdateOperationsInput | string
    motto?: NullableStringFieldUpdateOperationsInput | string | null
    anthem?: NullableStringFieldUpdateOperationsInput | string | null
    capital?: StringFieldUpdateOperationsInput | string
    official_language?: StringFieldUpdateOperationsInput | string
    population?: IntFieldUpdateOperationsInput | number
    iso_3166_1_alpha_2?: NullableStringFieldUpdateOperationsInput | string | null
    iso_3166_1_alpha_3?: NullableStringFieldUpdateOperationsInput | string | null
    calling_code?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    id_coat_of_arm?: NullableIntFieldUpdateOperationsInput | number | null
    id_currency?: NullableIntFieldUpdateOperationsInput | number | null
    id_date_format?: NullableIntFieldUpdateOperationsInput | number | null
    id_region?: NullableIntFieldUpdateOperationsInput | number | null
    id_sub_region?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CountryCreateManyCoat_of_armInput = {
    id_country?: number
    name: string
    official_name: string
    abbr: string
    internet_tld: string
    motto?: string | null
    anthem?: string | null
    capital: string
    official_language: string
    population: number
    iso_3166_1_alpha_2?: string | null
    iso_3166_1_alpha_3?: string | null
    calling_code?: string | null
    timezone?: string | null
    id_flag?: number | null
    id_currency?: number | null
    id_date_format?: number | null
    id_region?: number | null
    id_sub_region?: number | null
  }

  export type CountryUpdateWithoutCoat_of_armInput = {
    name?: StringFieldUpdateOperationsInput | string
    official_name?: StringFieldUpdateOperationsInput | string
    abbr?: StringFieldUpdateOperationsInput | string
    internet_tld?: StringFieldUpdateOperationsInput | string
    motto?: NullableStringFieldUpdateOperationsInput | string | null
    anthem?: NullableStringFieldUpdateOperationsInput | string | null
    capital?: StringFieldUpdateOperationsInput | string
    official_language?: StringFieldUpdateOperationsInput | string
    population?: IntFieldUpdateOperationsInput | number
    iso_3166_1_alpha_2?: NullableStringFieldUpdateOperationsInput | string | null
    iso_3166_1_alpha_3?: NullableStringFieldUpdateOperationsInput | string | null
    calling_code?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    flag?: FlagUpdateOneWithoutCountryNestedInput
    currency?: CurrencyUpdateOneWithoutCountryNestedInput
    date_format?: Date_FormatUpdateOneWithoutCountryNestedInput
    region?: RegionUpdateOneWithoutCountryNestedInput
    sub_region?: Sub_RegionUpdateOneWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutCoat_of_armInput = {
    id_country?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    official_name?: StringFieldUpdateOperationsInput | string
    abbr?: StringFieldUpdateOperationsInput | string
    internet_tld?: StringFieldUpdateOperationsInput | string
    motto?: NullableStringFieldUpdateOperationsInput | string | null
    anthem?: NullableStringFieldUpdateOperationsInput | string | null
    capital?: StringFieldUpdateOperationsInput | string
    official_language?: StringFieldUpdateOperationsInput | string
    population?: IntFieldUpdateOperationsInput | number
    iso_3166_1_alpha_2?: NullableStringFieldUpdateOperationsInput | string | null
    iso_3166_1_alpha_3?: NullableStringFieldUpdateOperationsInput | string | null
    calling_code?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    id_flag?: NullableIntFieldUpdateOperationsInput | number | null
    id_currency?: NullableIntFieldUpdateOperationsInput | number | null
    id_date_format?: NullableIntFieldUpdateOperationsInput | number | null
    id_region?: NullableIntFieldUpdateOperationsInput | number | null
    id_sub_region?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CountryUncheckedUpdateManyWithoutCoat_of_armInput = {
    id_country?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    official_name?: StringFieldUpdateOperationsInput | string
    abbr?: StringFieldUpdateOperationsInput | string
    internet_tld?: StringFieldUpdateOperationsInput | string
    motto?: NullableStringFieldUpdateOperationsInput | string | null
    anthem?: NullableStringFieldUpdateOperationsInput | string | null
    capital?: StringFieldUpdateOperationsInput | string
    official_language?: StringFieldUpdateOperationsInput | string
    population?: IntFieldUpdateOperationsInput | number
    iso_3166_1_alpha_2?: NullableStringFieldUpdateOperationsInput | string | null
    iso_3166_1_alpha_3?: NullableStringFieldUpdateOperationsInput | string | null
    calling_code?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    id_flag?: NullableIntFieldUpdateOperationsInput | number | null
    id_currency?: NullableIntFieldUpdateOperationsInput | number | null
    id_date_format?: NullableIntFieldUpdateOperationsInput | number | null
    id_region?: NullableIntFieldUpdateOperationsInput | number | null
    id_sub_region?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use RegionCountOutputTypeDefaultArgs instead
     */
    export type RegionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RegionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Sub_RegionCountOutputTypeDefaultArgs instead
     */
    export type Sub_RegionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Sub_RegionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Date_FormatCountOutputTypeDefaultArgs instead
     */
    export type Date_FormatCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Date_FormatCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CurrencyCountOutputTypeDefaultArgs instead
     */
    export type CurrencyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CurrencyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FlagCountOutputTypeDefaultArgs instead
     */
    export type FlagCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FlagCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Coat_Of_ArmCountOutputTypeDefaultArgs instead
     */
    export type Coat_Of_ArmCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Coat_Of_ArmCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RegionDefaultArgs instead
     */
    export type RegionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RegionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Sub_RegionDefaultArgs instead
     */
    export type Sub_RegionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Sub_RegionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Date_FormatDefaultArgs instead
     */
    export type Date_FormatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Date_FormatDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CurrencyDefaultArgs instead
     */
    export type CurrencyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CurrencyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FlagDefaultArgs instead
     */
    export type FlagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FlagDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Coat_Of_ArmDefaultArgs instead
     */
    export type Coat_Of_ArmArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Coat_Of_ArmDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CountryDefaultArgs instead
     */
    export type CountryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CountryDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}