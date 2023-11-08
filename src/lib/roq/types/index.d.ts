/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model ai_model
 *
 */
export type ai_model = $Result.DefaultSelection<Prisma.$ai_modelPayload>;
/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model compliance_test
 *
 */
export type compliance_test = $Result.DefaultSelection<Prisma.$compliance_testPayload>;
/**
 * Model documentation
 *
 */
export type documentation = $Result.DefaultSelection<Prisma.$documentationPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Ai_models
 * const ai_models = await prisma.ai_model.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Ai_models
   * const ai_models = await prisma.ai_model.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

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
  $use(cb: Prisma.Middleware): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.ai_model`: Exposes CRUD operations for the **ai_model** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Ai_models
   * const ai_models = await prisma.ai_model.findMany()
   * ```
   */
  get ai_model(): Prisma.ai_modelDelegate<ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.compliance_test`: Exposes CRUD operations for the **compliance_test** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Compliance_tests
   * const compliance_tests = await prisma.compliance_test.findMany()
   * ```
   */
  get compliance_test(): Prisma.compliance_testDelegate<ExtArgs>;

  /**
   * `prisma.documentation`: Exposes CRUD operations for the **documentation** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Documentations
   * const documentations = await prisma.documentation.findMany()
   * ```
   */
  get documentation(): Prisma.documentationDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    ai_model: 'ai_model';
    company: 'company';
    compliance_test: 'compliance_test';
    documentation: 'documentation';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'ai_model' | 'company' | 'compliance_test' | 'documentation' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      ai_model: {
        payload: Prisma.$ai_modelPayload<ExtArgs>;
        fields: Prisma.ai_modelFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ai_modelFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ai_modelPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ai_modelFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ai_modelPayload>;
          };
          findFirst: {
            args: Prisma.ai_modelFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ai_modelPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ai_modelFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ai_modelPayload>;
          };
          findMany: {
            args: Prisma.ai_modelFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ai_modelPayload>[];
          };
          create: {
            args: Prisma.ai_modelCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ai_modelPayload>;
          };
          createMany: {
            args: Prisma.ai_modelCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.ai_modelDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ai_modelPayload>;
          };
          update: {
            args: Prisma.ai_modelUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ai_modelPayload>;
          };
          deleteMany: {
            args: Prisma.ai_modelDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.ai_modelUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.ai_modelUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ai_modelPayload>;
          };
          aggregate: {
            args: Prisma.Ai_modelAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAi_model>;
          };
          groupBy: {
            args: Prisma.ai_modelGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Ai_modelGroupByOutputType>[];
          };
          count: {
            args: Prisma.ai_modelCountArgs<ExtArgs>;
            result: $Utils.Optional<Ai_modelCountAggregateOutputType> | number;
          };
        };
      };
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      compliance_test: {
        payload: Prisma.$compliance_testPayload<ExtArgs>;
        fields: Prisma.compliance_testFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.compliance_testFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$compliance_testPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.compliance_testFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$compliance_testPayload>;
          };
          findFirst: {
            args: Prisma.compliance_testFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$compliance_testPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.compliance_testFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$compliance_testPayload>;
          };
          findMany: {
            args: Prisma.compliance_testFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$compliance_testPayload>[];
          };
          create: {
            args: Prisma.compliance_testCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$compliance_testPayload>;
          };
          createMany: {
            args: Prisma.compliance_testCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.compliance_testDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$compliance_testPayload>;
          };
          update: {
            args: Prisma.compliance_testUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$compliance_testPayload>;
          };
          deleteMany: {
            args: Prisma.compliance_testDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.compliance_testUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.compliance_testUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$compliance_testPayload>;
          };
          aggregate: {
            args: Prisma.Compliance_testAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompliance_test>;
          };
          groupBy: {
            args: Prisma.compliance_testGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Compliance_testGroupByOutputType>[];
          };
          count: {
            args: Prisma.compliance_testCountArgs<ExtArgs>;
            result: $Utils.Optional<Compliance_testCountAggregateOutputType> | number;
          };
        };
      };
      documentation: {
        payload: Prisma.$documentationPayload<ExtArgs>;
        fields: Prisma.documentationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.documentationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$documentationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.documentationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$documentationPayload>;
          };
          findFirst: {
            args: Prisma.documentationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$documentationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.documentationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$documentationPayload>;
          };
          findMany: {
            args: Prisma.documentationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$documentationPayload>[];
          };
          create: {
            args: Prisma.documentationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$documentationPayload>;
          };
          createMany: {
            args: Prisma.documentationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.documentationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$documentationPayload>;
          };
          update: {
            args: Prisma.documentationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$documentationPayload>;
          };
          deleteMany: {
            args: Prisma.documentationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.documentationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.documentationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$documentationPayload>;
          };
          aggregate: {
            args: Prisma.DocumentationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateDocumentation>;
          };
          groupBy: {
            args: Prisma.documentationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<DocumentationGroupByOutputType>[];
          };
          count: {
            args: Prisma.documentationCountArgs<ExtArgs>;
            result: $Utils.Optional<DocumentationCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
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
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type Ai_modelCountOutputType
   */

  export type Ai_modelCountOutputType = {
    compliance_test: number;
    documentation: number;
  };

  export type Ai_modelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compliance_test?: boolean | Ai_modelCountOutputTypeCountCompliance_testArgs;
    documentation?: boolean | Ai_modelCountOutputTypeCountDocumentationArgs;
  };

  // Custom InputTypes

  /**
   * Ai_modelCountOutputType without action
   */
  export type Ai_modelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ai_modelCountOutputType
     */
    select?: Ai_modelCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * Ai_modelCountOutputType without action
   */
  export type Ai_modelCountOutputTypeCountCompliance_testArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: compliance_testWhereInput;
  };

  /**
   * Ai_modelCountOutputType without action
   */
  export type Ai_modelCountOutputTypeCountDocumentationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: documentationWhereInput;
  };

  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    ai_model: number;
  };

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ai_model?: boolean | CompanyCountOutputTypeCountAi_modelArgs;
  };

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountAi_modelArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ai_modelWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model ai_model
   */

  export type AggregateAi_model = {
    _count: Ai_modelCountAggregateOutputType | null;
    _avg: Ai_modelAvgAggregateOutputType | null;
    _sum: Ai_modelSumAggregateOutputType | null;
    _min: Ai_modelMinAggregateOutputType | null;
    _max: Ai_modelMaxAggregateOutputType | null;
  };

  export type Ai_modelAvgAggregateOutputType = {
    compliance_score: number | null;
  };

  export type Ai_modelSumAggregateOutputType = {
    compliance_score: number | null;
  };

  export type Ai_modelMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    company_id: string | null;
    type: string | null;
    compliance_score: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Ai_modelMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    company_id: string | null;
    type: string | null;
    compliance_score: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Ai_modelCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    company_id: number;
    type: number;
    compliance_score: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Ai_modelAvgAggregateInputType = {
    compliance_score?: true;
  };

  export type Ai_modelSumAggregateInputType = {
    compliance_score?: true;
  };

  export type Ai_modelMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    company_id?: true;
    type?: true;
    compliance_score?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Ai_modelMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    company_id?: true;
    type?: true;
    compliance_score?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Ai_modelCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    company_id?: true;
    type?: true;
    compliance_score?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Ai_modelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ai_model to aggregate.
     */
    where?: ai_modelWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ai_models to fetch.
     */
    orderBy?: ai_modelOrderByWithRelationInput | ai_modelOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ai_modelWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ai_models from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ai_models.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ai_models
     **/
    _count?: true | Ai_modelCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Ai_modelAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Ai_modelSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Ai_modelMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Ai_modelMaxAggregateInputType;
  };

  export type GetAi_modelAggregateType<T extends Ai_modelAggregateArgs> = {
    [P in keyof T & keyof AggregateAi_model]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAi_model[P]>
      : GetScalarType<T[P], AggregateAi_model[P]>;
  };

  export type ai_modelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ai_modelWhereInput;
    orderBy?: ai_modelOrderByWithAggregationInput | ai_modelOrderByWithAggregationInput[];
    by: Ai_modelScalarFieldEnum[] | Ai_modelScalarFieldEnum;
    having?: ai_modelScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Ai_modelCountAggregateInputType | true;
    _avg?: Ai_modelAvgAggregateInputType;
    _sum?: Ai_modelSumAggregateInputType;
    _min?: Ai_modelMinAggregateInputType;
    _max?: Ai_modelMaxAggregateInputType;
  };

  export type Ai_modelGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    company_id: string;
    type: string;
    compliance_score: number;
    created_at: Date;
    updated_at: Date;
    _count: Ai_modelCountAggregateOutputType | null;
    _avg: Ai_modelAvgAggregateOutputType | null;
    _sum: Ai_modelSumAggregateOutputType | null;
    _min: Ai_modelMinAggregateOutputType | null;
    _max: Ai_modelMaxAggregateOutputType | null;
  };

  type GetAi_modelGroupByPayload<T extends ai_modelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ai_modelGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Ai_modelGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Ai_modelGroupByOutputType[P]>
          : GetScalarType<T[P], Ai_modelGroupByOutputType[P]>;
      }
    >
  >;

  export type ai_modelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        description?: boolean;
        company_id?: boolean;
        type?: boolean;
        compliance_score?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        company?: boolean | companyDefaultArgs<ExtArgs>;
        compliance_test?: boolean | ai_model$compliance_testArgs<ExtArgs>;
        documentation?: boolean | ai_model$documentationArgs<ExtArgs>;
        _count?: boolean | Ai_modelCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['ai_model']
    >;

  export type ai_modelSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    company_id?: boolean;
    type?: boolean;
    compliance_score?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type ai_modelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>;
    compliance_test?: boolean | ai_model$compliance_testArgs<ExtArgs>;
    documentation?: boolean | ai_model$documentationArgs<ExtArgs>;
    _count?: boolean | Ai_modelCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $ai_modelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'ai_model';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>;
      compliance_test: Prisma.$compliance_testPayload<ExtArgs>[];
      documentation: Prisma.$documentationPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        company_id: string;
        type: string;
        compliance_score: number;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['ai_model']
    >;
    composites: {};
  };

  type ai_modelGetPayload<S extends boolean | null | undefined | ai_modelDefaultArgs> = $Result.GetResult<
    Prisma.$ai_modelPayload,
    S
  >;

  type ai_modelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    ai_modelFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Ai_modelCountAggregateInputType | true;
  };

  export interface ai_modelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ai_model']; meta: { name: 'ai_model' } };
    /**
     * Find zero or one Ai_model that matches the filter.
     * @param {ai_modelFindUniqueArgs} args - Arguments to find a Ai_model
     * @example
     * // Get one Ai_model
     * const ai_model = await prisma.ai_model.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends ai_modelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ai_modelFindUniqueArgs<ExtArgs>>,
    ): Prisma__ai_modelClient<
      $Result.GetResult<Prisma.$ai_modelPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Ai_model that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {ai_modelFindUniqueOrThrowArgs} args - Arguments to find a Ai_model
     * @example
     * // Get one Ai_model
     * const ai_model = await prisma.ai_model.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends ai_modelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ai_modelFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ai_modelClient<
      $Result.GetResult<Prisma.$ai_modelPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Ai_model that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_modelFindFirstArgs} args - Arguments to find a Ai_model
     * @example
     * // Get one Ai_model
     * const ai_model = await prisma.ai_model.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends ai_modelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ai_modelFindFirstArgs<ExtArgs>>,
    ): Prisma__ai_modelClient<
      $Result.GetResult<Prisma.$ai_modelPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Ai_model that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_modelFindFirstOrThrowArgs} args - Arguments to find a Ai_model
     * @example
     * // Get one Ai_model
     * const ai_model = await prisma.ai_model.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends ai_modelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ai_modelFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ai_modelClient<
      $Result.GetResult<Prisma.$ai_modelPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Ai_models that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_modelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ai_models
     * const ai_models = await prisma.ai_model.findMany()
     *
     * // Get first 10 Ai_models
     * const ai_models = await prisma.ai_model.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const ai_modelWithIdOnly = await prisma.ai_model.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends ai_modelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ai_modelFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ai_modelPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Ai_model.
     * @param {ai_modelCreateArgs} args - Arguments to create a Ai_model.
     * @example
     * // Create one Ai_model
     * const Ai_model = await prisma.ai_model.create({
     *   data: {
     *     // ... data to create a Ai_model
     *   }
     * })
     *
     **/
    create<T extends ai_modelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ai_modelCreateArgs<ExtArgs>>,
    ): Prisma__ai_modelClient<$Result.GetResult<Prisma.$ai_modelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Ai_models.
     *     @param {ai_modelCreateManyArgs} args - Arguments to create many Ai_models.
     *     @example
     *     // Create many Ai_models
     *     const ai_model = await prisma.ai_model.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends ai_modelCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ai_modelCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Ai_model.
     * @param {ai_modelDeleteArgs} args - Arguments to delete one Ai_model.
     * @example
     * // Delete one Ai_model
     * const Ai_model = await prisma.ai_model.delete({
     *   where: {
     *     // ... filter to delete one Ai_model
     *   }
     * })
     *
     **/
    delete<T extends ai_modelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ai_modelDeleteArgs<ExtArgs>>,
    ): Prisma__ai_modelClient<$Result.GetResult<Prisma.$ai_modelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Ai_model.
     * @param {ai_modelUpdateArgs} args - Arguments to update one Ai_model.
     * @example
     * // Update one Ai_model
     * const ai_model = await prisma.ai_model.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends ai_modelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ai_modelUpdateArgs<ExtArgs>>,
    ): Prisma__ai_modelClient<$Result.GetResult<Prisma.$ai_modelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Ai_models.
     * @param {ai_modelDeleteManyArgs} args - Arguments to filter Ai_models to delete.
     * @example
     * // Delete a few Ai_models
     * const { count } = await prisma.ai_model.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends ai_modelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ai_modelDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Ai_models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_modelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ai_models
     * const ai_model = await prisma.ai_model.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends ai_modelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ai_modelUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Ai_model.
     * @param {ai_modelUpsertArgs} args - Arguments to update or create a Ai_model.
     * @example
     * // Update or create a Ai_model
     * const ai_model = await prisma.ai_model.upsert({
     *   create: {
     *     // ... data to create a Ai_model
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ai_model we want to update
     *   }
     * })
     **/
    upsert<T extends ai_modelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ai_modelUpsertArgs<ExtArgs>>,
    ): Prisma__ai_modelClient<$Result.GetResult<Prisma.$ai_modelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Ai_models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_modelCountArgs} args - Arguments to filter Ai_models to count.
     * @example
     * // Count the number of Ai_models
     * const count = await prisma.ai_model.count({
     *   where: {
     *     // ... the filter for the Ai_models we want to count
     *   }
     * })
     **/
    count<T extends ai_modelCountArgs>(
      args?: Subset<T, ai_modelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ai_modelCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Ai_model.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_modelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ai_modelAggregateArgs>(
      args: Subset<T, Ai_modelAggregateArgs>,
    ): Prisma.PrismaPromise<GetAi_modelAggregateType<T>>;

    /**
     * Group by Ai_model.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ai_modelGroupByArgs} args - Group by arguments.
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
      T extends ai_modelGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ai_modelGroupByArgs['orderBy'] }
        : { orderBy?: ai_modelGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, ai_modelGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAi_modelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ai_model model
     */
    readonly fields: ai_modelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ai_model.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ai_modelClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    compliance_test<T extends ai_model$compliance_testArgs<ExtArgs> = {}>(
      args?: Subset<T, ai_model$compliance_testArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$compliance_testPayload<ExtArgs>, T, 'findMany'> | Null>;

    documentation<T extends ai_model$documentationArgs<ExtArgs> = {}>(
      args?: Subset<T, ai_model$documentationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentationPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ai_model model
   */
  interface ai_modelFieldRefs {
    readonly id: FieldRef<'ai_model', 'String'>;
    readonly name: FieldRef<'ai_model', 'String'>;
    readonly description: FieldRef<'ai_model', 'String'>;
    readonly company_id: FieldRef<'ai_model', 'String'>;
    readonly type: FieldRef<'ai_model', 'String'>;
    readonly compliance_score: FieldRef<'ai_model', 'Float'>;
    readonly created_at: FieldRef<'ai_model', 'DateTime'>;
    readonly updated_at: FieldRef<'ai_model', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * ai_model findUnique
   */
  export type ai_modelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_model
     */
    select?: ai_modelSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ai_modelInclude<ExtArgs> | null;
    /**
     * Filter, which ai_model to fetch.
     */
    where: ai_modelWhereUniqueInput;
  };

  /**
   * ai_model findUniqueOrThrow
   */
  export type ai_modelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_model
     */
    select?: ai_modelSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ai_modelInclude<ExtArgs> | null;
    /**
     * Filter, which ai_model to fetch.
     */
    where: ai_modelWhereUniqueInput;
  };

  /**
   * ai_model findFirst
   */
  export type ai_modelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_model
     */
    select?: ai_modelSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ai_modelInclude<ExtArgs> | null;
    /**
     * Filter, which ai_model to fetch.
     */
    where?: ai_modelWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ai_models to fetch.
     */
    orderBy?: ai_modelOrderByWithRelationInput | ai_modelOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ai_models.
     */
    cursor?: ai_modelWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ai_models from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ai_models.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ai_models.
     */
    distinct?: Ai_modelScalarFieldEnum | Ai_modelScalarFieldEnum[];
  };

  /**
   * ai_model findFirstOrThrow
   */
  export type ai_modelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_model
     */
    select?: ai_modelSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ai_modelInclude<ExtArgs> | null;
    /**
     * Filter, which ai_model to fetch.
     */
    where?: ai_modelWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ai_models to fetch.
     */
    orderBy?: ai_modelOrderByWithRelationInput | ai_modelOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ai_models.
     */
    cursor?: ai_modelWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ai_models from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ai_models.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ai_models.
     */
    distinct?: Ai_modelScalarFieldEnum | Ai_modelScalarFieldEnum[];
  };

  /**
   * ai_model findMany
   */
  export type ai_modelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_model
     */
    select?: ai_modelSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ai_modelInclude<ExtArgs> | null;
    /**
     * Filter, which ai_models to fetch.
     */
    where?: ai_modelWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ai_models to fetch.
     */
    orderBy?: ai_modelOrderByWithRelationInput | ai_modelOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ai_models.
     */
    cursor?: ai_modelWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ai_models from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ai_models.
     */
    skip?: number;
    distinct?: Ai_modelScalarFieldEnum | Ai_modelScalarFieldEnum[];
  };

  /**
   * ai_model create
   */
  export type ai_modelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_model
     */
    select?: ai_modelSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ai_modelInclude<ExtArgs> | null;
    /**
     * The data needed to create a ai_model.
     */
    data: XOR<ai_modelCreateInput, ai_modelUncheckedCreateInput>;
  };

  /**
   * ai_model createMany
   */
  export type ai_modelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ai_models.
     */
    data: ai_modelCreateManyInput | ai_modelCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ai_model update
   */
  export type ai_modelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_model
     */
    select?: ai_modelSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ai_modelInclude<ExtArgs> | null;
    /**
     * The data needed to update a ai_model.
     */
    data: XOR<ai_modelUpdateInput, ai_modelUncheckedUpdateInput>;
    /**
     * Choose, which ai_model to update.
     */
    where: ai_modelWhereUniqueInput;
  };

  /**
   * ai_model updateMany
   */
  export type ai_modelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ai_models.
     */
    data: XOR<ai_modelUpdateManyMutationInput, ai_modelUncheckedUpdateManyInput>;
    /**
     * Filter which ai_models to update
     */
    where?: ai_modelWhereInput;
  };

  /**
   * ai_model upsert
   */
  export type ai_modelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_model
     */
    select?: ai_modelSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ai_modelInclude<ExtArgs> | null;
    /**
     * The filter to search for the ai_model to update in case it exists.
     */
    where: ai_modelWhereUniqueInput;
    /**
     * In case the ai_model found by the `where` argument doesn't exist, create a new ai_model with this data.
     */
    create: XOR<ai_modelCreateInput, ai_modelUncheckedCreateInput>;
    /**
     * In case the ai_model was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ai_modelUpdateInput, ai_modelUncheckedUpdateInput>;
  };

  /**
   * ai_model delete
   */
  export type ai_modelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_model
     */
    select?: ai_modelSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ai_modelInclude<ExtArgs> | null;
    /**
     * Filter which ai_model to delete.
     */
    where: ai_modelWhereUniqueInput;
  };

  /**
   * ai_model deleteMany
   */
  export type ai_modelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ai_models to delete
     */
    where?: ai_modelWhereInput;
  };

  /**
   * ai_model.compliance_test
   */
  export type ai_model$compliance_testArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compliance_test
     */
    select?: compliance_testSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: compliance_testInclude<ExtArgs> | null;
    where?: compliance_testWhereInput;
    orderBy?: compliance_testOrderByWithRelationInput | compliance_testOrderByWithRelationInput[];
    cursor?: compliance_testWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Compliance_testScalarFieldEnum | Compliance_testScalarFieldEnum[];
  };

  /**
   * ai_model.documentation
   */
  export type ai_model$documentationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentation
     */
    select?: documentationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: documentationInclude<ExtArgs> | null;
    where?: documentationWhereInput;
    orderBy?: documentationOrderByWithRelationInput | documentationOrderByWithRelationInput[];
    cursor?: documentationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: DocumentationScalarFieldEnum | DocumentationScalarFieldEnum[];
  };

  /**
   * ai_model without action
   */
  export type ai_modelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_model
     */
    select?: ai_modelSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ai_modelInclude<ExtArgs> | null;
  };

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    name: number;
    created_at: number;
    updated_at: number;
    tenant_id: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    tenant_id: string;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      tenant_id?: boolean;
      ai_model?: boolean | company$ai_modelArgs<ExtArgs>;
      _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    tenant_id?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ai_model?: boolean | company$ai_modelArgs<ExtArgs>;
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      ai_model: Prisma.$ai_modelPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        tenant_id: string;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
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
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ai_model<T extends company$ai_modelArgs<ExtArgs> = {}>(
      args?: Subset<T, company$ai_modelArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ai_modelPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
    readonly tenant_id: FieldRef<'company', 'String'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company.ai_model
   */
  export type company$ai_modelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ai_model
     */
    select?: ai_modelSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ai_modelInclude<ExtArgs> | null;
    where?: ai_modelWhereInput;
    orderBy?: ai_modelOrderByWithRelationInput | ai_modelOrderByWithRelationInput[];
    cursor?: ai_modelWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Ai_modelScalarFieldEnum | Ai_modelScalarFieldEnum[];
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model compliance_test
   */

  export type AggregateCompliance_test = {
    _count: Compliance_testCountAggregateOutputType | null;
    _min: Compliance_testMinAggregateOutputType | null;
    _max: Compliance_testMaxAggregateOutputType | null;
  };

  export type Compliance_testMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    result: boolean | null;
    ai_model_id: string | null;
    test_passed: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Compliance_testMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    result: boolean | null;
    ai_model_id: string | null;
    test_passed: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Compliance_testCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    result: number;
    ai_model_id: number;
    test_passed: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Compliance_testMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    result?: true;
    ai_model_id?: true;
    test_passed?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Compliance_testMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    result?: true;
    ai_model_id?: true;
    test_passed?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Compliance_testCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    result?: true;
    ai_model_id?: true;
    test_passed?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Compliance_testAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which compliance_test to aggregate.
     */
    where?: compliance_testWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of compliance_tests to fetch.
     */
    orderBy?: compliance_testOrderByWithRelationInput | compliance_testOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: compliance_testWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` compliance_tests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` compliance_tests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned compliance_tests
     **/
    _count?: true | Compliance_testCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Compliance_testMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Compliance_testMaxAggregateInputType;
  };

  export type GetCompliance_testAggregateType<T extends Compliance_testAggregateArgs> = {
    [P in keyof T & keyof AggregateCompliance_test]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompliance_test[P]>
      : GetScalarType<T[P], AggregateCompliance_test[P]>;
  };

  export type compliance_testGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: compliance_testWhereInput;
    orderBy?: compliance_testOrderByWithAggregationInput | compliance_testOrderByWithAggregationInput[];
    by: Compliance_testScalarFieldEnum[] | Compliance_testScalarFieldEnum;
    having?: compliance_testScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Compliance_testCountAggregateInputType | true;
    _min?: Compliance_testMinAggregateInputType;
    _max?: Compliance_testMaxAggregateInputType;
  };

  export type Compliance_testGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    result: boolean | null;
    ai_model_id: string;
    test_passed: boolean;
    created_at: Date;
    updated_at: Date;
    _count: Compliance_testCountAggregateOutputType | null;
    _min: Compliance_testMinAggregateOutputType | null;
    _max: Compliance_testMaxAggregateOutputType | null;
  };

  type GetCompliance_testGroupByPayload<T extends compliance_testGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Compliance_testGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Compliance_testGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Compliance_testGroupByOutputType[P]>
          : GetScalarType<T[P], Compliance_testGroupByOutputType[P]>;
      }
    >
  >;

  export type compliance_testSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        description?: boolean;
        result?: boolean;
        ai_model_id?: boolean;
        test_passed?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        ai_model?: boolean | ai_modelDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['compliance_test']
    >;

  export type compliance_testSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    result?: boolean;
    ai_model_id?: boolean;
    test_passed?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type compliance_testInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ai_model?: boolean | ai_modelDefaultArgs<ExtArgs>;
  };

  export type $compliance_testPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'compliance_test';
    objects: {
      ai_model: Prisma.$ai_modelPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        result: boolean | null;
        ai_model_id: string;
        test_passed: boolean;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['compliance_test']
    >;
    composites: {};
  };

  type compliance_testGetPayload<S extends boolean | null | undefined | compliance_testDefaultArgs> = $Result.GetResult<
    Prisma.$compliance_testPayload,
    S
  >;

  type compliance_testCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    compliance_testFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Compliance_testCountAggregateInputType | true;
  };

  export interface compliance_testDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['compliance_test']; meta: { name: 'compliance_test' } };
    /**
     * Find zero or one Compliance_test that matches the filter.
     * @param {compliance_testFindUniqueArgs} args - Arguments to find a Compliance_test
     * @example
     * // Get one Compliance_test
     * const compliance_test = await prisma.compliance_test.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends compliance_testFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, compliance_testFindUniqueArgs<ExtArgs>>,
    ): Prisma__compliance_testClient<
      $Result.GetResult<Prisma.$compliance_testPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Compliance_test that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {compliance_testFindUniqueOrThrowArgs} args - Arguments to find a Compliance_test
     * @example
     * // Get one Compliance_test
     * const compliance_test = await prisma.compliance_test.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends compliance_testFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, compliance_testFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__compliance_testClient<
      $Result.GetResult<Prisma.$compliance_testPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Compliance_test that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {compliance_testFindFirstArgs} args - Arguments to find a Compliance_test
     * @example
     * // Get one Compliance_test
     * const compliance_test = await prisma.compliance_test.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends compliance_testFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, compliance_testFindFirstArgs<ExtArgs>>,
    ): Prisma__compliance_testClient<
      $Result.GetResult<Prisma.$compliance_testPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Compliance_test that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {compliance_testFindFirstOrThrowArgs} args - Arguments to find a Compliance_test
     * @example
     * // Get one Compliance_test
     * const compliance_test = await prisma.compliance_test.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends compliance_testFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, compliance_testFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__compliance_testClient<
      $Result.GetResult<Prisma.$compliance_testPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Compliance_tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {compliance_testFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Compliance_tests
     * const compliance_tests = await prisma.compliance_test.findMany()
     *
     * // Get first 10 Compliance_tests
     * const compliance_tests = await prisma.compliance_test.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const compliance_testWithIdOnly = await prisma.compliance_test.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends compliance_testFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, compliance_testFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$compliance_testPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Compliance_test.
     * @param {compliance_testCreateArgs} args - Arguments to create a Compliance_test.
     * @example
     * // Create one Compliance_test
     * const Compliance_test = await prisma.compliance_test.create({
     *   data: {
     *     // ... data to create a Compliance_test
     *   }
     * })
     *
     **/
    create<T extends compliance_testCreateArgs<ExtArgs>>(
      args: SelectSubset<T, compliance_testCreateArgs<ExtArgs>>,
    ): Prisma__compliance_testClient<
      $Result.GetResult<Prisma.$compliance_testPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Compliance_tests.
     *     @param {compliance_testCreateManyArgs} args - Arguments to create many Compliance_tests.
     *     @example
     *     // Create many Compliance_tests
     *     const compliance_test = await prisma.compliance_test.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends compliance_testCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, compliance_testCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Compliance_test.
     * @param {compliance_testDeleteArgs} args - Arguments to delete one Compliance_test.
     * @example
     * // Delete one Compliance_test
     * const Compliance_test = await prisma.compliance_test.delete({
     *   where: {
     *     // ... filter to delete one Compliance_test
     *   }
     * })
     *
     **/
    delete<T extends compliance_testDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, compliance_testDeleteArgs<ExtArgs>>,
    ): Prisma__compliance_testClient<
      $Result.GetResult<Prisma.$compliance_testPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Compliance_test.
     * @param {compliance_testUpdateArgs} args - Arguments to update one Compliance_test.
     * @example
     * // Update one Compliance_test
     * const compliance_test = await prisma.compliance_test.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends compliance_testUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, compliance_testUpdateArgs<ExtArgs>>,
    ): Prisma__compliance_testClient<
      $Result.GetResult<Prisma.$compliance_testPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Compliance_tests.
     * @param {compliance_testDeleteManyArgs} args - Arguments to filter Compliance_tests to delete.
     * @example
     * // Delete a few Compliance_tests
     * const { count } = await prisma.compliance_test.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends compliance_testDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, compliance_testDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Compliance_tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {compliance_testUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Compliance_tests
     * const compliance_test = await prisma.compliance_test.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends compliance_testUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, compliance_testUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Compliance_test.
     * @param {compliance_testUpsertArgs} args - Arguments to update or create a Compliance_test.
     * @example
     * // Update or create a Compliance_test
     * const compliance_test = await prisma.compliance_test.upsert({
     *   create: {
     *     // ... data to create a Compliance_test
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Compliance_test we want to update
     *   }
     * })
     **/
    upsert<T extends compliance_testUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, compliance_testUpsertArgs<ExtArgs>>,
    ): Prisma__compliance_testClient<
      $Result.GetResult<Prisma.$compliance_testPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Compliance_tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {compliance_testCountArgs} args - Arguments to filter Compliance_tests to count.
     * @example
     * // Count the number of Compliance_tests
     * const count = await prisma.compliance_test.count({
     *   where: {
     *     // ... the filter for the Compliance_tests we want to count
     *   }
     * })
     **/
    count<T extends compliance_testCountArgs>(
      args?: Subset<T, compliance_testCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Compliance_testCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Compliance_test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Compliance_testAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Compliance_testAggregateArgs>(
      args: Subset<T, Compliance_testAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompliance_testAggregateType<T>>;

    /**
     * Group by Compliance_test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {compliance_testGroupByArgs} args - Group by arguments.
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
      T extends compliance_testGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: compliance_testGroupByArgs['orderBy'] }
        : { orderBy?: compliance_testGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, compliance_testGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompliance_testGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the compliance_test model
     */
    readonly fields: compliance_testFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for compliance_test.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__compliance_testClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ai_model<T extends ai_modelDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ai_modelDefaultArgs<ExtArgs>>,
    ): Prisma__ai_modelClient<
      $Result.GetResult<Prisma.$ai_modelPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the compliance_test model
   */
  interface compliance_testFieldRefs {
    readonly id: FieldRef<'compliance_test', 'String'>;
    readonly name: FieldRef<'compliance_test', 'String'>;
    readonly description: FieldRef<'compliance_test', 'String'>;
    readonly result: FieldRef<'compliance_test', 'Boolean'>;
    readonly ai_model_id: FieldRef<'compliance_test', 'String'>;
    readonly test_passed: FieldRef<'compliance_test', 'Boolean'>;
    readonly created_at: FieldRef<'compliance_test', 'DateTime'>;
    readonly updated_at: FieldRef<'compliance_test', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * compliance_test findUnique
   */
  export type compliance_testFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compliance_test
     */
    select?: compliance_testSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: compliance_testInclude<ExtArgs> | null;
    /**
     * Filter, which compliance_test to fetch.
     */
    where: compliance_testWhereUniqueInput;
  };

  /**
   * compliance_test findUniqueOrThrow
   */
  export type compliance_testFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the compliance_test
       */
      select?: compliance_testSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: compliance_testInclude<ExtArgs> | null;
      /**
       * Filter, which compliance_test to fetch.
       */
      where: compliance_testWhereUniqueInput;
    };

  /**
   * compliance_test findFirst
   */
  export type compliance_testFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compliance_test
     */
    select?: compliance_testSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: compliance_testInclude<ExtArgs> | null;
    /**
     * Filter, which compliance_test to fetch.
     */
    where?: compliance_testWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of compliance_tests to fetch.
     */
    orderBy?: compliance_testOrderByWithRelationInput | compliance_testOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for compliance_tests.
     */
    cursor?: compliance_testWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` compliance_tests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` compliance_tests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of compliance_tests.
     */
    distinct?: Compliance_testScalarFieldEnum | Compliance_testScalarFieldEnum[];
  };

  /**
   * compliance_test findFirstOrThrow
   */
  export type compliance_testFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the compliance_test
       */
      select?: compliance_testSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: compliance_testInclude<ExtArgs> | null;
      /**
       * Filter, which compliance_test to fetch.
       */
      where?: compliance_testWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of compliance_tests to fetch.
       */
      orderBy?: compliance_testOrderByWithRelationInput | compliance_testOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for compliance_tests.
       */
      cursor?: compliance_testWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` compliance_tests from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` compliance_tests.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of compliance_tests.
       */
      distinct?: Compliance_testScalarFieldEnum | Compliance_testScalarFieldEnum[];
    };

  /**
   * compliance_test findMany
   */
  export type compliance_testFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compliance_test
     */
    select?: compliance_testSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: compliance_testInclude<ExtArgs> | null;
    /**
     * Filter, which compliance_tests to fetch.
     */
    where?: compliance_testWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of compliance_tests to fetch.
     */
    orderBy?: compliance_testOrderByWithRelationInput | compliance_testOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing compliance_tests.
     */
    cursor?: compliance_testWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` compliance_tests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` compliance_tests.
     */
    skip?: number;
    distinct?: Compliance_testScalarFieldEnum | Compliance_testScalarFieldEnum[];
  };

  /**
   * compliance_test create
   */
  export type compliance_testCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compliance_test
     */
    select?: compliance_testSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: compliance_testInclude<ExtArgs> | null;
    /**
     * The data needed to create a compliance_test.
     */
    data: XOR<compliance_testCreateInput, compliance_testUncheckedCreateInput>;
  };

  /**
   * compliance_test createMany
   */
  export type compliance_testCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many compliance_tests.
     */
    data: compliance_testCreateManyInput | compliance_testCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * compliance_test update
   */
  export type compliance_testUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compliance_test
     */
    select?: compliance_testSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: compliance_testInclude<ExtArgs> | null;
    /**
     * The data needed to update a compliance_test.
     */
    data: XOR<compliance_testUpdateInput, compliance_testUncheckedUpdateInput>;
    /**
     * Choose, which compliance_test to update.
     */
    where: compliance_testWhereUniqueInput;
  };

  /**
   * compliance_test updateMany
   */
  export type compliance_testUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update compliance_tests.
     */
    data: XOR<compliance_testUpdateManyMutationInput, compliance_testUncheckedUpdateManyInput>;
    /**
     * Filter which compliance_tests to update
     */
    where?: compliance_testWhereInput;
  };

  /**
   * compliance_test upsert
   */
  export type compliance_testUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compliance_test
     */
    select?: compliance_testSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: compliance_testInclude<ExtArgs> | null;
    /**
     * The filter to search for the compliance_test to update in case it exists.
     */
    where: compliance_testWhereUniqueInput;
    /**
     * In case the compliance_test found by the `where` argument doesn't exist, create a new compliance_test with this data.
     */
    create: XOR<compliance_testCreateInput, compliance_testUncheckedCreateInput>;
    /**
     * In case the compliance_test was found with the provided `where` argument, update it with this data.
     */
    update: XOR<compliance_testUpdateInput, compliance_testUncheckedUpdateInput>;
  };

  /**
   * compliance_test delete
   */
  export type compliance_testDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compliance_test
     */
    select?: compliance_testSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: compliance_testInclude<ExtArgs> | null;
    /**
     * Filter which compliance_test to delete.
     */
    where: compliance_testWhereUniqueInput;
  };

  /**
   * compliance_test deleteMany
   */
  export type compliance_testDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which compliance_tests to delete
     */
    where?: compliance_testWhereInput;
  };

  /**
   * compliance_test without action
   */
  export type compliance_testDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compliance_test
     */
    select?: compliance_testSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: compliance_testInclude<ExtArgs> | null;
  };

  /**
   * Model documentation
   */

  export type AggregateDocumentation = {
    _count: DocumentationCountAggregateOutputType | null;
    _min: DocumentationMinAggregateOutputType | null;
    _max: DocumentationMaxAggregateOutputType | null;
  };

  export type DocumentationMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    content: string | null;
    ai_model_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type DocumentationMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    content: string | null;
    ai_model_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type DocumentationCountAggregateOutputType = {
    id: number;
    name: number;
    content: number;
    ai_model_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type DocumentationMinAggregateInputType = {
    id?: true;
    name?: true;
    content?: true;
    ai_model_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type DocumentationMaxAggregateInputType = {
    id?: true;
    name?: true;
    content?: true;
    ai_model_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type DocumentationCountAggregateInputType = {
    id?: true;
    name?: true;
    content?: true;
    ai_model_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type DocumentationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which documentation to aggregate.
     */
    where?: documentationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of documentations to fetch.
     */
    orderBy?: documentationOrderByWithRelationInput | documentationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: documentationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` documentations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` documentations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned documentations
     **/
    _count?: true | DocumentationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: DocumentationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: DocumentationMaxAggregateInputType;
  };

  export type GetDocumentationAggregateType<T extends DocumentationAggregateArgs> = {
    [P in keyof T & keyof AggregateDocumentation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentation[P]>
      : GetScalarType<T[P], AggregateDocumentation[P]>;
  };

  export type documentationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: documentationWhereInput;
    orderBy?: documentationOrderByWithAggregationInput | documentationOrderByWithAggregationInput[];
    by: DocumentationScalarFieldEnum[] | DocumentationScalarFieldEnum;
    having?: documentationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DocumentationCountAggregateInputType | true;
    _min?: DocumentationMinAggregateInputType;
    _max?: DocumentationMaxAggregateInputType;
  };

  export type DocumentationGroupByOutputType = {
    id: string;
    name: string;
    content: string | null;
    ai_model_id: string;
    created_at: Date;
    updated_at: Date;
    _count: DocumentationCountAggregateOutputType | null;
    _min: DocumentationMinAggregateOutputType | null;
    _max: DocumentationMaxAggregateOutputType | null;
  };

  type GetDocumentationGroupByPayload<T extends documentationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof DocumentationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], DocumentationGroupByOutputType[P]>
          : GetScalarType<T[P], DocumentationGroupByOutputType[P]>;
      }
    >
  >;

  export type documentationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        content?: boolean;
        ai_model_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        ai_model?: boolean | ai_modelDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['documentation']
    >;

  export type documentationSelectScalar = {
    id?: boolean;
    name?: boolean;
    content?: boolean;
    ai_model_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type documentationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ai_model?: boolean | ai_modelDefaultArgs<ExtArgs>;
  };

  export type $documentationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'documentation';
    objects: {
      ai_model: Prisma.$ai_modelPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        content: string | null;
        ai_model_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['documentation']
    >;
    composites: {};
  };

  type documentationGetPayload<S extends boolean | null | undefined | documentationDefaultArgs> = $Result.GetResult<
    Prisma.$documentationPayload,
    S
  >;

  type documentationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    documentationFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: DocumentationCountAggregateInputType | true;
  };

  export interface documentationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['documentation']; meta: { name: 'documentation' } };
    /**
     * Find zero or one Documentation that matches the filter.
     * @param {documentationFindUniqueArgs} args - Arguments to find a Documentation
     * @example
     * // Get one Documentation
     * const documentation = await prisma.documentation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends documentationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, documentationFindUniqueArgs<ExtArgs>>,
    ): Prisma__documentationClient<
      $Result.GetResult<Prisma.$documentationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Documentation that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {documentationFindUniqueOrThrowArgs} args - Arguments to find a Documentation
     * @example
     * // Get one Documentation
     * const documentation = await prisma.documentation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends documentationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, documentationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__documentationClient<
      $Result.GetResult<Prisma.$documentationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Documentation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentationFindFirstArgs} args - Arguments to find a Documentation
     * @example
     * // Get one Documentation
     * const documentation = await prisma.documentation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends documentationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, documentationFindFirstArgs<ExtArgs>>,
    ): Prisma__documentationClient<
      $Result.GetResult<Prisma.$documentationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Documentation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentationFindFirstOrThrowArgs} args - Arguments to find a Documentation
     * @example
     * // Get one Documentation
     * const documentation = await prisma.documentation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends documentationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, documentationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__documentationClient<
      $Result.GetResult<Prisma.$documentationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Documentations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documentations
     * const documentations = await prisma.documentation.findMany()
     *
     * // Get first 10 Documentations
     * const documentations = await prisma.documentation.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const documentationWithIdOnly = await prisma.documentation.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends documentationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, documentationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Documentation.
     * @param {documentationCreateArgs} args - Arguments to create a Documentation.
     * @example
     * // Create one Documentation
     * const Documentation = await prisma.documentation.create({
     *   data: {
     *     // ... data to create a Documentation
     *   }
     * })
     *
     **/
    create<T extends documentationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, documentationCreateArgs<ExtArgs>>,
    ): Prisma__documentationClient<
      $Result.GetResult<Prisma.$documentationPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Documentations.
     *     @param {documentationCreateManyArgs} args - Arguments to create many Documentations.
     *     @example
     *     // Create many Documentations
     *     const documentation = await prisma.documentation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends documentationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, documentationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Documentation.
     * @param {documentationDeleteArgs} args - Arguments to delete one Documentation.
     * @example
     * // Delete one Documentation
     * const Documentation = await prisma.documentation.delete({
     *   where: {
     *     // ... filter to delete one Documentation
     *   }
     * })
     *
     **/
    delete<T extends documentationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, documentationDeleteArgs<ExtArgs>>,
    ): Prisma__documentationClient<
      $Result.GetResult<Prisma.$documentationPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Documentation.
     * @param {documentationUpdateArgs} args - Arguments to update one Documentation.
     * @example
     * // Update one Documentation
     * const documentation = await prisma.documentation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends documentationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, documentationUpdateArgs<ExtArgs>>,
    ): Prisma__documentationClient<
      $Result.GetResult<Prisma.$documentationPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Documentations.
     * @param {documentationDeleteManyArgs} args - Arguments to filter Documentations to delete.
     * @example
     * // Delete a few Documentations
     * const { count } = await prisma.documentation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends documentationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, documentationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Documentations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documentations
     * const documentation = await prisma.documentation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends documentationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, documentationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Documentation.
     * @param {documentationUpsertArgs} args - Arguments to update or create a Documentation.
     * @example
     * // Update or create a Documentation
     * const documentation = await prisma.documentation.upsert({
     *   create: {
     *     // ... data to create a Documentation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Documentation we want to update
     *   }
     * })
     **/
    upsert<T extends documentationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, documentationUpsertArgs<ExtArgs>>,
    ): Prisma__documentationClient<
      $Result.GetResult<Prisma.$documentationPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Documentations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentationCountArgs} args - Arguments to filter Documentations to count.
     * @example
     * // Count the number of Documentations
     * const count = await prisma.documentation.count({
     *   where: {
     *     // ... the filter for the Documentations we want to count
     *   }
     * })
     **/
    count<T extends documentationCountArgs>(
      args?: Subset<T, documentationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Documentation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentationAggregateArgs>(
      args: Subset<T, DocumentationAggregateArgs>,
    ): Prisma.PrismaPromise<GetDocumentationAggregateType<T>>;

    /**
     * Group by Documentation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentationGroupByArgs} args - Group by arguments.
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
      T extends documentationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: documentationGroupByArgs['orderBy'] }
        : { orderBy?: documentationGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, documentationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetDocumentationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the documentation model
     */
    readonly fields: documentationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for documentation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__documentationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ai_model<T extends ai_modelDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ai_modelDefaultArgs<ExtArgs>>,
    ): Prisma__ai_modelClient<
      $Result.GetResult<Prisma.$ai_modelPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the documentation model
   */
  interface documentationFieldRefs {
    readonly id: FieldRef<'documentation', 'String'>;
    readonly name: FieldRef<'documentation', 'String'>;
    readonly content: FieldRef<'documentation', 'String'>;
    readonly ai_model_id: FieldRef<'documentation', 'String'>;
    readonly created_at: FieldRef<'documentation', 'DateTime'>;
    readonly updated_at: FieldRef<'documentation', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * documentation findUnique
   */
  export type documentationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentation
     */
    select?: documentationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: documentationInclude<ExtArgs> | null;
    /**
     * Filter, which documentation to fetch.
     */
    where: documentationWhereUniqueInput;
  };

  /**
   * documentation findUniqueOrThrow
   */
  export type documentationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentation
     */
    select?: documentationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: documentationInclude<ExtArgs> | null;
    /**
     * Filter, which documentation to fetch.
     */
    where: documentationWhereUniqueInput;
  };

  /**
   * documentation findFirst
   */
  export type documentationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentation
     */
    select?: documentationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: documentationInclude<ExtArgs> | null;
    /**
     * Filter, which documentation to fetch.
     */
    where?: documentationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of documentations to fetch.
     */
    orderBy?: documentationOrderByWithRelationInput | documentationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for documentations.
     */
    cursor?: documentationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` documentations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` documentations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of documentations.
     */
    distinct?: DocumentationScalarFieldEnum | DocumentationScalarFieldEnum[];
  };

  /**
   * documentation findFirstOrThrow
   */
  export type documentationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentation
     */
    select?: documentationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: documentationInclude<ExtArgs> | null;
    /**
     * Filter, which documentation to fetch.
     */
    where?: documentationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of documentations to fetch.
     */
    orderBy?: documentationOrderByWithRelationInput | documentationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for documentations.
     */
    cursor?: documentationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` documentations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` documentations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of documentations.
     */
    distinct?: DocumentationScalarFieldEnum | DocumentationScalarFieldEnum[];
  };

  /**
   * documentation findMany
   */
  export type documentationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentation
     */
    select?: documentationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: documentationInclude<ExtArgs> | null;
    /**
     * Filter, which documentations to fetch.
     */
    where?: documentationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of documentations to fetch.
     */
    orderBy?: documentationOrderByWithRelationInput | documentationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing documentations.
     */
    cursor?: documentationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` documentations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` documentations.
     */
    skip?: number;
    distinct?: DocumentationScalarFieldEnum | DocumentationScalarFieldEnum[];
  };

  /**
   * documentation create
   */
  export type documentationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentation
     */
    select?: documentationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: documentationInclude<ExtArgs> | null;
    /**
     * The data needed to create a documentation.
     */
    data: XOR<documentationCreateInput, documentationUncheckedCreateInput>;
  };

  /**
   * documentation createMany
   */
  export type documentationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many documentations.
     */
    data: documentationCreateManyInput | documentationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * documentation update
   */
  export type documentationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentation
     */
    select?: documentationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: documentationInclude<ExtArgs> | null;
    /**
     * The data needed to update a documentation.
     */
    data: XOR<documentationUpdateInput, documentationUncheckedUpdateInput>;
    /**
     * Choose, which documentation to update.
     */
    where: documentationWhereUniqueInput;
  };

  /**
   * documentation updateMany
   */
  export type documentationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update documentations.
     */
    data: XOR<documentationUpdateManyMutationInput, documentationUncheckedUpdateManyInput>;
    /**
     * Filter which documentations to update
     */
    where?: documentationWhereInput;
  };

  /**
   * documentation upsert
   */
  export type documentationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentation
     */
    select?: documentationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: documentationInclude<ExtArgs> | null;
    /**
     * The filter to search for the documentation to update in case it exists.
     */
    where: documentationWhereUniqueInput;
    /**
     * In case the documentation found by the `where` argument doesn't exist, create a new documentation with this data.
     */
    create: XOR<documentationCreateInput, documentationUncheckedCreateInput>;
    /**
     * In case the documentation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<documentationUpdateInput, documentationUncheckedUpdateInput>;
  };

  /**
   * documentation delete
   */
  export type documentationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentation
     */
    select?: documentationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: documentationInclude<ExtArgs> | null;
    /**
     * Filter which documentation to delete.
     */
    where: documentationWhereUniqueInput;
  };

  /**
   * documentation deleteMany
   */
  export type documentationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which documentations to delete
     */
    where?: documentationWhereInput;
  };

  /**
   * documentation without action
   */
  export type documentationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentation
     */
    select?: documentationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: documentationInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const Ai_modelScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    company_id: 'company_id';
    type: 'type';
    compliance_score: 'compliance_score';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Ai_modelScalarFieldEnum = (typeof Ai_modelScalarFieldEnum)[keyof typeof Ai_modelScalarFieldEnum];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    tenant_id: 'tenant_id';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const Compliance_testScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    result: 'result';
    ai_model_id: 'ai_model_id';
    test_passed: 'test_passed';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Compliance_testScalarFieldEnum =
    (typeof Compliance_testScalarFieldEnum)[keyof typeof Compliance_testScalarFieldEnum];

  export const DocumentationScalarFieldEnum: {
    id: 'id';
    name: 'name';
    content: 'content';
    ai_model_id: 'ai_model_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type DocumentationScalarFieldEnum =
    (typeof DocumentationScalarFieldEnum)[keyof typeof DocumentationScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Deep Input Types
   */

  export type ai_modelWhereInput = {
    AND?: ai_modelWhereInput | ai_modelWhereInput[];
    OR?: ai_modelWhereInput[];
    NOT?: ai_modelWhereInput | ai_modelWhereInput[];
    id?: UuidFilter<'ai_model'> | string;
    name?: StringFilter<'ai_model'> | string;
    description?: StringNullableFilter<'ai_model'> | string | null;
    company_id?: UuidFilter<'ai_model'> | string;
    type?: StringFilter<'ai_model'> | string;
    compliance_score?: FloatFilter<'ai_model'> | number;
    created_at?: DateTimeFilter<'ai_model'> | Date | string;
    updated_at?: DateTimeFilter<'ai_model'> | Date | string;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
    compliance_test?: Compliance_testListRelationFilter;
    documentation?: DocumentationListRelationFilter;
  };

  export type ai_modelOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    company_id?: SortOrder;
    type?: SortOrder;
    compliance_score?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByWithRelationInput;
    compliance_test?: compliance_testOrderByRelationAggregateInput;
    documentation?: documentationOrderByRelationAggregateInput;
  };

  export type ai_modelWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ai_modelWhereInput | ai_modelWhereInput[];
      OR?: ai_modelWhereInput[];
      NOT?: ai_modelWhereInput | ai_modelWhereInput[];
      name?: StringFilter<'ai_model'> | string;
      description?: StringNullableFilter<'ai_model'> | string | null;
      company_id?: UuidFilter<'ai_model'> | string;
      type?: StringFilter<'ai_model'> | string;
      compliance_score?: FloatFilter<'ai_model'> | number;
      created_at?: DateTimeFilter<'ai_model'> | Date | string;
      updated_at?: DateTimeFilter<'ai_model'> | Date | string;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
      compliance_test?: Compliance_testListRelationFilter;
      documentation?: DocumentationListRelationFilter;
    },
    'id'
  >;

  export type ai_modelOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    company_id?: SortOrder;
    type?: SortOrder;
    compliance_score?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: ai_modelCountOrderByAggregateInput;
    _avg?: ai_modelAvgOrderByAggregateInput;
    _max?: ai_modelMaxOrderByAggregateInput;
    _min?: ai_modelMinOrderByAggregateInput;
    _sum?: ai_modelSumOrderByAggregateInput;
  };

  export type ai_modelScalarWhereWithAggregatesInput = {
    AND?: ai_modelScalarWhereWithAggregatesInput | ai_modelScalarWhereWithAggregatesInput[];
    OR?: ai_modelScalarWhereWithAggregatesInput[];
    NOT?: ai_modelScalarWhereWithAggregatesInput | ai_modelScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'ai_model'> | string;
    name?: StringWithAggregatesFilter<'ai_model'> | string;
    description?: StringNullableWithAggregatesFilter<'ai_model'> | string | null;
    company_id?: UuidWithAggregatesFilter<'ai_model'> | string;
    type?: StringWithAggregatesFilter<'ai_model'> | string;
    compliance_score?: FloatWithAggregatesFilter<'ai_model'> | number;
    created_at?: DateTimeWithAggregatesFilter<'ai_model'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'ai_model'> | Date | string;
  };

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    tenant_id?: StringFilter<'company'> | string;
    ai_model?: Ai_modelListRelationFilter;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
    ai_model?: ai_modelOrderByRelationAggregateInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      tenant_id?: StringFilter<'company'> | string;
      ai_model?: Ai_modelListRelationFilter;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    tenant_id?: StringWithAggregatesFilter<'company'> | string;
  };

  export type compliance_testWhereInput = {
    AND?: compliance_testWhereInput | compliance_testWhereInput[];
    OR?: compliance_testWhereInput[];
    NOT?: compliance_testWhereInput | compliance_testWhereInput[];
    id?: UuidFilter<'compliance_test'> | string;
    name?: StringFilter<'compliance_test'> | string;
    description?: StringNullableFilter<'compliance_test'> | string | null;
    result?: BoolNullableFilter<'compliance_test'> | boolean | null;
    ai_model_id?: UuidFilter<'compliance_test'> | string;
    test_passed?: BoolFilter<'compliance_test'> | boolean;
    created_at?: DateTimeFilter<'compliance_test'> | Date | string;
    updated_at?: DateTimeFilter<'compliance_test'> | Date | string;
    ai_model?: XOR<Ai_modelRelationFilter, ai_modelWhereInput>;
  };

  export type compliance_testOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    result?: SortOrderInput | SortOrder;
    ai_model_id?: SortOrder;
    test_passed?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    ai_model?: ai_modelOrderByWithRelationInput;
  };

  export type compliance_testWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: compliance_testWhereInput | compliance_testWhereInput[];
      OR?: compliance_testWhereInput[];
      NOT?: compliance_testWhereInput | compliance_testWhereInput[];
      name?: StringFilter<'compliance_test'> | string;
      description?: StringNullableFilter<'compliance_test'> | string | null;
      result?: BoolNullableFilter<'compliance_test'> | boolean | null;
      ai_model_id?: UuidFilter<'compliance_test'> | string;
      test_passed?: BoolFilter<'compliance_test'> | boolean;
      created_at?: DateTimeFilter<'compliance_test'> | Date | string;
      updated_at?: DateTimeFilter<'compliance_test'> | Date | string;
      ai_model?: XOR<Ai_modelRelationFilter, ai_modelWhereInput>;
    },
    'id'
  >;

  export type compliance_testOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    result?: SortOrderInput | SortOrder;
    ai_model_id?: SortOrder;
    test_passed?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: compliance_testCountOrderByAggregateInput;
    _max?: compliance_testMaxOrderByAggregateInput;
    _min?: compliance_testMinOrderByAggregateInput;
  };

  export type compliance_testScalarWhereWithAggregatesInput = {
    AND?: compliance_testScalarWhereWithAggregatesInput | compliance_testScalarWhereWithAggregatesInput[];
    OR?: compliance_testScalarWhereWithAggregatesInput[];
    NOT?: compliance_testScalarWhereWithAggregatesInput | compliance_testScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'compliance_test'> | string;
    name?: StringWithAggregatesFilter<'compliance_test'> | string;
    description?: StringNullableWithAggregatesFilter<'compliance_test'> | string | null;
    result?: BoolNullableWithAggregatesFilter<'compliance_test'> | boolean | null;
    ai_model_id?: UuidWithAggregatesFilter<'compliance_test'> | string;
    test_passed?: BoolWithAggregatesFilter<'compliance_test'> | boolean;
    created_at?: DateTimeWithAggregatesFilter<'compliance_test'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'compliance_test'> | Date | string;
  };

  export type documentationWhereInput = {
    AND?: documentationWhereInput | documentationWhereInput[];
    OR?: documentationWhereInput[];
    NOT?: documentationWhereInput | documentationWhereInput[];
    id?: UuidFilter<'documentation'> | string;
    name?: StringFilter<'documentation'> | string;
    content?: StringNullableFilter<'documentation'> | string | null;
    ai_model_id?: UuidFilter<'documentation'> | string;
    created_at?: DateTimeFilter<'documentation'> | Date | string;
    updated_at?: DateTimeFilter<'documentation'> | Date | string;
    ai_model?: XOR<Ai_modelRelationFilter, ai_modelWhereInput>;
  };

  export type documentationOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    content?: SortOrderInput | SortOrder;
    ai_model_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    ai_model?: ai_modelOrderByWithRelationInput;
  };

  export type documentationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: documentationWhereInput | documentationWhereInput[];
      OR?: documentationWhereInput[];
      NOT?: documentationWhereInput | documentationWhereInput[];
      name?: StringFilter<'documentation'> | string;
      content?: StringNullableFilter<'documentation'> | string | null;
      ai_model_id?: UuidFilter<'documentation'> | string;
      created_at?: DateTimeFilter<'documentation'> | Date | string;
      updated_at?: DateTimeFilter<'documentation'> | Date | string;
      ai_model?: XOR<Ai_modelRelationFilter, ai_modelWhereInput>;
    },
    'id'
  >;

  export type documentationOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    content?: SortOrderInput | SortOrder;
    ai_model_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: documentationCountOrderByAggregateInput;
    _max?: documentationMaxOrderByAggregateInput;
    _min?: documentationMinOrderByAggregateInput;
  };

  export type documentationScalarWhereWithAggregatesInput = {
    AND?: documentationScalarWhereWithAggregatesInput | documentationScalarWhereWithAggregatesInput[];
    OR?: documentationScalarWhereWithAggregatesInput[];
    NOT?: documentationScalarWhereWithAggregatesInput | documentationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'documentation'> | string;
    name?: StringWithAggregatesFilter<'documentation'> | string;
    content?: StringNullableWithAggregatesFilter<'documentation'> | string | null;
    ai_model_id?: UuidWithAggregatesFilter<'documentation'> | string;
    created_at?: DateTimeWithAggregatesFilter<'documentation'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'documentation'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type ai_modelCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    type: string;
    compliance_score: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutAi_modelInput;
    compliance_test?: compliance_testCreateNestedManyWithoutAi_modelInput;
    documentation?: documentationCreateNestedManyWithoutAi_modelInput;
  };

  export type ai_modelUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    company_id: string;
    type: string;
    compliance_score: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    compliance_test?: compliance_testUncheckedCreateNestedManyWithoutAi_modelInput;
    documentation?: documentationUncheckedCreateNestedManyWithoutAi_modelInput;
  };

  export type ai_modelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: StringFieldUpdateOperationsInput | string;
    compliance_score?: FloatFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutAi_modelNestedInput;
    compliance_test?: compliance_testUpdateManyWithoutAi_modelNestedInput;
    documentation?: documentationUpdateManyWithoutAi_modelNestedInput;
  };

  export type ai_modelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    compliance_score?: FloatFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    compliance_test?: compliance_testUncheckedUpdateManyWithoutAi_modelNestedInput;
    documentation?: documentationUncheckedUpdateManyWithoutAi_modelNestedInput;
  };

  export type ai_modelCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    company_id: string;
    type: string;
    compliance_score: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ai_modelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: StringFieldUpdateOperationsInput | string;
    compliance_score?: FloatFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ai_modelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    compliance_score?: FloatFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    ai_model?: ai_modelCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    ai_model?: ai_modelUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    ai_model?: ai_modelUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    ai_model?: ai_modelUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type compliance_testCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    result?: boolean | null;
    test_passed: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    ai_model: ai_modelCreateNestedOneWithoutCompliance_testInput;
  };

  export type compliance_testUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    result?: boolean | null;
    ai_model_id: string;
    test_passed: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type compliance_testUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    result?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    test_passed?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    ai_model?: ai_modelUpdateOneRequiredWithoutCompliance_testNestedInput;
  };

  export type compliance_testUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    result?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    ai_model_id?: StringFieldUpdateOperationsInput | string;
    test_passed?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type compliance_testCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    result?: boolean | null;
    ai_model_id: string;
    test_passed: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type compliance_testUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    result?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    test_passed?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type compliance_testUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    result?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    ai_model_id?: StringFieldUpdateOperationsInput | string;
    test_passed?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type documentationCreateInput = {
    id?: string;
    name: string;
    content?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    ai_model: ai_modelCreateNestedOneWithoutDocumentationInput;
  };

  export type documentationUncheckedCreateInput = {
    id?: string;
    name: string;
    content?: string | null;
    ai_model_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type documentationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    ai_model?: ai_modelUpdateOneRequiredWithoutDocumentationNestedInput;
  };

  export type documentationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    ai_model_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type documentationCreateManyInput = {
    id?: string;
    name: string;
    content?: string | null;
    ai_model_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type documentationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type documentationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    ai_model_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type CompanyRelationFilter = {
    is?: companyWhereInput;
    isNot?: companyWhereInput;
  };

  export type Compliance_testListRelationFilter = {
    every?: compliance_testWhereInput;
    some?: compliance_testWhereInput;
    none?: compliance_testWhereInput;
  };

  export type DocumentationListRelationFilter = {
    every?: documentationWhereInput;
    some?: documentationWhereInput;
    none?: documentationWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type compliance_testOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type documentationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ai_modelCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    company_id?: SortOrder;
    type?: SortOrder;
    compliance_score?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ai_modelAvgOrderByAggregateInput = {
    compliance_score?: SortOrder;
  };

  export type ai_modelMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    company_id?: SortOrder;
    type?: SortOrder;
    compliance_score?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ai_modelMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    company_id?: SortOrder;
    type?: SortOrder;
    compliance_score?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ai_modelSumOrderByAggregateInput = {
    compliance_score?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type Ai_modelListRelationFilter = {
    every?: ai_modelWhereInput;
    some?: ai_modelWhereInput;
    none?: ai_modelWhereInput;
  };

  export type ai_modelOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type Ai_modelRelationFilter = {
    is?: ai_modelWhereInput;
    isNot?: ai_modelWhereInput;
  };

  export type compliance_testCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    result?: SortOrder;
    ai_model_id?: SortOrder;
    test_passed?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type compliance_testMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    result?: SortOrder;
    ai_model_id?: SortOrder;
    test_passed?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type compliance_testMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    result?: SortOrder;
    ai_model_id?: SortOrder;
    test_passed?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedBoolNullableFilter<$PrismaModel>;
    _max?: NestedBoolNullableFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type documentationCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    content?: SortOrder;
    ai_model_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type documentationMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    content?: SortOrder;
    ai_model_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type documentationMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    content?: SortOrder;
    ai_model_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type companyCreateNestedOneWithoutAi_modelInput = {
    create?: XOR<companyCreateWithoutAi_modelInput, companyUncheckedCreateWithoutAi_modelInput>;
    connectOrCreate?: companyCreateOrConnectWithoutAi_modelInput;
    connect?: companyWhereUniqueInput;
  };

  export type compliance_testCreateNestedManyWithoutAi_modelInput = {
    create?:
      | XOR<compliance_testCreateWithoutAi_modelInput, compliance_testUncheckedCreateWithoutAi_modelInput>
      | compliance_testCreateWithoutAi_modelInput[]
      | compliance_testUncheckedCreateWithoutAi_modelInput[];
    connectOrCreate?:
      | compliance_testCreateOrConnectWithoutAi_modelInput
      | compliance_testCreateOrConnectWithoutAi_modelInput[];
    createMany?: compliance_testCreateManyAi_modelInputEnvelope;
    connect?: compliance_testWhereUniqueInput | compliance_testWhereUniqueInput[];
  };

  export type documentationCreateNestedManyWithoutAi_modelInput = {
    create?:
      | XOR<documentationCreateWithoutAi_modelInput, documentationUncheckedCreateWithoutAi_modelInput>
      | documentationCreateWithoutAi_modelInput[]
      | documentationUncheckedCreateWithoutAi_modelInput[];
    connectOrCreate?:
      | documentationCreateOrConnectWithoutAi_modelInput
      | documentationCreateOrConnectWithoutAi_modelInput[];
    createMany?: documentationCreateManyAi_modelInputEnvelope;
    connect?: documentationWhereUniqueInput | documentationWhereUniqueInput[];
  };

  export type compliance_testUncheckedCreateNestedManyWithoutAi_modelInput = {
    create?:
      | XOR<compliance_testCreateWithoutAi_modelInput, compliance_testUncheckedCreateWithoutAi_modelInput>
      | compliance_testCreateWithoutAi_modelInput[]
      | compliance_testUncheckedCreateWithoutAi_modelInput[];
    connectOrCreate?:
      | compliance_testCreateOrConnectWithoutAi_modelInput
      | compliance_testCreateOrConnectWithoutAi_modelInput[];
    createMany?: compliance_testCreateManyAi_modelInputEnvelope;
    connect?: compliance_testWhereUniqueInput | compliance_testWhereUniqueInput[];
  };

  export type documentationUncheckedCreateNestedManyWithoutAi_modelInput = {
    create?:
      | XOR<documentationCreateWithoutAi_modelInput, documentationUncheckedCreateWithoutAi_modelInput>
      | documentationCreateWithoutAi_modelInput[]
      | documentationUncheckedCreateWithoutAi_modelInput[];
    connectOrCreate?:
      | documentationCreateOrConnectWithoutAi_modelInput
      | documentationCreateOrConnectWithoutAi_modelInput[];
    createMany?: documentationCreateManyAi_modelInputEnvelope;
    connect?: documentationWhereUniqueInput | documentationWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type companyUpdateOneRequiredWithoutAi_modelNestedInput = {
    create?: XOR<companyCreateWithoutAi_modelInput, companyUncheckedCreateWithoutAi_modelInput>;
    connectOrCreate?: companyCreateOrConnectWithoutAi_modelInput;
    upsert?: companyUpsertWithoutAi_modelInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutAi_modelInput, companyUpdateWithoutAi_modelInput>,
      companyUncheckedUpdateWithoutAi_modelInput
    >;
  };

  export type compliance_testUpdateManyWithoutAi_modelNestedInput = {
    create?:
      | XOR<compliance_testCreateWithoutAi_modelInput, compliance_testUncheckedCreateWithoutAi_modelInput>
      | compliance_testCreateWithoutAi_modelInput[]
      | compliance_testUncheckedCreateWithoutAi_modelInput[];
    connectOrCreate?:
      | compliance_testCreateOrConnectWithoutAi_modelInput
      | compliance_testCreateOrConnectWithoutAi_modelInput[];
    upsert?:
      | compliance_testUpsertWithWhereUniqueWithoutAi_modelInput
      | compliance_testUpsertWithWhereUniqueWithoutAi_modelInput[];
    createMany?: compliance_testCreateManyAi_modelInputEnvelope;
    set?: compliance_testWhereUniqueInput | compliance_testWhereUniqueInput[];
    disconnect?: compliance_testWhereUniqueInput | compliance_testWhereUniqueInput[];
    delete?: compliance_testWhereUniqueInput | compliance_testWhereUniqueInput[];
    connect?: compliance_testWhereUniqueInput | compliance_testWhereUniqueInput[];
    update?:
      | compliance_testUpdateWithWhereUniqueWithoutAi_modelInput
      | compliance_testUpdateWithWhereUniqueWithoutAi_modelInput[];
    updateMany?:
      | compliance_testUpdateManyWithWhereWithoutAi_modelInput
      | compliance_testUpdateManyWithWhereWithoutAi_modelInput[];
    deleteMany?: compliance_testScalarWhereInput | compliance_testScalarWhereInput[];
  };

  export type documentationUpdateManyWithoutAi_modelNestedInput = {
    create?:
      | XOR<documentationCreateWithoutAi_modelInput, documentationUncheckedCreateWithoutAi_modelInput>
      | documentationCreateWithoutAi_modelInput[]
      | documentationUncheckedCreateWithoutAi_modelInput[];
    connectOrCreate?:
      | documentationCreateOrConnectWithoutAi_modelInput
      | documentationCreateOrConnectWithoutAi_modelInput[];
    upsert?:
      | documentationUpsertWithWhereUniqueWithoutAi_modelInput
      | documentationUpsertWithWhereUniqueWithoutAi_modelInput[];
    createMany?: documentationCreateManyAi_modelInputEnvelope;
    set?: documentationWhereUniqueInput | documentationWhereUniqueInput[];
    disconnect?: documentationWhereUniqueInput | documentationWhereUniqueInput[];
    delete?: documentationWhereUniqueInput | documentationWhereUniqueInput[];
    connect?: documentationWhereUniqueInput | documentationWhereUniqueInput[];
    update?:
      | documentationUpdateWithWhereUniqueWithoutAi_modelInput
      | documentationUpdateWithWhereUniqueWithoutAi_modelInput[];
    updateMany?:
      | documentationUpdateManyWithWhereWithoutAi_modelInput
      | documentationUpdateManyWithWhereWithoutAi_modelInput[];
    deleteMany?: documentationScalarWhereInput | documentationScalarWhereInput[];
  };

  export type compliance_testUncheckedUpdateManyWithoutAi_modelNestedInput = {
    create?:
      | XOR<compliance_testCreateWithoutAi_modelInput, compliance_testUncheckedCreateWithoutAi_modelInput>
      | compliance_testCreateWithoutAi_modelInput[]
      | compliance_testUncheckedCreateWithoutAi_modelInput[];
    connectOrCreate?:
      | compliance_testCreateOrConnectWithoutAi_modelInput
      | compliance_testCreateOrConnectWithoutAi_modelInput[];
    upsert?:
      | compliance_testUpsertWithWhereUniqueWithoutAi_modelInput
      | compliance_testUpsertWithWhereUniqueWithoutAi_modelInput[];
    createMany?: compliance_testCreateManyAi_modelInputEnvelope;
    set?: compliance_testWhereUniqueInput | compliance_testWhereUniqueInput[];
    disconnect?: compliance_testWhereUniqueInput | compliance_testWhereUniqueInput[];
    delete?: compliance_testWhereUniqueInput | compliance_testWhereUniqueInput[];
    connect?: compliance_testWhereUniqueInput | compliance_testWhereUniqueInput[];
    update?:
      | compliance_testUpdateWithWhereUniqueWithoutAi_modelInput
      | compliance_testUpdateWithWhereUniqueWithoutAi_modelInput[];
    updateMany?:
      | compliance_testUpdateManyWithWhereWithoutAi_modelInput
      | compliance_testUpdateManyWithWhereWithoutAi_modelInput[];
    deleteMany?: compliance_testScalarWhereInput | compliance_testScalarWhereInput[];
  };

  export type documentationUncheckedUpdateManyWithoutAi_modelNestedInput = {
    create?:
      | XOR<documentationCreateWithoutAi_modelInput, documentationUncheckedCreateWithoutAi_modelInput>
      | documentationCreateWithoutAi_modelInput[]
      | documentationUncheckedCreateWithoutAi_modelInput[];
    connectOrCreate?:
      | documentationCreateOrConnectWithoutAi_modelInput
      | documentationCreateOrConnectWithoutAi_modelInput[];
    upsert?:
      | documentationUpsertWithWhereUniqueWithoutAi_modelInput
      | documentationUpsertWithWhereUniqueWithoutAi_modelInput[];
    createMany?: documentationCreateManyAi_modelInputEnvelope;
    set?: documentationWhereUniqueInput | documentationWhereUniqueInput[];
    disconnect?: documentationWhereUniqueInput | documentationWhereUniqueInput[];
    delete?: documentationWhereUniqueInput | documentationWhereUniqueInput[];
    connect?: documentationWhereUniqueInput | documentationWhereUniqueInput[];
    update?:
      | documentationUpdateWithWhereUniqueWithoutAi_modelInput
      | documentationUpdateWithWhereUniqueWithoutAi_modelInput[];
    updateMany?:
      | documentationUpdateManyWithWhereWithoutAi_modelInput
      | documentationUpdateManyWithWhereWithoutAi_modelInput[];
    deleteMany?: documentationScalarWhereInput | documentationScalarWhereInput[];
  };

  export type ai_modelCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<ai_modelCreateWithoutCompanyInput, ai_modelUncheckedCreateWithoutCompanyInput>
      | ai_modelCreateWithoutCompanyInput[]
      | ai_modelUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: ai_modelCreateOrConnectWithoutCompanyInput | ai_modelCreateOrConnectWithoutCompanyInput[];
    createMany?: ai_modelCreateManyCompanyInputEnvelope;
    connect?: ai_modelWhereUniqueInput | ai_modelWhereUniqueInput[];
  };

  export type ai_modelUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<ai_modelCreateWithoutCompanyInput, ai_modelUncheckedCreateWithoutCompanyInput>
      | ai_modelCreateWithoutCompanyInput[]
      | ai_modelUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: ai_modelCreateOrConnectWithoutCompanyInput | ai_modelCreateOrConnectWithoutCompanyInput[];
    createMany?: ai_modelCreateManyCompanyInputEnvelope;
    connect?: ai_modelWhereUniqueInput | ai_modelWhereUniqueInput[];
  };

  export type ai_modelUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<ai_modelCreateWithoutCompanyInput, ai_modelUncheckedCreateWithoutCompanyInput>
      | ai_modelCreateWithoutCompanyInput[]
      | ai_modelUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: ai_modelCreateOrConnectWithoutCompanyInput | ai_modelCreateOrConnectWithoutCompanyInput[];
    upsert?: ai_modelUpsertWithWhereUniqueWithoutCompanyInput | ai_modelUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: ai_modelCreateManyCompanyInputEnvelope;
    set?: ai_modelWhereUniqueInput | ai_modelWhereUniqueInput[];
    disconnect?: ai_modelWhereUniqueInput | ai_modelWhereUniqueInput[];
    delete?: ai_modelWhereUniqueInput | ai_modelWhereUniqueInput[];
    connect?: ai_modelWhereUniqueInput | ai_modelWhereUniqueInput[];
    update?: ai_modelUpdateWithWhereUniqueWithoutCompanyInput | ai_modelUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: ai_modelUpdateManyWithWhereWithoutCompanyInput | ai_modelUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: ai_modelScalarWhereInput | ai_modelScalarWhereInput[];
  };

  export type ai_modelUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<ai_modelCreateWithoutCompanyInput, ai_modelUncheckedCreateWithoutCompanyInput>
      | ai_modelCreateWithoutCompanyInput[]
      | ai_modelUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: ai_modelCreateOrConnectWithoutCompanyInput | ai_modelCreateOrConnectWithoutCompanyInput[];
    upsert?: ai_modelUpsertWithWhereUniqueWithoutCompanyInput | ai_modelUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: ai_modelCreateManyCompanyInputEnvelope;
    set?: ai_modelWhereUniqueInput | ai_modelWhereUniqueInput[];
    disconnect?: ai_modelWhereUniqueInput | ai_modelWhereUniqueInput[];
    delete?: ai_modelWhereUniqueInput | ai_modelWhereUniqueInput[];
    connect?: ai_modelWhereUniqueInput | ai_modelWhereUniqueInput[];
    update?: ai_modelUpdateWithWhereUniqueWithoutCompanyInput | ai_modelUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: ai_modelUpdateManyWithWhereWithoutCompanyInput | ai_modelUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: ai_modelScalarWhereInput | ai_modelScalarWhereInput[];
  };

  export type ai_modelCreateNestedOneWithoutCompliance_testInput = {
    create?: XOR<ai_modelCreateWithoutCompliance_testInput, ai_modelUncheckedCreateWithoutCompliance_testInput>;
    connectOrCreate?: ai_modelCreateOrConnectWithoutCompliance_testInput;
    connect?: ai_modelWhereUniqueInput;
  };

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type ai_modelUpdateOneRequiredWithoutCompliance_testNestedInput = {
    create?: XOR<ai_modelCreateWithoutCompliance_testInput, ai_modelUncheckedCreateWithoutCompliance_testInput>;
    connectOrCreate?: ai_modelCreateOrConnectWithoutCompliance_testInput;
    upsert?: ai_modelUpsertWithoutCompliance_testInput;
    connect?: ai_modelWhereUniqueInput;
    update?: XOR<
      XOR<ai_modelUpdateToOneWithWhereWithoutCompliance_testInput, ai_modelUpdateWithoutCompliance_testInput>,
      ai_modelUncheckedUpdateWithoutCompliance_testInput
    >;
  };

  export type ai_modelCreateNestedOneWithoutDocumentationInput = {
    create?: XOR<ai_modelCreateWithoutDocumentationInput, ai_modelUncheckedCreateWithoutDocumentationInput>;
    connectOrCreate?: ai_modelCreateOrConnectWithoutDocumentationInput;
    connect?: ai_modelWhereUniqueInput;
  };

  export type ai_modelUpdateOneRequiredWithoutDocumentationNestedInput = {
    create?: XOR<ai_modelCreateWithoutDocumentationInput, ai_modelUncheckedCreateWithoutDocumentationInput>;
    connectOrCreate?: ai_modelCreateOrConnectWithoutDocumentationInput;
    upsert?: ai_modelUpsertWithoutDocumentationInput;
    connect?: ai_modelWhereUniqueInput;
    update?: XOR<
      XOR<ai_modelUpdateToOneWithWhereWithoutDocumentationInput, ai_modelUpdateWithoutDocumentationInput>,
      ai_modelUncheckedUpdateWithoutDocumentationInput
    >;
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedBoolNullableFilter<$PrismaModel>;
    _max?: NestedBoolNullableFilter<$PrismaModel>;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type companyCreateWithoutAi_modelInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyUncheckedCreateWithoutAi_modelInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyCreateOrConnectWithoutAi_modelInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutAi_modelInput, companyUncheckedCreateWithoutAi_modelInput>;
  };

  export type compliance_testCreateWithoutAi_modelInput = {
    id?: string;
    name: string;
    description?: string | null;
    result?: boolean | null;
    test_passed: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type compliance_testUncheckedCreateWithoutAi_modelInput = {
    id?: string;
    name: string;
    description?: string | null;
    result?: boolean | null;
    test_passed: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type compliance_testCreateOrConnectWithoutAi_modelInput = {
    where: compliance_testWhereUniqueInput;
    create: XOR<compliance_testCreateWithoutAi_modelInput, compliance_testUncheckedCreateWithoutAi_modelInput>;
  };

  export type compliance_testCreateManyAi_modelInputEnvelope = {
    data: compliance_testCreateManyAi_modelInput | compliance_testCreateManyAi_modelInput[];
    skipDuplicates?: boolean;
  };

  export type documentationCreateWithoutAi_modelInput = {
    id?: string;
    name: string;
    content?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type documentationUncheckedCreateWithoutAi_modelInput = {
    id?: string;
    name: string;
    content?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type documentationCreateOrConnectWithoutAi_modelInput = {
    where: documentationWhereUniqueInput;
    create: XOR<documentationCreateWithoutAi_modelInput, documentationUncheckedCreateWithoutAi_modelInput>;
  };

  export type documentationCreateManyAi_modelInputEnvelope = {
    data: documentationCreateManyAi_modelInput | documentationCreateManyAi_modelInput[];
    skipDuplicates?: boolean;
  };

  export type companyUpsertWithoutAi_modelInput = {
    update: XOR<companyUpdateWithoutAi_modelInput, companyUncheckedUpdateWithoutAi_modelInput>;
    create: XOR<companyCreateWithoutAi_modelInput, companyUncheckedCreateWithoutAi_modelInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutAi_modelInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutAi_modelInput, companyUncheckedUpdateWithoutAi_modelInput>;
  };

  export type companyUpdateWithoutAi_modelInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateWithoutAi_modelInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type compliance_testUpsertWithWhereUniqueWithoutAi_modelInput = {
    where: compliance_testWhereUniqueInput;
    update: XOR<compliance_testUpdateWithoutAi_modelInput, compliance_testUncheckedUpdateWithoutAi_modelInput>;
    create: XOR<compliance_testCreateWithoutAi_modelInput, compliance_testUncheckedCreateWithoutAi_modelInput>;
  };

  export type compliance_testUpdateWithWhereUniqueWithoutAi_modelInput = {
    where: compliance_testWhereUniqueInput;
    data: XOR<compliance_testUpdateWithoutAi_modelInput, compliance_testUncheckedUpdateWithoutAi_modelInput>;
  };

  export type compliance_testUpdateManyWithWhereWithoutAi_modelInput = {
    where: compliance_testScalarWhereInput;
    data: XOR<compliance_testUpdateManyMutationInput, compliance_testUncheckedUpdateManyWithoutAi_modelInput>;
  };

  export type compliance_testScalarWhereInput = {
    AND?: compliance_testScalarWhereInput | compliance_testScalarWhereInput[];
    OR?: compliance_testScalarWhereInput[];
    NOT?: compliance_testScalarWhereInput | compliance_testScalarWhereInput[];
    id?: UuidFilter<'compliance_test'> | string;
    name?: StringFilter<'compliance_test'> | string;
    description?: StringNullableFilter<'compliance_test'> | string | null;
    result?: BoolNullableFilter<'compliance_test'> | boolean | null;
    ai_model_id?: UuidFilter<'compliance_test'> | string;
    test_passed?: BoolFilter<'compliance_test'> | boolean;
    created_at?: DateTimeFilter<'compliance_test'> | Date | string;
    updated_at?: DateTimeFilter<'compliance_test'> | Date | string;
  };

  export type documentationUpsertWithWhereUniqueWithoutAi_modelInput = {
    where: documentationWhereUniqueInput;
    update: XOR<documentationUpdateWithoutAi_modelInput, documentationUncheckedUpdateWithoutAi_modelInput>;
    create: XOR<documentationCreateWithoutAi_modelInput, documentationUncheckedCreateWithoutAi_modelInput>;
  };

  export type documentationUpdateWithWhereUniqueWithoutAi_modelInput = {
    where: documentationWhereUniqueInput;
    data: XOR<documentationUpdateWithoutAi_modelInput, documentationUncheckedUpdateWithoutAi_modelInput>;
  };

  export type documentationUpdateManyWithWhereWithoutAi_modelInput = {
    where: documentationScalarWhereInput;
    data: XOR<documentationUpdateManyMutationInput, documentationUncheckedUpdateManyWithoutAi_modelInput>;
  };

  export type documentationScalarWhereInput = {
    AND?: documentationScalarWhereInput | documentationScalarWhereInput[];
    OR?: documentationScalarWhereInput[];
    NOT?: documentationScalarWhereInput | documentationScalarWhereInput[];
    id?: UuidFilter<'documentation'> | string;
    name?: StringFilter<'documentation'> | string;
    content?: StringNullableFilter<'documentation'> | string | null;
    ai_model_id?: UuidFilter<'documentation'> | string;
    created_at?: DateTimeFilter<'documentation'> | Date | string;
    updated_at?: DateTimeFilter<'documentation'> | Date | string;
  };

  export type ai_modelCreateWithoutCompanyInput = {
    id?: string;
    name: string;
    description?: string | null;
    type: string;
    compliance_score: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    compliance_test?: compliance_testCreateNestedManyWithoutAi_modelInput;
    documentation?: documentationCreateNestedManyWithoutAi_modelInput;
  };

  export type ai_modelUncheckedCreateWithoutCompanyInput = {
    id?: string;
    name: string;
    description?: string | null;
    type: string;
    compliance_score: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    compliance_test?: compliance_testUncheckedCreateNestedManyWithoutAi_modelInput;
    documentation?: documentationUncheckedCreateNestedManyWithoutAi_modelInput;
  };

  export type ai_modelCreateOrConnectWithoutCompanyInput = {
    where: ai_modelWhereUniqueInput;
    create: XOR<ai_modelCreateWithoutCompanyInput, ai_modelUncheckedCreateWithoutCompanyInput>;
  };

  export type ai_modelCreateManyCompanyInputEnvelope = {
    data: ai_modelCreateManyCompanyInput | ai_modelCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type ai_modelUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ai_modelWhereUniqueInput;
    update: XOR<ai_modelUpdateWithoutCompanyInput, ai_modelUncheckedUpdateWithoutCompanyInput>;
    create: XOR<ai_modelCreateWithoutCompanyInput, ai_modelUncheckedCreateWithoutCompanyInput>;
  };

  export type ai_modelUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ai_modelWhereUniqueInput;
    data: XOR<ai_modelUpdateWithoutCompanyInput, ai_modelUncheckedUpdateWithoutCompanyInput>;
  };

  export type ai_modelUpdateManyWithWhereWithoutCompanyInput = {
    where: ai_modelScalarWhereInput;
    data: XOR<ai_modelUpdateManyMutationInput, ai_modelUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type ai_modelScalarWhereInput = {
    AND?: ai_modelScalarWhereInput | ai_modelScalarWhereInput[];
    OR?: ai_modelScalarWhereInput[];
    NOT?: ai_modelScalarWhereInput | ai_modelScalarWhereInput[];
    id?: UuidFilter<'ai_model'> | string;
    name?: StringFilter<'ai_model'> | string;
    description?: StringNullableFilter<'ai_model'> | string | null;
    company_id?: UuidFilter<'ai_model'> | string;
    type?: StringFilter<'ai_model'> | string;
    compliance_score?: FloatFilter<'ai_model'> | number;
    created_at?: DateTimeFilter<'ai_model'> | Date | string;
    updated_at?: DateTimeFilter<'ai_model'> | Date | string;
  };

  export type ai_modelCreateWithoutCompliance_testInput = {
    id?: string;
    name: string;
    description?: string | null;
    type: string;
    compliance_score: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutAi_modelInput;
    documentation?: documentationCreateNestedManyWithoutAi_modelInput;
  };

  export type ai_modelUncheckedCreateWithoutCompliance_testInput = {
    id?: string;
    name: string;
    description?: string | null;
    company_id: string;
    type: string;
    compliance_score: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    documentation?: documentationUncheckedCreateNestedManyWithoutAi_modelInput;
  };

  export type ai_modelCreateOrConnectWithoutCompliance_testInput = {
    where: ai_modelWhereUniqueInput;
    create: XOR<ai_modelCreateWithoutCompliance_testInput, ai_modelUncheckedCreateWithoutCompliance_testInput>;
  };

  export type ai_modelUpsertWithoutCompliance_testInput = {
    update: XOR<ai_modelUpdateWithoutCompliance_testInput, ai_modelUncheckedUpdateWithoutCompliance_testInput>;
    create: XOR<ai_modelCreateWithoutCompliance_testInput, ai_modelUncheckedCreateWithoutCompliance_testInput>;
    where?: ai_modelWhereInput;
  };

  export type ai_modelUpdateToOneWithWhereWithoutCompliance_testInput = {
    where?: ai_modelWhereInput;
    data: XOR<ai_modelUpdateWithoutCompliance_testInput, ai_modelUncheckedUpdateWithoutCompliance_testInput>;
  };

  export type ai_modelUpdateWithoutCompliance_testInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: StringFieldUpdateOperationsInput | string;
    compliance_score?: FloatFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutAi_modelNestedInput;
    documentation?: documentationUpdateManyWithoutAi_modelNestedInput;
  };

  export type ai_modelUncheckedUpdateWithoutCompliance_testInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    compliance_score?: FloatFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    documentation?: documentationUncheckedUpdateManyWithoutAi_modelNestedInput;
  };

  export type ai_modelCreateWithoutDocumentationInput = {
    id?: string;
    name: string;
    description?: string | null;
    type: string;
    compliance_score: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutAi_modelInput;
    compliance_test?: compliance_testCreateNestedManyWithoutAi_modelInput;
  };

  export type ai_modelUncheckedCreateWithoutDocumentationInput = {
    id?: string;
    name: string;
    description?: string | null;
    company_id: string;
    type: string;
    compliance_score: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    compliance_test?: compliance_testUncheckedCreateNestedManyWithoutAi_modelInput;
  };

  export type ai_modelCreateOrConnectWithoutDocumentationInput = {
    where: ai_modelWhereUniqueInput;
    create: XOR<ai_modelCreateWithoutDocumentationInput, ai_modelUncheckedCreateWithoutDocumentationInput>;
  };

  export type ai_modelUpsertWithoutDocumentationInput = {
    update: XOR<ai_modelUpdateWithoutDocumentationInput, ai_modelUncheckedUpdateWithoutDocumentationInput>;
    create: XOR<ai_modelCreateWithoutDocumentationInput, ai_modelUncheckedCreateWithoutDocumentationInput>;
    where?: ai_modelWhereInput;
  };

  export type ai_modelUpdateToOneWithWhereWithoutDocumentationInput = {
    where?: ai_modelWhereInput;
    data: XOR<ai_modelUpdateWithoutDocumentationInput, ai_modelUncheckedUpdateWithoutDocumentationInput>;
  };

  export type ai_modelUpdateWithoutDocumentationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: StringFieldUpdateOperationsInput | string;
    compliance_score?: FloatFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutAi_modelNestedInput;
    compliance_test?: compliance_testUpdateManyWithoutAi_modelNestedInput;
  };

  export type ai_modelUncheckedUpdateWithoutDocumentationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    compliance_score?: FloatFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    compliance_test?: compliance_testUncheckedUpdateManyWithoutAi_modelNestedInput;
  };

  export type compliance_testCreateManyAi_modelInput = {
    id?: string;
    name: string;
    description?: string | null;
    result?: boolean | null;
    test_passed: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type documentationCreateManyAi_modelInput = {
    id?: string;
    name: string;
    content?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type compliance_testUpdateWithoutAi_modelInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    result?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    test_passed?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type compliance_testUncheckedUpdateWithoutAi_modelInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    result?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    test_passed?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type compliance_testUncheckedUpdateManyWithoutAi_modelInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    result?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    test_passed?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type documentationUpdateWithoutAi_modelInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type documentationUncheckedUpdateWithoutAi_modelInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type documentationUncheckedUpdateManyWithoutAi_modelInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ai_modelCreateManyCompanyInput = {
    id?: string;
    name: string;
    description?: string | null;
    type: string;
    compliance_score: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ai_modelUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: StringFieldUpdateOperationsInput | string;
    compliance_score?: FloatFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    compliance_test?: compliance_testUpdateManyWithoutAi_modelNestedInput;
    documentation?: documentationUpdateManyWithoutAi_modelNestedInput;
  };

  export type ai_modelUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: StringFieldUpdateOperationsInput | string;
    compliance_score?: FloatFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    compliance_test?: compliance_testUncheckedUpdateManyWithoutAi_modelNestedInput;
    documentation?: documentationUncheckedUpdateManyWithoutAi_modelNestedInput;
  };

  export type ai_modelUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: StringFieldUpdateOperationsInput | string;
    compliance_score?: FloatFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use Ai_modelCountOutputTypeDefaultArgs instead
   */
  export type Ai_modelCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Ai_modelCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
   */
  export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ai_modelDefaultArgs instead
   */
  export type ai_modelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ai_modelDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use compliance_testDefaultArgs instead
   */
  export type compliance_testArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    compliance_testDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use documentationDefaultArgs instead
   */
  export type documentationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    documentationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
