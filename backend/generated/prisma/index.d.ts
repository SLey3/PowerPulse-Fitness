
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model WorkoutTemplate
 * 
 */
export type WorkoutTemplate = $Result.DefaultSelection<Prisma.$WorkoutTemplatePayload>
/**
 * Model WorkoutLog
 * 
 */
export type WorkoutLog = $Result.DefaultSelection<Prisma.$WorkoutLogPayload>
/**
 * Model WorkoutCategory
 * 
 */
export type WorkoutCategory = $Result.DefaultSelection<Prisma.$WorkoutCategoryPayload>
/**
 * Model FitnessGoal
 * 
 */
export type FitnessGoal = $Result.DefaultSelection<Prisma.$FitnessGoalPayload>
/**
 * Model Exercises
 * 
 */
export type Exercises = $Result.DefaultSelection<Prisma.$ExercisesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const GoalStatus: {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type GoalStatus = (typeof GoalStatus)[keyof typeof GoalStatus]


export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type GoalStatus = $Enums.GoalStatus

export const GoalStatus: typeof $Enums.GoalStatus

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

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
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workoutTemplate`: Exposes CRUD operations for the **WorkoutTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkoutTemplates
    * const workoutTemplates = await prisma.workoutTemplate.findMany()
    * ```
    */
  get workoutTemplate(): Prisma.WorkoutTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workoutLog`: Exposes CRUD operations for the **WorkoutLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkoutLogs
    * const workoutLogs = await prisma.workoutLog.findMany()
    * ```
    */
  get workoutLog(): Prisma.WorkoutLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workoutCategory`: Exposes CRUD operations for the **WorkoutCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkoutCategories
    * const workoutCategories = await prisma.workoutCategory.findMany()
    * ```
    */
  get workoutCategory(): Prisma.WorkoutCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fitnessGoal`: Exposes CRUD operations for the **FitnessGoal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FitnessGoals
    * const fitnessGoals = await prisma.fitnessGoal.findMany()
    * ```
    */
  get fitnessGoal(): Prisma.FitnessGoalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exercises`: Exposes CRUD operations for the **Exercises** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercises
    * const exercises = await prisma.exercises.findMany()
    * ```
    */
  get exercises(): Prisma.ExercisesDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    WorkoutTemplate: 'WorkoutTemplate',
    WorkoutLog: 'WorkoutLog',
    WorkoutCategory: 'WorkoutCategory',
    FitnessGoal: 'FitnessGoal',
    Exercises: 'Exercises'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "workoutTemplate" | "workoutLog" | "workoutCategory" | "fitnessGoal" | "exercises"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      WorkoutTemplate: {
        payload: Prisma.$WorkoutTemplatePayload<ExtArgs>
        fields: Prisma.WorkoutTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutTemplatePayload>
          }
          findFirst: {
            args: Prisma.WorkoutTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutTemplatePayload>
          }
          findMany: {
            args: Prisma.WorkoutTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutTemplatePayload>[]
          }
          create: {
            args: Prisma.WorkoutTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutTemplatePayload>
          }
          createMany: {
            args: Prisma.WorkoutTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutTemplatePayload>[]
          }
          delete: {
            args: Prisma.WorkoutTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutTemplatePayload>
          }
          update: {
            args: Prisma.WorkoutTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutTemplatePayload>
          }
          deleteMany: {
            args: Prisma.WorkoutTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutTemplatePayload>[]
          }
          upsert: {
            args: Prisma.WorkoutTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutTemplatePayload>
          }
          aggregate: {
            args: Prisma.WorkoutTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkoutTemplate>
          }
          groupBy: {
            args: Prisma.WorkoutTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutTemplateCountAggregateOutputType> | number
          }
        }
      }
      WorkoutLog: {
        payload: Prisma.$WorkoutLogPayload<ExtArgs>
        fields: Prisma.WorkoutLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>
          }
          findFirst: {
            args: Prisma.WorkoutLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>
          }
          findMany: {
            args: Prisma.WorkoutLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>[]
          }
          create: {
            args: Prisma.WorkoutLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>
          }
          createMany: {
            args: Prisma.WorkoutLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>[]
          }
          delete: {
            args: Prisma.WorkoutLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>
          }
          update: {
            args: Prisma.WorkoutLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>[]
          }
          upsert: {
            args: Prisma.WorkoutLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>
          }
          aggregate: {
            args: Prisma.WorkoutLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkoutLog>
          }
          groupBy: {
            args: Prisma.WorkoutLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutLogCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutLogCountAggregateOutputType> | number
          }
        }
      }
      WorkoutCategory: {
        payload: Prisma.$WorkoutCategoryPayload<ExtArgs>
        fields: Prisma.WorkoutCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutCategoryPayload>
          }
          findFirst: {
            args: Prisma.WorkoutCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutCategoryPayload>
          }
          findMany: {
            args: Prisma.WorkoutCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutCategoryPayload>[]
          }
          create: {
            args: Prisma.WorkoutCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutCategoryPayload>
          }
          createMany: {
            args: Prisma.WorkoutCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutCategoryPayload>[]
          }
          delete: {
            args: Prisma.WorkoutCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutCategoryPayload>
          }
          update: {
            args: Prisma.WorkoutCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutCategoryPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutCategoryPayload>[]
          }
          upsert: {
            args: Prisma.WorkoutCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutCategoryPayload>
          }
          aggregate: {
            args: Prisma.WorkoutCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkoutCategory>
          }
          groupBy: {
            args: Prisma.WorkoutCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutCategoryCountAggregateOutputType> | number
          }
        }
      }
      FitnessGoal: {
        payload: Prisma.$FitnessGoalPayload<ExtArgs>
        fields: Prisma.FitnessGoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FitnessGoalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FitnessGoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FitnessGoalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FitnessGoalPayload>
          }
          findFirst: {
            args: Prisma.FitnessGoalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FitnessGoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FitnessGoalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FitnessGoalPayload>
          }
          findMany: {
            args: Prisma.FitnessGoalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FitnessGoalPayload>[]
          }
          create: {
            args: Prisma.FitnessGoalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FitnessGoalPayload>
          }
          createMany: {
            args: Prisma.FitnessGoalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FitnessGoalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FitnessGoalPayload>[]
          }
          delete: {
            args: Prisma.FitnessGoalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FitnessGoalPayload>
          }
          update: {
            args: Prisma.FitnessGoalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FitnessGoalPayload>
          }
          deleteMany: {
            args: Prisma.FitnessGoalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FitnessGoalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FitnessGoalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FitnessGoalPayload>[]
          }
          upsert: {
            args: Prisma.FitnessGoalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FitnessGoalPayload>
          }
          aggregate: {
            args: Prisma.FitnessGoalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFitnessGoal>
          }
          groupBy: {
            args: Prisma.FitnessGoalGroupByArgs<ExtArgs>
            result: $Utils.Optional<FitnessGoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.FitnessGoalCountArgs<ExtArgs>
            result: $Utils.Optional<FitnessGoalCountAggregateOutputType> | number
          }
        }
      }
      Exercises: {
        payload: Prisma.$ExercisesPayload<ExtArgs>
        fields: Prisma.ExercisesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExercisesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExercisesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisesPayload>
          }
          findFirst: {
            args: Prisma.ExercisesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExercisesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisesPayload>
          }
          findMany: {
            args: Prisma.ExercisesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisesPayload>[]
          }
          create: {
            args: Prisma.ExercisesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisesPayload>
          }
          createMany: {
            args: Prisma.ExercisesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExercisesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisesPayload>[]
          }
          delete: {
            args: Prisma.ExercisesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisesPayload>
          }
          update: {
            args: Prisma.ExercisesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisesPayload>
          }
          deleteMany: {
            args: Prisma.ExercisesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExercisesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExercisesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisesPayload>[]
          }
          upsert: {
            args: Prisma.ExercisesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisesPayload>
          }
          aggregate: {
            args: Prisma.ExercisesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExercises>
          }
          groupBy: {
            args: Prisma.ExercisesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExercisesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExercisesCountArgs<ExtArgs>
            result: $Utils.Optional<ExercisesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    workoutTemplate?: WorkoutTemplateOmit
    workoutLog?: WorkoutLogOmit
    workoutCategory?: WorkoutCategoryOmit
    fitnessGoal?: FitnessGoalOmit
    exercises?: ExercisesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    workoutLogs: number
    workoutTemplates: number
    fitnessGoals: number
    savedExercises: number
    createdCategories: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workoutLogs?: boolean | UserCountOutputTypeCountWorkoutLogsArgs
    workoutTemplates?: boolean | UserCountOutputTypeCountWorkoutTemplatesArgs
    fitnessGoals?: boolean | UserCountOutputTypeCountFitnessGoalsArgs
    savedExercises?: boolean | UserCountOutputTypeCountSavedExercisesArgs
    createdCategories?: boolean | UserCountOutputTypeCountCreatedCategoriesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkoutLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkoutTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutTemplateWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFitnessGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FitnessGoalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavedExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExercisesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutCategoryWhereInput
  }


  /**
   * Count Type WorkoutTemplateCountOutputType
   */

  export type WorkoutTemplateCountOutputType = {
    categories: number
  }

  export type WorkoutTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | WorkoutTemplateCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * WorkoutTemplateCountOutputType without action
   */
  export type WorkoutTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutTemplateCountOutputType
     */
    select?: WorkoutTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkoutTemplateCountOutputType without action
   */
  export type WorkoutTemplateCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutCategoryWhereInput
  }


  /**
   * Count Type WorkoutLogCountOutputType
   */

  export type WorkoutLogCountOutputType = {
    categories: number
  }

  export type WorkoutLogCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | WorkoutLogCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * WorkoutLogCountOutputType without action
   */
  export type WorkoutLogCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLogCountOutputType
     */
    select?: WorkoutLogCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkoutLogCountOutputType without action
   */
  export type WorkoutLogCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutCategoryWhereInput
  }


  /**
   * Count Type WorkoutCategoryCountOutputType
   */

  export type WorkoutCategoryCountOutputType = {
    logs: number
  }

  export type WorkoutCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | WorkoutCategoryCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * WorkoutCategoryCountOutputType without action
   */
  export type WorkoutCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutCategoryCountOutputType
     */
    select?: WorkoutCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkoutCategoryCountOutputType without action
   */
  export type WorkoutCategoryCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutLogWhereInput
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
    id: number | null
    weight: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    weight: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    passwordHash: string | null
    avatarUrl: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    role: $Enums.UserRole | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    weight: number | null
    unitPref: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    passwordHash: string | null
    avatarUrl: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    role: $Enums.UserRole | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    weight: number | null
    unitPref: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    avatarUrl: number
    firstName: number
    lastName: number
    phone: number
    role: number
    isVerified: number
    createdAt: number
    updatedAt: number
    weight: number
    unitPref: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    weight?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    weight?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    avatarUrl?: true
    firstName?: true
    lastName?: true
    phone?: true
    role?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
    weight?: true
    unitPref?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    avatarUrl?: true
    firstName?: true
    lastName?: true
    phone?: true
    role?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
    weight?: true
    unitPref?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    avatarUrl?: true
    firstName?: true
    lastName?: true
    phone?: true
    role?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
    weight?: true
    unitPref?: true
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
    id: number
    email: string
    passwordHash: string
    avatarUrl: string
    firstName: string
    lastName: string
    phone: string | null
    role: $Enums.UserRole
    isVerified: boolean
    createdAt: Date
    updatedAt: Date
    weight: number
    unitPref: string
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
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    avatarUrl?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    role?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    weight?: boolean
    unitPref?: boolean
    workoutLogs?: boolean | User$workoutLogsArgs<ExtArgs>
    workoutTemplates?: boolean | User$workoutTemplatesArgs<ExtArgs>
    fitnessGoals?: boolean | User$fitnessGoalsArgs<ExtArgs>
    savedExercises?: boolean | User$savedExercisesArgs<ExtArgs>
    createdCategories?: boolean | User$createdCategoriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    avatarUrl?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    role?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    weight?: boolean
    unitPref?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    avatarUrl?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    role?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    weight?: boolean
    unitPref?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    avatarUrl?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    role?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    weight?: boolean
    unitPref?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "avatarUrl" | "firstName" | "lastName" | "phone" | "role" | "isVerified" | "createdAt" | "updatedAt" | "weight" | "unitPref", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workoutLogs?: boolean | User$workoutLogsArgs<ExtArgs>
    workoutTemplates?: boolean | User$workoutTemplatesArgs<ExtArgs>
    fitnessGoals?: boolean | User$fitnessGoalsArgs<ExtArgs>
    savedExercises?: boolean | User$savedExercisesArgs<ExtArgs>
    createdCategories?: boolean | User$createdCategoriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      workoutLogs: Prisma.$WorkoutLogPayload<ExtArgs>[]
      workoutTemplates: Prisma.$WorkoutTemplatePayload<ExtArgs>[]
      fitnessGoals: Prisma.$FitnessGoalPayload<ExtArgs>[]
      savedExercises: Prisma.$ExercisesPayload<ExtArgs>[]
      createdCategories: Prisma.$WorkoutCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      passwordHash: string
      avatarUrl: string
      firstName: string
      lastName: string
      phone: string | null
      role: $Enums.UserRole
      isVerified: boolean
      createdAt: Date
      updatedAt: Date
      weight: number
      unitPref: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workoutLogs<T extends User$workoutLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$workoutLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workoutTemplates<T extends User$workoutTemplatesArgs<ExtArgs> = {}>(args?: Subset<T, User$workoutTemplatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fitnessGoals<T extends User$fitnessGoalsArgs<ExtArgs> = {}>(args?: Subset<T, User$fitnessGoalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FitnessGoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    savedExercises<T extends User$savedExercisesArgs<ExtArgs> = {}>(args?: Subset<T, User$savedExercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdCategories<T extends User$createdCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly weight: FieldRef<"User", 'Float'>
    readonly unitPref: FieldRef<"User", 'String'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.workoutLogs
   */
  export type User$workoutLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    where?: WorkoutLogWhereInput
    orderBy?: WorkoutLogOrderByWithRelationInput | WorkoutLogOrderByWithRelationInput[]
    cursor?: WorkoutLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutLogScalarFieldEnum | WorkoutLogScalarFieldEnum[]
  }

  /**
   * User.workoutTemplates
   */
  export type User$workoutTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutTemplate
     */
    select?: WorkoutTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutTemplate
     */
    omit?: WorkoutTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutTemplateInclude<ExtArgs> | null
    where?: WorkoutTemplateWhereInput
    orderBy?: WorkoutTemplateOrderByWithRelationInput | WorkoutTemplateOrderByWithRelationInput[]
    cursor?: WorkoutTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutTemplateScalarFieldEnum | WorkoutTemplateScalarFieldEnum[]
  }

  /**
   * User.fitnessGoals
   */
  export type User$fitnessGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitnessGoal
     */
    select?: FitnessGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FitnessGoal
     */
    omit?: FitnessGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FitnessGoalInclude<ExtArgs> | null
    where?: FitnessGoalWhereInput
    orderBy?: FitnessGoalOrderByWithRelationInput | FitnessGoalOrderByWithRelationInput[]
    cursor?: FitnessGoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FitnessGoalScalarFieldEnum | FitnessGoalScalarFieldEnum[]
  }

  /**
   * User.savedExercises
   */
  export type User$savedExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercises
     */
    select?: ExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercises
     */
    omit?: ExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercisesInclude<ExtArgs> | null
    where?: ExercisesWhereInput
    orderBy?: ExercisesOrderByWithRelationInput | ExercisesOrderByWithRelationInput[]
    cursor?: ExercisesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExercisesScalarFieldEnum | ExercisesScalarFieldEnum[]
  }

  /**
   * User.createdCategories
   */
  export type User$createdCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutCategory
     */
    select?: WorkoutCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutCategory
     */
    omit?: WorkoutCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutCategoryInclude<ExtArgs> | null
    where?: WorkoutCategoryWhereInput
    orderBy?: WorkoutCategoryOrderByWithRelationInput | WorkoutCategoryOrderByWithRelationInput[]
    cursor?: WorkoutCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutCategoryScalarFieldEnum | WorkoutCategoryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model WorkoutTemplate
   */

  export type AggregateWorkoutTemplate = {
    _count: WorkoutTemplateCountAggregateOutputType | null
    _avg: WorkoutTemplateAvgAggregateOutputType | null
    _sum: WorkoutTemplateSumAggregateOutputType | null
    _min: WorkoutTemplateMinAggregateOutputType | null
    _max: WorkoutTemplateMaxAggregateOutputType | null
  }

  export type WorkoutTemplateAvgAggregateOutputType = {
    id: number | null
    duration: number | null
    userId: number | null
  }

  export type WorkoutTemplateSumAggregateOutputType = {
    id: number | null
    duration: number | null
    userId: number | null
  }

  export type WorkoutTemplateMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    templateName: string | null
    description: string | null
    duration: number | null
    notes: string | null
    userId: number | null
  }

  export type WorkoutTemplateMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    templateName: string | null
    description: string | null
    duration: number | null
    notes: string | null
    userId: number | null
  }

  export type WorkoutTemplateCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    templateName: number
    description: number
    routine: number
    duration: number
    notes: number
    userId: number
    _all: number
  }


  export type WorkoutTemplateAvgAggregateInputType = {
    id?: true
    duration?: true
    userId?: true
  }

  export type WorkoutTemplateSumAggregateInputType = {
    id?: true
    duration?: true
    userId?: true
  }

  export type WorkoutTemplateMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    templateName?: true
    description?: true
    duration?: true
    notes?: true
    userId?: true
  }

  export type WorkoutTemplateMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    templateName?: true
    description?: true
    duration?: true
    notes?: true
    userId?: true
  }

  export type WorkoutTemplateCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    templateName?: true
    description?: true
    routine?: true
    duration?: true
    notes?: true
    userId?: true
    _all?: true
  }

  export type WorkoutTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutTemplate to aggregate.
     */
    where?: WorkoutTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutTemplates to fetch.
     */
    orderBy?: WorkoutTemplateOrderByWithRelationInput | WorkoutTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkoutTemplates
    **/
    _count?: true | WorkoutTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutTemplateMaxAggregateInputType
  }

  export type GetWorkoutTemplateAggregateType<T extends WorkoutTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkoutTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkoutTemplate[P]>
      : GetScalarType<T[P], AggregateWorkoutTemplate[P]>
  }




  export type WorkoutTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutTemplateWhereInput
    orderBy?: WorkoutTemplateOrderByWithAggregationInput | WorkoutTemplateOrderByWithAggregationInput[]
    by: WorkoutTemplateScalarFieldEnum[] | WorkoutTemplateScalarFieldEnum
    having?: WorkoutTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutTemplateCountAggregateInputType | true
    _avg?: WorkoutTemplateAvgAggregateInputType
    _sum?: WorkoutTemplateSumAggregateInputType
    _min?: WorkoutTemplateMinAggregateInputType
    _max?: WorkoutTemplateMaxAggregateInputType
  }

  export type WorkoutTemplateGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    templateName: string
    description: string
    routine: JsonValue
    duration: number
    notes: string | null
    userId: number
    _count: WorkoutTemplateCountAggregateOutputType | null
    _avg: WorkoutTemplateAvgAggregateOutputType | null
    _sum: WorkoutTemplateSumAggregateOutputType | null
    _min: WorkoutTemplateMinAggregateOutputType | null
    _max: WorkoutTemplateMaxAggregateOutputType | null
  }

  type GetWorkoutTemplateGroupByPayload<T extends WorkoutTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutTemplateGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    templateName?: boolean
    description?: boolean
    routine?: boolean
    duration?: boolean
    notes?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    categories?: boolean | WorkoutTemplate$categoriesArgs<ExtArgs>
    _count?: boolean | WorkoutTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutTemplate"]>

  export type WorkoutTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    templateName?: boolean
    description?: boolean
    routine?: boolean
    duration?: boolean
    notes?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutTemplate"]>

  export type WorkoutTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    templateName?: boolean
    description?: boolean
    routine?: boolean
    duration?: boolean
    notes?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutTemplate"]>

  export type WorkoutTemplateSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    templateName?: boolean
    description?: boolean
    routine?: boolean
    duration?: boolean
    notes?: boolean
    userId?: boolean
  }

  export type WorkoutTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "templateName" | "description" | "routine" | "duration" | "notes" | "userId", ExtArgs["result"]["workoutTemplate"]>
  export type WorkoutTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    categories?: boolean | WorkoutTemplate$categoriesArgs<ExtArgs>
    _count?: boolean | WorkoutTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkoutTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkoutTemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WorkoutTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkoutTemplate"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      categories: Prisma.$WorkoutCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      templateName: string
      description: string
      routine: Prisma.JsonValue
      duration: number
      notes: string | null
      userId: number
    }, ExtArgs["result"]["workoutTemplate"]>
    composites: {}
  }

  type WorkoutTemplateGetPayload<S extends boolean | null | undefined | WorkoutTemplateDefaultArgs> = $Result.GetResult<Prisma.$WorkoutTemplatePayload, S>

  type WorkoutTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutTemplateCountAggregateInputType | true
    }

  export interface WorkoutTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkoutTemplate'], meta: { name: 'WorkoutTemplate' } }
    /**
     * Find zero or one WorkoutTemplate that matches the filter.
     * @param {WorkoutTemplateFindUniqueArgs} args - Arguments to find a WorkoutTemplate
     * @example
     * // Get one WorkoutTemplate
     * const workoutTemplate = await prisma.workoutTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutTemplateFindUniqueArgs>(args: SelectSubset<T, WorkoutTemplateFindUniqueArgs<ExtArgs>>): Prisma__WorkoutTemplateClient<$Result.GetResult<Prisma.$WorkoutTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkoutTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutTemplateFindUniqueOrThrowArgs} args - Arguments to find a WorkoutTemplate
     * @example
     * // Get one WorkoutTemplate
     * const workoutTemplate = await prisma.workoutTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutTemplateClient<$Result.GetResult<Prisma.$WorkoutTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutTemplateFindFirstArgs} args - Arguments to find a WorkoutTemplate
     * @example
     * // Get one WorkoutTemplate
     * const workoutTemplate = await prisma.workoutTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutTemplateFindFirstArgs>(args?: SelectSubset<T, WorkoutTemplateFindFirstArgs<ExtArgs>>): Prisma__WorkoutTemplateClient<$Result.GetResult<Prisma.$WorkoutTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutTemplateFindFirstOrThrowArgs} args - Arguments to find a WorkoutTemplate
     * @example
     * // Get one WorkoutTemplate
     * const workoutTemplate = await prisma.workoutTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutTemplateClient<$Result.GetResult<Prisma.$WorkoutTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkoutTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkoutTemplates
     * const workoutTemplates = await prisma.workoutTemplate.findMany()
     * 
     * // Get first 10 WorkoutTemplates
     * const workoutTemplates = await prisma.workoutTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutTemplateWithIdOnly = await prisma.workoutTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutTemplateFindManyArgs>(args?: SelectSubset<T, WorkoutTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkoutTemplate.
     * @param {WorkoutTemplateCreateArgs} args - Arguments to create a WorkoutTemplate.
     * @example
     * // Create one WorkoutTemplate
     * const WorkoutTemplate = await prisma.workoutTemplate.create({
     *   data: {
     *     // ... data to create a WorkoutTemplate
     *   }
     * })
     * 
     */
    create<T extends WorkoutTemplateCreateArgs>(args: SelectSubset<T, WorkoutTemplateCreateArgs<ExtArgs>>): Prisma__WorkoutTemplateClient<$Result.GetResult<Prisma.$WorkoutTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkoutTemplates.
     * @param {WorkoutTemplateCreateManyArgs} args - Arguments to create many WorkoutTemplates.
     * @example
     * // Create many WorkoutTemplates
     * const workoutTemplate = await prisma.workoutTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutTemplateCreateManyArgs>(args?: SelectSubset<T, WorkoutTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkoutTemplates and returns the data saved in the database.
     * @param {WorkoutTemplateCreateManyAndReturnArgs} args - Arguments to create many WorkoutTemplates.
     * @example
     * // Create many WorkoutTemplates
     * const workoutTemplate = await prisma.workoutTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkoutTemplates and only return the `id`
     * const workoutTemplateWithIdOnly = await prisma.workoutTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkoutTemplate.
     * @param {WorkoutTemplateDeleteArgs} args - Arguments to delete one WorkoutTemplate.
     * @example
     * // Delete one WorkoutTemplate
     * const WorkoutTemplate = await prisma.workoutTemplate.delete({
     *   where: {
     *     // ... filter to delete one WorkoutTemplate
     *   }
     * })
     * 
     */
    delete<T extends WorkoutTemplateDeleteArgs>(args: SelectSubset<T, WorkoutTemplateDeleteArgs<ExtArgs>>): Prisma__WorkoutTemplateClient<$Result.GetResult<Prisma.$WorkoutTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkoutTemplate.
     * @param {WorkoutTemplateUpdateArgs} args - Arguments to update one WorkoutTemplate.
     * @example
     * // Update one WorkoutTemplate
     * const workoutTemplate = await prisma.workoutTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutTemplateUpdateArgs>(args: SelectSubset<T, WorkoutTemplateUpdateArgs<ExtArgs>>): Prisma__WorkoutTemplateClient<$Result.GetResult<Prisma.$WorkoutTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkoutTemplates.
     * @param {WorkoutTemplateDeleteManyArgs} args - Arguments to filter WorkoutTemplates to delete.
     * @example
     * // Delete a few WorkoutTemplates
     * const { count } = await prisma.workoutTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutTemplateDeleteManyArgs>(args?: SelectSubset<T, WorkoutTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkoutTemplates
     * const workoutTemplate = await prisma.workoutTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutTemplateUpdateManyArgs>(args: SelectSubset<T, WorkoutTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutTemplates and returns the data updated in the database.
     * @param {WorkoutTemplateUpdateManyAndReturnArgs} args - Arguments to update many WorkoutTemplates.
     * @example
     * // Update many WorkoutTemplates
     * const workoutTemplate = await prisma.workoutTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkoutTemplates and only return the `id`
     * const workoutTemplateWithIdOnly = await prisma.workoutTemplate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkoutTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkoutTemplate.
     * @param {WorkoutTemplateUpsertArgs} args - Arguments to update or create a WorkoutTemplate.
     * @example
     * // Update or create a WorkoutTemplate
     * const workoutTemplate = await prisma.workoutTemplate.upsert({
     *   create: {
     *     // ... data to create a WorkoutTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkoutTemplate we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutTemplateUpsertArgs>(args: SelectSubset<T, WorkoutTemplateUpsertArgs<ExtArgs>>): Prisma__WorkoutTemplateClient<$Result.GetResult<Prisma.$WorkoutTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkoutTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutTemplateCountArgs} args - Arguments to filter WorkoutTemplates to count.
     * @example
     * // Count the number of WorkoutTemplates
     * const count = await prisma.workoutTemplate.count({
     *   where: {
     *     // ... the filter for the WorkoutTemplates we want to count
     *   }
     * })
    **/
    count<T extends WorkoutTemplateCountArgs>(
      args?: Subset<T, WorkoutTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkoutTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkoutTemplateAggregateArgs>(args: Subset<T, WorkoutTemplateAggregateArgs>): Prisma.PrismaPromise<GetWorkoutTemplateAggregateType<T>>

    /**
     * Group by WorkoutTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutTemplateGroupByArgs} args - Group by arguments.
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
      T extends WorkoutTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutTemplateGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutTemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkoutTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkoutTemplate model
   */
  readonly fields: WorkoutTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkoutTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categories<T extends WorkoutTemplate$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutTemplate$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkoutTemplate model
   */
  interface WorkoutTemplateFieldRefs {
    readonly id: FieldRef<"WorkoutTemplate", 'Int'>
    readonly createdAt: FieldRef<"WorkoutTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkoutTemplate", 'DateTime'>
    readonly templateName: FieldRef<"WorkoutTemplate", 'String'>
    readonly description: FieldRef<"WorkoutTemplate", 'String'>
    readonly routine: FieldRef<"WorkoutTemplate", 'Json'>
    readonly duration: FieldRef<"WorkoutTemplate", 'Int'>
    readonly notes: FieldRef<"WorkoutTemplate", 'String'>
    readonly userId: FieldRef<"WorkoutTemplate", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WorkoutTemplate findUnique
   */
  export type WorkoutTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutTemplate
     */
    select?: WorkoutTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutTemplate
     */
    omit?: WorkoutTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutTemplateInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutTemplate to fetch.
     */
    where: WorkoutTemplateWhereUniqueInput
  }

  /**
   * WorkoutTemplate findUniqueOrThrow
   */
  export type WorkoutTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutTemplate
     */
    select?: WorkoutTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutTemplate
     */
    omit?: WorkoutTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutTemplateInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutTemplate to fetch.
     */
    where: WorkoutTemplateWhereUniqueInput
  }

  /**
   * WorkoutTemplate findFirst
   */
  export type WorkoutTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutTemplate
     */
    select?: WorkoutTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutTemplate
     */
    omit?: WorkoutTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutTemplateInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutTemplate to fetch.
     */
    where?: WorkoutTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutTemplates to fetch.
     */
    orderBy?: WorkoutTemplateOrderByWithRelationInput | WorkoutTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutTemplates.
     */
    cursor?: WorkoutTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutTemplates.
     */
    distinct?: WorkoutTemplateScalarFieldEnum | WorkoutTemplateScalarFieldEnum[]
  }

  /**
   * WorkoutTemplate findFirstOrThrow
   */
  export type WorkoutTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutTemplate
     */
    select?: WorkoutTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutTemplate
     */
    omit?: WorkoutTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutTemplateInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutTemplate to fetch.
     */
    where?: WorkoutTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutTemplates to fetch.
     */
    orderBy?: WorkoutTemplateOrderByWithRelationInput | WorkoutTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutTemplates.
     */
    cursor?: WorkoutTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutTemplates.
     */
    distinct?: WorkoutTemplateScalarFieldEnum | WorkoutTemplateScalarFieldEnum[]
  }

  /**
   * WorkoutTemplate findMany
   */
  export type WorkoutTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutTemplate
     */
    select?: WorkoutTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutTemplate
     */
    omit?: WorkoutTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutTemplateInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutTemplates to fetch.
     */
    where?: WorkoutTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutTemplates to fetch.
     */
    orderBy?: WorkoutTemplateOrderByWithRelationInput | WorkoutTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkoutTemplates.
     */
    cursor?: WorkoutTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutTemplates.
     */
    skip?: number
    distinct?: WorkoutTemplateScalarFieldEnum | WorkoutTemplateScalarFieldEnum[]
  }

  /**
   * WorkoutTemplate create
   */
  export type WorkoutTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutTemplate
     */
    select?: WorkoutTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutTemplate
     */
    omit?: WorkoutTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkoutTemplate.
     */
    data: XOR<WorkoutTemplateCreateInput, WorkoutTemplateUncheckedCreateInput>
  }

  /**
   * WorkoutTemplate createMany
   */
  export type WorkoutTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkoutTemplates.
     */
    data: WorkoutTemplateCreateManyInput | WorkoutTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkoutTemplate createManyAndReturn
   */
  export type WorkoutTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutTemplate
     */
    select?: WorkoutTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutTemplate
     */
    omit?: WorkoutTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many WorkoutTemplates.
     */
    data: WorkoutTemplateCreateManyInput | WorkoutTemplateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutTemplateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutTemplate update
   */
  export type WorkoutTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutTemplate
     */
    select?: WorkoutTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutTemplate
     */
    omit?: WorkoutTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkoutTemplate.
     */
    data: XOR<WorkoutTemplateUpdateInput, WorkoutTemplateUncheckedUpdateInput>
    /**
     * Choose, which WorkoutTemplate to update.
     */
    where: WorkoutTemplateWhereUniqueInput
  }

  /**
   * WorkoutTemplate updateMany
   */
  export type WorkoutTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkoutTemplates.
     */
    data: XOR<WorkoutTemplateUpdateManyMutationInput, WorkoutTemplateUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutTemplates to update
     */
    where?: WorkoutTemplateWhereInput
    /**
     * Limit how many WorkoutTemplates to update.
     */
    limit?: number
  }

  /**
   * WorkoutTemplate updateManyAndReturn
   */
  export type WorkoutTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutTemplate
     */
    select?: WorkoutTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutTemplate
     */
    omit?: WorkoutTemplateOmit<ExtArgs> | null
    /**
     * The data used to update WorkoutTemplates.
     */
    data: XOR<WorkoutTemplateUpdateManyMutationInput, WorkoutTemplateUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutTemplates to update
     */
    where?: WorkoutTemplateWhereInput
    /**
     * Limit how many WorkoutTemplates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutTemplateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutTemplate upsert
   */
  export type WorkoutTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutTemplate
     */
    select?: WorkoutTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutTemplate
     */
    omit?: WorkoutTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkoutTemplate to update in case it exists.
     */
    where: WorkoutTemplateWhereUniqueInput
    /**
     * In case the WorkoutTemplate found by the `where` argument doesn't exist, create a new WorkoutTemplate with this data.
     */
    create: XOR<WorkoutTemplateCreateInput, WorkoutTemplateUncheckedCreateInput>
    /**
     * In case the WorkoutTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutTemplateUpdateInput, WorkoutTemplateUncheckedUpdateInput>
  }

  /**
   * WorkoutTemplate delete
   */
  export type WorkoutTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutTemplate
     */
    select?: WorkoutTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutTemplate
     */
    omit?: WorkoutTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutTemplateInclude<ExtArgs> | null
    /**
     * Filter which WorkoutTemplate to delete.
     */
    where: WorkoutTemplateWhereUniqueInput
  }

  /**
   * WorkoutTemplate deleteMany
   */
  export type WorkoutTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutTemplates to delete
     */
    where?: WorkoutTemplateWhereInput
    /**
     * Limit how many WorkoutTemplates to delete.
     */
    limit?: number
  }

  /**
   * WorkoutTemplate.categories
   */
  export type WorkoutTemplate$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutCategory
     */
    select?: WorkoutCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutCategory
     */
    omit?: WorkoutCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutCategoryInclude<ExtArgs> | null
    where?: WorkoutCategoryWhereInput
    orderBy?: WorkoutCategoryOrderByWithRelationInput | WorkoutCategoryOrderByWithRelationInput[]
    cursor?: WorkoutCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutCategoryScalarFieldEnum | WorkoutCategoryScalarFieldEnum[]
  }

  /**
   * WorkoutTemplate without action
   */
  export type WorkoutTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutTemplate
     */
    select?: WorkoutTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutTemplate
     */
    omit?: WorkoutTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutTemplateInclude<ExtArgs> | null
  }


  /**
   * Model WorkoutLog
   */

  export type AggregateWorkoutLog = {
    _count: WorkoutLogCountAggregateOutputType | null
    _avg: WorkoutLogAvgAggregateOutputType | null
    _sum: WorkoutLogSumAggregateOutputType | null
    _min: WorkoutLogMinAggregateOutputType | null
    _max: WorkoutLogMaxAggregateOutputType | null
  }

  export type WorkoutLogAvgAggregateOutputType = {
    id: number | null
    duration: number | null
    estimatedCalorieBurn: number | null
    userId: number | null
  }

  export type WorkoutLogSumAggregateOutputType = {
    id: number | null
    duration: number | null
    estimatedCalorieBurn: number | null
    userId: number | null
  }

  export type WorkoutLogMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    description: string | null
    duration: number | null
    notes: string | null
    estimatedCalorieBurn: number | null
    userId: number | null
  }

  export type WorkoutLogMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    description: string | null
    duration: number | null
    notes: string | null
    estimatedCalorieBurn: number | null
    userId: number | null
  }

  export type WorkoutLogCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    description: number
    routine: number
    duration: number
    notes: number
    estimatedCalorieBurn: number
    userId: number
    _all: number
  }


  export type WorkoutLogAvgAggregateInputType = {
    id?: true
    duration?: true
    estimatedCalorieBurn?: true
    userId?: true
  }

  export type WorkoutLogSumAggregateInputType = {
    id?: true
    duration?: true
    estimatedCalorieBurn?: true
    userId?: true
  }

  export type WorkoutLogMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    duration?: true
    notes?: true
    estimatedCalorieBurn?: true
    userId?: true
  }

  export type WorkoutLogMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    duration?: true
    notes?: true
    estimatedCalorieBurn?: true
    userId?: true
  }

  export type WorkoutLogCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    routine?: true
    duration?: true
    notes?: true
    estimatedCalorieBurn?: true
    userId?: true
    _all?: true
  }

  export type WorkoutLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutLog to aggregate.
     */
    where?: WorkoutLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutLogs to fetch.
     */
    orderBy?: WorkoutLogOrderByWithRelationInput | WorkoutLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkoutLogs
    **/
    _count?: true | WorkoutLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutLogMaxAggregateInputType
  }

  export type GetWorkoutLogAggregateType<T extends WorkoutLogAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkoutLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkoutLog[P]>
      : GetScalarType<T[P], AggregateWorkoutLog[P]>
  }




  export type WorkoutLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutLogWhereInput
    orderBy?: WorkoutLogOrderByWithAggregationInput | WorkoutLogOrderByWithAggregationInput[]
    by: WorkoutLogScalarFieldEnum[] | WorkoutLogScalarFieldEnum
    having?: WorkoutLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutLogCountAggregateInputType | true
    _avg?: WorkoutLogAvgAggregateInputType
    _sum?: WorkoutLogSumAggregateInputType
    _min?: WorkoutLogMinAggregateInputType
    _max?: WorkoutLogMaxAggregateInputType
  }

  export type WorkoutLogGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    title: string
    description: string
    routine: JsonValue
    duration: number
    notes: string | null
    estimatedCalorieBurn: number
    userId: number
    _count: WorkoutLogCountAggregateOutputType | null
    _avg: WorkoutLogAvgAggregateOutputType | null
    _sum: WorkoutLogSumAggregateOutputType | null
    _min: WorkoutLogMinAggregateOutputType | null
    _max: WorkoutLogMaxAggregateOutputType | null
  }

  type GetWorkoutLogGroupByPayload<T extends WorkoutLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutLogGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutLogGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    routine?: boolean
    duration?: boolean
    notes?: boolean
    estimatedCalorieBurn?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    categories?: boolean | WorkoutLog$categoriesArgs<ExtArgs>
    _count?: boolean | WorkoutLogCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutLog"]>

  export type WorkoutLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    routine?: boolean
    duration?: boolean
    notes?: boolean
    estimatedCalorieBurn?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutLog"]>

  export type WorkoutLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    routine?: boolean
    duration?: boolean
    notes?: boolean
    estimatedCalorieBurn?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutLog"]>

  export type WorkoutLogSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    routine?: boolean
    duration?: boolean
    notes?: boolean
    estimatedCalorieBurn?: boolean
    userId?: boolean
  }

  export type WorkoutLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "title" | "description" | "routine" | "duration" | "notes" | "estimatedCalorieBurn" | "userId", ExtArgs["result"]["workoutLog"]>
  export type WorkoutLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    categories?: boolean | WorkoutLog$categoriesArgs<ExtArgs>
    _count?: boolean | WorkoutLogCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkoutLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkoutLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WorkoutLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkoutLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      categories: Prisma.$WorkoutCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      title: string
      description: string
      routine: Prisma.JsonValue
      duration: number
      notes: string | null
      estimatedCalorieBurn: number
      userId: number
    }, ExtArgs["result"]["workoutLog"]>
    composites: {}
  }

  type WorkoutLogGetPayload<S extends boolean | null | undefined | WorkoutLogDefaultArgs> = $Result.GetResult<Prisma.$WorkoutLogPayload, S>

  type WorkoutLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutLogCountAggregateInputType | true
    }

  export interface WorkoutLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkoutLog'], meta: { name: 'WorkoutLog' } }
    /**
     * Find zero or one WorkoutLog that matches the filter.
     * @param {WorkoutLogFindUniqueArgs} args - Arguments to find a WorkoutLog
     * @example
     * // Get one WorkoutLog
     * const workoutLog = await prisma.workoutLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutLogFindUniqueArgs>(args: SelectSubset<T, WorkoutLogFindUniqueArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkoutLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutLogFindUniqueOrThrowArgs} args - Arguments to find a WorkoutLog
     * @example
     * // Get one WorkoutLog
     * const workoutLog = await prisma.workoutLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutLogFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutLogFindFirstArgs} args - Arguments to find a WorkoutLog
     * @example
     * // Get one WorkoutLog
     * const workoutLog = await prisma.workoutLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutLogFindFirstArgs>(args?: SelectSubset<T, WorkoutLogFindFirstArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutLogFindFirstOrThrowArgs} args - Arguments to find a WorkoutLog
     * @example
     * // Get one WorkoutLog
     * const workoutLog = await prisma.workoutLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutLogFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkoutLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkoutLogs
     * const workoutLogs = await prisma.workoutLog.findMany()
     * 
     * // Get first 10 WorkoutLogs
     * const workoutLogs = await prisma.workoutLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutLogWithIdOnly = await prisma.workoutLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutLogFindManyArgs>(args?: SelectSubset<T, WorkoutLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkoutLog.
     * @param {WorkoutLogCreateArgs} args - Arguments to create a WorkoutLog.
     * @example
     * // Create one WorkoutLog
     * const WorkoutLog = await prisma.workoutLog.create({
     *   data: {
     *     // ... data to create a WorkoutLog
     *   }
     * })
     * 
     */
    create<T extends WorkoutLogCreateArgs>(args: SelectSubset<T, WorkoutLogCreateArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkoutLogs.
     * @param {WorkoutLogCreateManyArgs} args - Arguments to create many WorkoutLogs.
     * @example
     * // Create many WorkoutLogs
     * const workoutLog = await prisma.workoutLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutLogCreateManyArgs>(args?: SelectSubset<T, WorkoutLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkoutLogs and returns the data saved in the database.
     * @param {WorkoutLogCreateManyAndReturnArgs} args - Arguments to create many WorkoutLogs.
     * @example
     * // Create many WorkoutLogs
     * const workoutLog = await prisma.workoutLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkoutLogs and only return the `id`
     * const workoutLogWithIdOnly = await prisma.workoutLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutLogCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkoutLog.
     * @param {WorkoutLogDeleteArgs} args - Arguments to delete one WorkoutLog.
     * @example
     * // Delete one WorkoutLog
     * const WorkoutLog = await prisma.workoutLog.delete({
     *   where: {
     *     // ... filter to delete one WorkoutLog
     *   }
     * })
     * 
     */
    delete<T extends WorkoutLogDeleteArgs>(args: SelectSubset<T, WorkoutLogDeleteArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkoutLog.
     * @param {WorkoutLogUpdateArgs} args - Arguments to update one WorkoutLog.
     * @example
     * // Update one WorkoutLog
     * const workoutLog = await prisma.workoutLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutLogUpdateArgs>(args: SelectSubset<T, WorkoutLogUpdateArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkoutLogs.
     * @param {WorkoutLogDeleteManyArgs} args - Arguments to filter WorkoutLogs to delete.
     * @example
     * // Delete a few WorkoutLogs
     * const { count } = await prisma.workoutLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutLogDeleteManyArgs>(args?: SelectSubset<T, WorkoutLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkoutLogs
     * const workoutLog = await prisma.workoutLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutLogUpdateManyArgs>(args: SelectSubset<T, WorkoutLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutLogs and returns the data updated in the database.
     * @param {WorkoutLogUpdateManyAndReturnArgs} args - Arguments to update many WorkoutLogs.
     * @example
     * // Update many WorkoutLogs
     * const workoutLog = await prisma.workoutLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkoutLogs and only return the `id`
     * const workoutLogWithIdOnly = await prisma.workoutLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkoutLogUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkoutLog.
     * @param {WorkoutLogUpsertArgs} args - Arguments to update or create a WorkoutLog.
     * @example
     * // Update or create a WorkoutLog
     * const workoutLog = await prisma.workoutLog.upsert({
     *   create: {
     *     // ... data to create a WorkoutLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkoutLog we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutLogUpsertArgs>(args: SelectSubset<T, WorkoutLogUpsertArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkoutLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutLogCountArgs} args - Arguments to filter WorkoutLogs to count.
     * @example
     * // Count the number of WorkoutLogs
     * const count = await prisma.workoutLog.count({
     *   where: {
     *     // ... the filter for the WorkoutLogs we want to count
     *   }
     * })
    **/
    count<T extends WorkoutLogCountArgs>(
      args?: Subset<T, WorkoutLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkoutLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkoutLogAggregateArgs>(args: Subset<T, WorkoutLogAggregateArgs>): Prisma.PrismaPromise<GetWorkoutLogAggregateType<T>>

    /**
     * Group by WorkoutLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutLogGroupByArgs} args - Group by arguments.
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
      T extends WorkoutLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutLogGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkoutLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkoutLog model
   */
  readonly fields: WorkoutLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkoutLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categories<T extends WorkoutLog$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutLog$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkoutLog model
   */
  interface WorkoutLogFieldRefs {
    readonly id: FieldRef<"WorkoutLog", 'Int'>
    readonly createdAt: FieldRef<"WorkoutLog", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkoutLog", 'DateTime'>
    readonly title: FieldRef<"WorkoutLog", 'String'>
    readonly description: FieldRef<"WorkoutLog", 'String'>
    readonly routine: FieldRef<"WorkoutLog", 'Json'>
    readonly duration: FieldRef<"WorkoutLog", 'Int'>
    readonly notes: FieldRef<"WorkoutLog", 'String'>
    readonly estimatedCalorieBurn: FieldRef<"WorkoutLog", 'Int'>
    readonly userId: FieldRef<"WorkoutLog", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WorkoutLog findUnique
   */
  export type WorkoutLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutLog to fetch.
     */
    where: WorkoutLogWhereUniqueInput
  }

  /**
   * WorkoutLog findUniqueOrThrow
   */
  export type WorkoutLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutLog to fetch.
     */
    where: WorkoutLogWhereUniqueInput
  }

  /**
   * WorkoutLog findFirst
   */
  export type WorkoutLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutLog to fetch.
     */
    where?: WorkoutLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutLogs to fetch.
     */
    orderBy?: WorkoutLogOrderByWithRelationInput | WorkoutLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutLogs.
     */
    cursor?: WorkoutLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutLogs.
     */
    distinct?: WorkoutLogScalarFieldEnum | WorkoutLogScalarFieldEnum[]
  }

  /**
   * WorkoutLog findFirstOrThrow
   */
  export type WorkoutLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutLog to fetch.
     */
    where?: WorkoutLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutLogs to fetch.
     */
    orderBy?: WorkoutLogOrderByWithRelationInput | WorkoutLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutLogs.
     */
    cursor?: WorkoutLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutLogs.
     */
    distinct?: WorkoutLogScalarFieldEnum | WorkoutLogScalarFieldEnum[]
  }

  /**
   * WorkoutLog findMany
   */
  export type WorkoutLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutLogs to fetch.
     */
    where?: WorkoutLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutLogs to fetch.
     */
    orderBy?: WorkoutLogOrderByWithRelationInput | WorkoutLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkoutLogs.
     */
    cursor?: WorkoutLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutLogs.
     */
    skip?: number
    distinct?: WorkoutLogScalarFieldEnum | WorkoutLogScalarFieldEnum[]
  }

  /**
   * WorkoutLog create
   */
  export type WorkoutLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkoutLog.
     */
    data: XOR<WorkoutLogCreateInput, WorkoutLogUncheckedCreateInput>
  }

  /**
   * WorkoutLog createMany
   */
  export type WorkoutLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkoutLogs.
     */
    data: WorkoutLogCreateManyInput | WorkoutLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkoutLog createManyAndReturn
   */
  export type WorkoutLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * The data used to create many WorkoutLogs.
     */
    data: WorkoutLogCreateManyInput | WorkoutLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutLog update
   */
  export type WorkoutLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkoutLog.
     */
    data: XOR<WorkoutLogUpdateInput, WorkoutLogUncheckedUpdateInput>
    /**
     * Choose, which WorkoutLog to update.
     */
    where: WorkoutLogWhereUniqueInput
  }

  /**
   * WorkoutLog updateMany
   */
  export type WorkoutLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkoutLogs.
     */
    data: XOR<WorkoutLogUpdateManyMutationInput, WorkoutLogUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutLogs to update
     */
    where?: WorkoutLogWhereInput
    /**
     * Limit how many WorkoutLogs to update.
     */
    limit?: number
  }

  /**
   * WorkoutLog updateManyAndReturn
   */
  export type WorkoutLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * The data used to update WorkoutLogs.
     */
    data: XOR<WorkoutLogUpdateManyMutationInput, WorkoutLogUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutLogs to update
     */
    where?: WorkoutLogWhereInput
    /**
     * Limit how many WorkoutLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutLog upsert
   */
  export type WorkoutLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkoutLog to update in case it exists.
     */
    where: WorkoutLogWhereUniqueInput
    /**
     * In case the WorkoutLog found by the `where` argument doesn't exist, create a new WorkoutLog with this data.
     */
    create: XOR<WorkoutLogCreateInput, WorkoutLogUncheckedCreateInput>
    /**
     * In case the WorkoutLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutLogUpdateInput, WorkoutLogUncheckedUpdateInput>
  }

  /**
   * WorkoutLog delete
   */
  export type WorkoutLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * Filter which WorkoutLog to delete.
     */
    where: WorkoutLogWhereUniqueInput
  }

  /**
   * WorkoutLog deleteMany
   */
  export type WorkoutLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutLogs to delete
     */
    where?: WorkoutLogWhereInput
    /**
     * Limit how many WorkoutLogs to delete.
     */
    limit?: number
  }

  /**
   * WorkoutLog.categories
   */
  export type WorkoutLog$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutCategory
     */
    select?: WorkoutCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutCategory
     */
    omit?: WorkoutCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutCategoryInclude<ExtArgs> | null
    where?: WorkoutCategoryWhereInput
    orderBy?: WorkoutCategoryOrderByWithRelationInput | WorkoutCategoryOrderByWithRelationInput[]
    cursor?: WorkoutCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutCategoryScalarFieldEnum | WorkoutCategoryScalarFieldEnum[]
  }

  /**
   * WorkoutLog without action
   */
  export type WorkoutLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
  }


  /**
   * Model WorkoutCategory
   */

  export type AggregateWorkoutCategory = {
    _count: WorkoutCategoryCountAggregateOutputType | null
    _avg: WorkoutCategoryAvgAggregateOutputType | null
    _sum: WorkoutCategorySumAggregateOutputType | null
    _min: WorkoutCategoryMinAggregateOutputType | null
    _max: WorkoutCategoryMaxAggregateOutputType | null
  }

  export type WorkoutCategoryAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    templateId: number | null
  }

  export type WorkoutCategorySumAggregateOutputType = {
    id: number | null
    userId: number | null
    templateId: number | null
  }

  export type WorkoutCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    userId: number | null
    templateId: number | null
  }

  export type WorkoutCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    userId: number | null
    templateId: number | null
  }

  export type WorkoutCategoryCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    templateId: number
    _all: number
  }


  export type WorkoutCategoryAvgAggregateInputType = {
    id?: true
    userId?: true
    templateId?: true
  }

  export type WorkoutCategorySumAggregateInputType = {
    id?: true
    userId?: true
    templateId?: true
  }

  export type WorkoutCategoryMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    templateId?: true
  }

  export type WorkoutCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    templateId?: true
  }

  export type WorkoutCategoryCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    templateId?: true
    _all?: true
  }

  export type WorkoutCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutCategory to aggregate.
     */
    where?: WorkoutCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutCategories to fetch.
     */
    orderBy?: WorkoutCategoryOrderByWithRelationInput | WorkoutCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkoutCategories
    **/
    _count?: true | WorkoutCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutCategoryMaxAggregateInputType
  }

  export type GetWorkoutCategoryAggregateType<T extends WorkoutCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkoutCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkoutCategory[P]>
      : GetScalarType<T[P], AggregateWorkoutCategory[P]>
  }




  export type WorkoutCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutCategoryWhereInput
    orderBy?: WorkoutCategoryOrderByWithAggregationInput | WorkoutCategoryOrderByWithAggregationInput[]
    by: WorkoutCategoryScalarFieldEnum[] | WorkoutCategoryScalarFieldEnum
    having?: WorkoutCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutCategoryCountAggregateInputType | true
    _avg?: WorkoutCategoryAvgAggregateInputType
    _sum?: WorkoutCategorySumAggregateInputType
    _min?: WorkoutCategoryMinAggregateInputType
    _max?: WorkoutCategoryMaxAggregateInputType
  }

  export type WorkoutCategoryGroupByOutputType = {
    id: number
    name: string
    userId: number
    templateId: number | null
    _count: WorkoutCategoryCountAggregateOutputType | null
    _avg: WorkoutCategoryAvgAggregateOutputType | null
    _sum: WorkoutCategorySumAggregateOutputType | null
    _min: WorkoutCategoryMinAggregateOutputType | null
    _max: WorkoutCategoryMaxAggregateOutputType | null
  }

  type GetWorkoutCategoryGroupByPayload<T extends WorkoutCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutCategoryGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    templateId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    templates?: boolean | WorkoutCategory$templatesArgs<ExtArgs>
    logs?: boolean | WorkoutCategory$logsArgs<ExtArgs>
    _count?: boolean | WorkoutCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutCategory"]>

  export type WorkoutCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    templateId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    templates?: boolean | WorkoutCategory$templatesArgs<ExtArgs>
  }, ExtArgs["result"]["workoutCategory"]>

  export type WorkoutCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    templateId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    templates?: boolean | WorkoutCategory$templatesArgs<ExtArgs>
  }, ExtArgs["result"]["workoutCategory"]>

  export type WorkoutCategorySelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
    templateId?: boolean
  }

  export type WorkoutCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userId" | "templateId", ExtArgs["result"]["workoutCategory"]>
  export type WorkoutCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    templates?: boolean | WorkoutCategory$templatesArgs<ExtArgs>
    logs?: boolean | WorkoutCategory$logsArgs<ExtArgs>
    _count?: boolean | WorkoutCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkoutCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    templates?: boolean | WorkoutCategory$templatesArgs<ExtArgs>
  }
  export type WorkoutCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    templates?: boolean | WorkoutCategory$templatesArgs<ExtArgs>
  }

  export type $WorkoutCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkoutCategory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      templates: Prisma.$WorkoutTemplatePayload<ExtArgs> | null
      logs: Prisma.$WorkoutLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      userId: number
      templateId: number | null
    }, ExtArgs["result"]["workoutCategory"]>
    composites: {}
  }

  type WorkoutCategoryGetPayload<S extends boolean | null | undefined | WorkoutCategoryDefaultArgs> = $Result.GetResult<Prisma.$WorkoutCategoryPayload, S>

  type WorkoutCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutCategoryCountAggregateInputType | true
    }

  export interface WorkoutCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkoutCategory'], meta: { name: 'WorkoutCategory' } }
    /**
     * Find zero or one WorkoutCategory that matches the filter.
     * @param {WorkoutCategoryFindUniqueArgs} args - Arguments to find a WorkoutCategory
     * @example
     * // Get one WorkoutCategory
     * const workoutCategory = await prisma.workoutCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutCategoryFindUniqueArgs>(args: SelectSubset<T, WorkoutCategoryFindUniqueArgs<ExtArgs>>): Prisma__WorkoutCategoryClient<$Result.GetResult<Prisma.$WorkoutCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkoutCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutCategoryFindUniqueOrThrowArgs} args - Arguments to find a WorkoutCategory
     * @example
     * // Get one WorkoutCategory
     * const workoutCategory = await prisma.workoutCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutCategoryClient<$Result.GetResult<Prisma.$WorkoutCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutCategoryFindFirstArgs} args - Arguments to find a WorkoutCategory
     * @example
     * // Get one WorkoutCategory
     * const workoutCategory = await prisma.workoutCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutCategoryFindFirstArgs>(args?: SelectSubset<T, WorkoutCategoryFindFirstArgs<ExtArgs>>): Prisma__WorkoutCategoryClient<$Result.GetResult<Prisma.$WorkoutCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutCategoryFindFirstOrThrowArgs} args - Arguments to find a WorkoutCategory
     * @example
     * // Get one WorkoutCategory
     * const workoutCategory = await prisma.workoutCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutCategoryClient<$Result.GetResult<Prisma.$WorkoutCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkoutCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkoutCategories
     * const workoutCategories = await prisma.workoutCategory.findMany()
     * 
     * // Get first 10 WorkoutCategories
     * const workoutCategories = await prisma.workoutCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutCategoryWithIdOnly = await prisma.workoutCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutCategoryFindManyArgs>(args?: SelectSubset<T, WorkoutCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkoutCategory.
     * @param {WorkoutCategoryCreateArgs} args - Arguments to create a WorkoutCategory.
     * @example
     * // Create one WorkoutCategory
     * const WorkoutCategory = await prisma.workoutCategory.create({
     *   data: {
     *     // ... data to create a WorkoutCategory
     *   }
     * })
     * 
     */
    create<T extends WorkoutCategoryCreateArgs>(args: SelectSubset<T, WorkoutCategoryCreateArgs<ExtArgs>>): Prisma__WorkoutCategoryClient<$Result.GetResult<Prisma.$WorkoutCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkoutCategories.
     * @param {WorkoutCategoryCreateManyArgs} args - Arguments to create many WorkoutCategories.
     * @example
     * // Create many WorkoutCategories
     * const workoutCategory = await prisma.workoutCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutCategoryCreateManyArgs>(args?: SelectSubset<T, WorkoutCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkoutCategories and returns the data saved in the database.
     * @param {WorkoutCategoryCreateManyAndReturnArgs} args - Arguments to create many WorkoutCategories.
     * @example
     * // Create many WorkoutCategories
     * const workoutCategory = await prisma.workoutCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkoutCategories and only return the `id`
     * const workoutCategoryWithIdOnly = await prisma.workoutCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkoutCategory.
     * @param {WorkoutCategoryDeleteArgs} args - Arguments to delete one WorkoutCategory.
     * @example
     * // Delete one WorkoutCategory
     * const WorkoutCategory = await prisma.workoutCategory.delete({
     *   where: {
     *     // ... filter to delete one WorkoutCategory
     *   }
     * })
     * 
     */
    delete<T extends WorkoutCategoryDeleteArgs>(args: SelectSubset<T, WorkoutCategoryDeleteArgs<ExtArgs>>): Prisma__WorkoutCategoryClient<$Result.GetResult<Prisma.$WorkoutCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkoutCategory.
     * @param {WorkoutCategoryUpdateArgs} args - Arguments to update one WorkoutCategory.
     * @example
     * // Update one WorkoutCategory
     * const workoutCategory = await prisma.workoutCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutCategoryUpdateArgs>(args: SelectSubset<T, WorkoutCategoryUpdateArgs<ExtArgs>>): Prisma__WorkoutCategoryClient<$Result.GetResult<Prisma.$WorkoutCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkoutCategories.
     * @param {WorkoutCategoryDeleteManyArgs} args - Arguments to filter WorkoutCategories to delete.
     * @example
     * // Delete a few WorkoutCategories
     * const { count } = await prisma.workoutCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutCategoryDeleteManyArgs>(args?: SelectSubset<T, WorkoutCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkoutCategories
     * const workoutCategory = await prisma.workoutCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutCategoryUpdateManyArgs>(args: SelectSubset<T, WorkoutCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutCategories and returns the data updated in the database.
     * @param {WorkoutCategoryUpdateManyAndReturnArgs} args - Arguments to update many WorkoutCategories.
     * @example
     * // Update many WorkoutCategories
     * const workoutCategory = await prisma.workoutCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkoutCategories and only return the `id`
     * const workoutCategoryWithIdOnly = await prisma.workoutCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkoutCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkoutCategory.
     * @param {WorkoutCategoryUpsertArgs} args - Arguments to update or create a WorkoutCategory.
     * @example
     * // Update or create a WorkoutCategory
     * const workoutCategory = await prisma.workoutCategory.upsert({
     *   create: {
     *     // ... data to create a WorkoutCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkoutCategory we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutCategoryUpsertArgs>(args: SelectSubset<T, WorkoutCategoryUpsertArgs<ExtArgs>>): Prisma__WorkoutCategoryClient<$Result.GetResult<Prisma.$WorkoutCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkoutCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutCategoryCountArgs} args - Arguments to filter WorkoutCategories to count.
     * @example
     * // Count the number of WorkoutCategories
     * const count = await prisma.workoutCategory.count({
     *   where: {
     *     // ... the filter for the WorkoutCategories we want to count
     *   }
     * })
    **/
    count<T extends WorkoutCategoryCountArgs>(
      args?: Subset<T, WorkoutCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkoutCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkoutCategoryAggregateArgs>(args: Subset<T, WorkoutCategoryAggregateArgs>): Prisma.PrismaPromise<GetWorkoutCategoryAggregateType<T>>

    /**
     * Group by WorkoutCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutCategoryGroupByArgs} args - Group by arguments.
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
      T extends WorkoutCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutCategoryGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkoutCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkoutCategory model
   */
  readonly fields: WorkoutCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkoutCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    templates<T extends WorkoutCategory$templatesArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutCategory$templatesArgs<ExtArgs>>): Prisma__WorkoutTemplateClient<$Result.GetResult<Prisma.$WorkoutTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    logs<T extends WorkoutCategory$logsArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutCategory$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkoutCategory model
   */
  interface WorkoutCategoryFieldRefs {
    readonly id: FieldRef<"WorkoutCategory", 'Int'>
    readonly name: FieldRef<"WorkoutCategory", 'String'>
    readonly userId: FieldRef<"WorkoutCategory", 'Int'>
    readonly templateId: FieldRef<"WorkoutCategory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WorkoutCategory findUnique
   */
  export type WorkoutCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutCategory
     */
    select?: WorkoutCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutCategory
     */
    omit?: WorkoutCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutCategoryInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutCategory to fetch.
     */
    where: WorkoutCategoryWhereUniqueInput
  }

  /**
   * WorkoutCategory findUniqueOrThrow
   */
  export type WorkoutCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutCategory
     */
    select?: WorkoutCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutCategory
     */
    omit?: WorkoutCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutCategoryInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutCategory to fetch.
     */
    where: WorkoutCategoryWhereUniqueInput
  }

  /**
   * WorkoutCategory findFirst
   */
  export type WorkoutCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutCategory
     */
    select?: WorkoutCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutCategory
     */
    omit?: WorkoutCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutCategoryInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutCategory to fetch.
     */
    where?: WorkoutCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutCategories to fetch.
     */
    orderBy?: WorkoutCategoryOrderByWithRelationInput | WorkoutCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutCategories.
     */
    cursor?: WorkoutCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutCategories.
     */
    distinct?: WorkoutCategoryScalarFieldEnum | WorkoutCategoryScalarFieldEnum[]
  }

  /**
   * WorkoutCategory findFirstOrThrow
   */
  export type WorkoutCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutCategory
     */
    select?: WorkoutCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutCategory
     */
    omit?: WorkoutCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutCategoryInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutCategory to fetch.
     */
    where?: WorkoutCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutCategories to fetch.
     */
    orderBy?: WorkoutCategoryOrderByWithRelationInput | WorkoutCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutCategories.
     */
    cursor?: WorkoutCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutCategories.
     */
    distinct?: WorkoutCategoryScalarFieldEnum | WorkoutCategoryScalarFieldEnum[]
  }

  /**
   * WorkoutCategory findMany
   */
  export type WorkoutCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutCategory
     */
    select?: WorkoutCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutCategory
     */
    omit?: WorkoutCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutCategoryInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutCategories to fetch.
     */
    where?: WorkoutCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutCategories to fetch.
     */
    orderBy?: WorkoutCategoryOrderByWithRelationInput | WorkoutCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkoutCategories.
     */
    cursor?: WorkoutCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutCategories.
     */
    skip?: number
    distinct?: WorkoutCategoryScalarFieldEnum | WorkoutCategoryScalarFieldEnum[]
  }

  /**
   * WorkoutCategory create
   */
  export type WorkoutCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutCategory
     */
    select?: WorkoutCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutCategory
     */
    omit?: WorkoutCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkoutCategory.
     */
    data: XOR<WorkoutCategoryCreateInput, WorkoutCategoryUncheckedCreateInput>
  }

  /**
   * WorkoutCategory createMany
   */
  export type WorkoutCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkoutCategories.
     */
    data: WorkoutCategoryCreateManyInput | WorkoutCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkoutCategory createManyAndReturn
   */
  export type WorkoutCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutCategory
     */
    select?: WorkoutCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutCategory
     */
    omit?: WorkoutCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many WorkoutCategories.
     */
    data: WorkoutCategoryCreateManyInput | WorkoutCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutCategory update
   */
  export type WorkoutCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutCategory
     */
    select?: WorkoutCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutCategory
     */
    omit?: WorkoutCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkoutCategory.
     */
    data: XOR<WorkoutCategoryUpdateInput, WorkoutCategoryUncheckedUpdateInput>
    /**
     * Choose, which WorkoutCategory to update.
     */
    where: WorkoutCategoryWhereUniqueInput
  }

  /**
   * WorkoutCategory updateMany
   */
  export type WorkoutCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkoutCategories.
     */
    data: XOR<WorkoutCategoryUpdateManyMutationInput, WorkoutCategoryUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutCategories to update
     */
    where?: WorkoutCategoryWhereInput
    /**
     * Limit how many WorkoutCategories to update.
     */
    limit?: number
  }

  /**
   * WorkoutCategory updateManyAndReturn
   */
  export type WorkoutCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutCategory
     */
    select?: WorkoutCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutCategory
     */
    omit?: WorkoutCategoryOmit<ExtArgs> | null
    /**
     * The data used to update WorkoutCategories.
     */
    data: XOR<WorkoutCategoryUpdateManyMutationInput, WorkoutCategoryUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutCategories to update
     */
    where?: WorkoutCategoryWhereInput
    /**
     * Limit how many WorkoutCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutCategory upsert
   */
  export type WorkoutCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutCategory
     */
    select?: WorkoutCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutCategory
     */
    omit?: WorkoutCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkoutCategory to update in case it exists.
     */
    where: WorkoutCategoryWhereUniqueInput
    /**
     * In case the WorkoutCategory found by the `where` argument doesn't exist, create a new WorkoutCategory with this data.
     */
    create: XOR<WorkoutCategoryCreateInput, WorkoutCategoryUncheckedCreateInput>
    /**
     * In case the WorkoutCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutCategoryUpdateInput, WorkoutCategoryUncheckedUpdateInput>
  }

  /**
   * WorkoutCategory delete
   */
  export type WorkoutCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutCategory
     */
    select?: WorkoutCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutCategory
     */
    omit?: WorkoutCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutCategoryInclude<ExtArgs> | null
    /**
     * Filter which WorkoutCategory to delete.
     */
    where: WorkoutCategoryWhereUniqueInput
  }

  /**
   * WorkoutCategory deleteMany
   */
  export type WorkoutCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutCategories to delete
     */
    where?: WorkoutCategoryWhereInput
    /**
     * Limit how many WorkoutCategories to delete.
     */
    limit?: number
  }

  /**
   * WorkoutCategory.templates
   */
  export type WorkoutCategory$templatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutTemplate
     */
    select?: WorkoutTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutTemplate
     */
    omit?: WorkoutTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutTemplateInclude<ExtArgs> | null
    where?: WorkoutTemplateWhereInput
  }

  /**
   * WorkoutCategory.logs
   */
  export type WorkoutCategory$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    where?: WorkoutLogWhereInput
    orderBy?: WorkoutLogOrderByWithRelationInput | WorkoutLogOrderByWithRelationInput[]
    cursor?: WorkoutLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutLogScalarFieldEnum | WorkoutLogScalarFieldEnum[]
  }

  /**
   * WorkoutCategory without action
   */
  export type WorkoutCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutCategory
     */
    select?: WorkoutCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutCategory
     */
    omit?: WorkoutCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutCategoryInclude<ExtArgs> | null
  }


  /**
   * Model FitnessGoal
   */

  export type AggregateFitnessGoal = {
    _count: FitnessGoalCountAggregateOutputType | null
    _avg: FitnessGoalAvgAggregateOutputType | null
    _sum: FitnessGoalSumAggregateOutputType | null
    _min: FitnessGoalMinAggregateOutputType | null
    _max: FitnessGoalMaxAggregateOutputType | null
  }

  export type FitnessGoalAvgAggregateOutputType = {
    id: number | null
    progress: number | null
    userId: number | null
  }

  export type FitnessGoalSumAggregateOutputType = {
    id: number | null
    progress: number | null
    userId: number | null
  }

  export type FitnessGoalMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    description: string | null
    completeBy: Date | null
    progress: number | null
    status: $Enums.GoalStatus | null
    userId: number | null
  }

  export type FitnessGoalMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    description: string | null
    completeBy: Date | null
    progress: number | null
    status: $Enums.GoalStatus | null
    userId: number | null
  }

  export type FitnessGoalCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    description: number
    completeBy: number
    progress: number
    status: number
    subgoals: number
    userId: number
    _all: number
  }


  export type FitnessGoalAvgAggregateInputType = {
    id?: true
    progress?: true
    userId?: true
  }

  export type FitnessGoalSumAggregateInputType = {
    id?: true
    progress?: true
    userId?: true
  }

  export type FitnessGoalMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    completeBy?: true
    progress?: true
    status?: true
    userId?: true
  }

  export type FitnessGoalMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    completeBy?: true
    progress?: true
    status?: true
    userId?: true
  }

  export type FitnessGoalCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    completeBy?: true
    progress?: true
    status?: true
    subgoals?: true
    userId?: true
    _all?: true
  }

  export type FitnessGoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FitnessGoal to aggregate.
     */
    where?: FitnessGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FitnessGoals to fetch.
     */
    orderBy?: FitnessGoalOrderByWithRelationInput | FitnessGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FitnessGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FitnessGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FitnessGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FitnessGoals
    **/
    _count?: true | FitnessGoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FitnessGoalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FitnessGoalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FitnessGoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FitnessGoalMaxAggregateInputType
  }

  export type GetFitnessGoalAggregateType<T extends FitnessGoalAggregateArgs> = {
        [P in keyof T & keyof AggregateFitnessGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFitnessGoal[P]>
      : GetScalarType<T[P], AggregateFitnessGoal[P]>
  }




  export type FitnessGoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FitnessGoalWhereInput
    orderBy?: FitnessGoalOrderByWithAggregationInput | FitnessGoalOrderByWithAggregationInput[]
    by: FitnessGoalScalarFieldEnum[] | FitnessGoalScalarFieldEnum
    having?: FitnessGoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FitnessGoalCountAggregateInputType | true
    _avg?: FitnessGoalAvgAggregateInputType
    _sum?: FitnessGoalSumAggregateInputType
    _min?: FitnessGoalMinAggregateInputType
    _max?: FitnessGoalMaxAggregateInputType
  }

  export type FitnessGoalGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    title: string
    description: string
    completeBy: Date
    progress: number
    status: $Enums.GoalStatus
    subgoals: JsonValue | null
    userId: number
    _count: FitnessGoalCountAggregateOutputType | null
    _avg: FitnessGoalAvgAggregateOutputType | null
    _sum: FitnessGoalSumAggregateOutputType | null
    _min: FitnessGoalMinAggregateOutputType | null
    _max: FitnessGoalMaxAggregateOutputType | null
  }

  type GetFitnessGoalGroupByPayload<T extends FitnessGoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FitnessGoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FitnessGoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FitnessGoalGroupByOutputType[P]>
            : GetScalarType<T[P], FitnessGoalGroupByOutputType[P]>
        }
      >
    >


  export type FitnessGoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    completeBy?: boolean
    progress?: boolean
    status?: boolean
    subgoals?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fitnessGoal"]>

  export type FitnessGoalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    completeBy?: boolean
    progress?: boolean
    status?: boolean
    subgoals?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fitnessGoal"]>

  export type FitnessGoalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    completeBy?: boolean
    progress?: boolean
    status?: boolean
    subgoals?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fitnessGoal"]>

  export type FitnessGoalSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    completeBy?: boolean
    progress?: boolean
    status?: boolean
    subgoals?: boolean
    userId?: boolean
  }

  export type FitnessGoalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "title" | "description" | "completeBy" | "progress" | "status" | "subgoals" | "userId", ExtArgs["result"]["fitnessGoal"]>
  export type FitnessGoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FitnessGoalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FitnessGoalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FitnessGoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FitnessGoal"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      title: string
      description: string
      completeBy: Date
      progress: number
      status: $Enums.GoalStatus
      subgoals: Prisma.JsonValue | null
      userId: number
    }, ExtArgs["result"]["fitnessGoal"]>
    composites: {}
  }

  type FitnessGoalGetPayload<S extends boolean | null | undefined | FitnessGoalDefaultArgs> = $Result.GetResult<Prisma.$FitnessGoalPayload, S>

  type FitnessGoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FitnessGoalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FitnessGoalCountAggregateInputType | true
    }

  export interface FitnessGoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FitnessGoal'], meta: { name: 'FitnessGoal' } }
    /**
     * Find zero or one FitnessGoal that matches the filter.
     * @param {FitnessGoalFindUniqueArgs} args - Arguments to find a FitnessGoal
     * @example
     * // Get one FitnessGoal
     * const fitnessGoal = await prisma.fitnessGoal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FitnessGoalFindUniqueArgs>(args: SelectSubset<T, FitnessGoalFindUniqueArgs<ExtArgs>>): Prisma__FitnessGoalClient<$Result.GetResult<Prisma.$FitnessGoalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FitnessGoal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FitnessGoalFindUniqueOrThrowArgs} args - Arguments to find a FitnessGoal
     * @example
     * // Get one FitnessGoal
     * const fitnessGoal = await prisma.fitnessGoal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FitnessGoalFindUniqueOrThrowArgs>(args: SelectSubset<T, FitnessGoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FitnessGoalClient<$Result.GetResult<Prisma.$FitnessGoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FitnessGoal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FitnessGoalFindFirstArgs} args - Arguments to find a FitnessGoal
     * @example
     * // Get one FitnessGoal
     * const fitnessGoal = await prisma.fitnessGoal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FitnessGoalFindFirstArgs>(args?: SelectSubset<T, FitnessGoalFindFirstArgs<ExtArgs>>): Prisma__FitnessGoalClient<$Result.GetResult<Prisma.$FitnessGoalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FitnessGoal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FitnessGoalFindFirstOrThrowArgs} args - Arguments to find a FitnessGoal
     * @example
     * // Get one FitnessGoal
     * const fitnessGoal = await prisma.fitnessGoal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FitnessGoalFindFirstOrThrowArgs>(args?: SelectSubset<T, FitnessGoalFindFirstOrThrowArgs<ExtArgs>>): Prisma__FitnessGoalClient<$Result.GetResult<Prisma.$FitnessGoalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FitnessGoals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FitnessGoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FitnessGoals
     * const fitnessGoals = await prisma.fitnessGoal.findMany()
     * 
     * // Get first 10 FitnessGoals
     * const fitnessGoals = await prisma.fitnessGoal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fitnessGoalWithIdOnly = await prisma.fitnessGoal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FitnessGoalFindManyArgs>(args?: SelectSubset<T, FitnessGoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FitnessGoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FitnessGoal.
     * @param {FitnessGoalCreateArgs} args - Arguments to create a FitnessGoal.
     * @example
     * // Create one FitnessGoal
     * const FitnessGoal = await prisma.fitnessGoal.create({
     *   data: {
     *     // ... data to create a FitnessGoal
     *   }
     * })
     * 
     */
    create<T extends FitnessGoalCreateArgs>(args: SelectSubset<T, FitnessGoalCreateArgs<ExtArgs>>): Prisma__FitnessGoalClient<$Result.GetResult<Prisma.$FitnessGoalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FitnessGoals.
     * @param {FitnessGoalCreateManyArgs} args - Arguments to create many FitnessGoals.
     * @example
     * // Create many FitnessGoals
     * const fitnessGoal = await prisma.fitnessGoal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FitnessGoalCreateManyArgs>(args?: SelectSubset<T, FitnessGoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FitnessGoals and returns the data saved in the database.
     * @param {FitnessGoalCreateManyAndReturnArgs} args - Arguments to create many FitnessGoals.
     * @example
     * // Create many FitnessGoals
     * const fitnessGoal = await prisma.fitnessGoal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FitnessGoals and only return the `id`
     * const fitnessGoalWithIdOnly = await prisma.fitnessGoal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FitnessGoalCreateManyAndReturnArgs>(args?: SelectSubset<T, FitnessGoalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FitnessGoalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FitnessGoal.
     * @param {FitnessGoalDeleteArgs} args - Arguments to delete one FitnessGoal.
     * @example
     * // Delete one FitnessGoal
     * const FitnessGoal = await prisma.fitnessGoal.delete({
     *   where: {
     *     // ... filter to delete one FitnessGoal
     *   }
     * })
     * 
     */
    delete<T extends FitnessGoalDeleteArgs>(args: SelectSubset<T, FitnessGoalDeleteArgs<ExtArgs>>): Prisma__FitnessGoalClient<$Result.GetResult<Prisma.$FitnessGoalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FitnessGoal.
     * @param {FitnessGoalUpdateArgs} args - Arguments to update one FitnessGoal.
     * @example
     * // Update one FitnessGoal
     * const fitnessGoal = await prisma.fitnessGoal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FitnessGoalUpdateArgs>(args: SelectSubset<T, FitnessGoalUpdateArgs<ExtArgs>>): Prisma__FitnessGoalClient<$Result.GetResult<Prisma.$FitnessGoalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FitnessGoals.
     * @param {FitnessGoalDeleteManyArgs} args - Arguments to filter FitnessGoals to delete.
     * @example
     * // Delete a few FitnessGoals
     * const { count } = await prisma.fitnessGoal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FitnessGoalDeleteManyArgs>(args?: SelectSubset<T, FitnessGoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FitnessGoals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FitnessGoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FitnessGoals
     * const fitnessGoal = await prisma.fitnessGoal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FitnessGoalUpdateManyArgs>(args: SelectSubset<T, FitnessGoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FitnessGoals and returns the data updated in the database.
     * @param {FitnessGoalUpdateManyAndReturnArgs} args - Arguments to update many FitnessGoals.
     * @example
     * // Update many FitnessGoals
     * const fitnessGoal = await prisma.fitnessGoal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FitnessGoals and only return the `id`
     * const fitnessGoalWithIdOnly = await prisma.fitnessGoal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FitnessGoalUpdateManyAndReturnArgs>(args: SelectSubset<T, FitnessGoalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FitnessGoalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FitnessGoal.
     * @param {FitnessGoalUpsertArgs} args - Arguments to update or create a FitnessGoal.
     * @example
     * // Update or create a FitnessGoal
     * const fitnessGoal = await prisma.fitnessGoal.upsert({
     *   create: {
     *     // ... data to create a FitnessGoal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FitnessGoal we want to update
     *   }
     * })
     */
    upsert<T extends FitnessGoalUpsertArgs>(args: SelectSubset<T, FitnessGoalUpsertArgs<ExtArgs>>): Prisma__FitnessGoalClient<$Result.GetResult<Prisma.$FitnessGoalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FitnessGoals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FitnessGoalCountArgs} args - Arguments to filter FitnessGoals to count.
     * @example
     * // Count the number of FitnessGoals
     * const count = await prisma.fitnessGoal.count({
     *   where: {
     *     // ... the filter for the FitnessGoals we want to count
     *   }
     * })
    **/
    count<T extends FitnessGoalCountArgs>(
      args?: Subset<T, FitnessGoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FitnessGoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FitnessGoal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FitnessGoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FitnessGoalAggregateArgs>(args: Subset<T, FitnessGoalAggregateArgs>): Prisma.PrismaPromise<GetFitnessGoalAggregateType<T>>

    /**
     * Group by FitnessGoal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FitnessGoalGroupByArgs} args - Group by arguments.
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
      T extends FitnessGoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FitnessGoalGroupByArgs['orderBy'] }
        : { orderBy?: FitnessGoalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FitnessGoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFitnessGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FitnessGoal model
   */
  readonly fields: FitnessGoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FitnessGoal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FitnessGoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FitnessGoal model
   */
  interface FitnessGoalFieldRefs {
    readonly id: FieldRef<"FitnessGoal", 'Int'>
    readonly createdAt: FieldRef<"FitnessGoal", 'DateTime'>
    readonly updatedAt: FieldRef<"FitnessGoal", 'DateTime'>
    readonly title: FieldRef<"FitnessGoal", 'String'>
    readonly description: FieldRef<"FitnessGoal", 'String'>
    readonly completeBy: FieldRef<"FitnessGoal", 'DateTime'>
    readonly progress: FieldRef<"FitnessGoal", 'Float'>
    readonly status: FieldRef<"FitnessGoal", 'GoalStatus'>
    readonly subgoals: FieldRef<"FitnessGoal", 'Json'>
    readonly userId: FieldRef<"FitnessGoal", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FitnessGoal findUnique
   */
  export type FitnessGoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitnessGoal
     */
    select?: FitnessGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FitnessGoal
     */
    omit?: FitnessGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FitnessGoalInclude<ExtArgs> | null
    /**
     * Filter, which FitnessGoal to fetch.
     */
    where: FitnessGoalWhereUniqueInput
  }

  /**
   * FitnessGoal findUniqueOrThrow
   */
  export type FitnessGoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitnessGoal
     */
    select?: FitnessGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FitnessGoal
     */
    omit?: FitnessGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FitnessGoalInclude<ExtArgs> | null
    /**
     * Filter, which FitnessGoal to fetch.
     */
    where: FitnessGoalWhereUniqueInput
  }

  /**
   * FitnessGoal findFirst
   */
  export type FitnessGoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitnessGoal
     */
    select?: FitnessGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FitnessGoal
     */
    omit?: FitnessGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FitnessGoalInclude<ExtArgs> | null
    /**
     * Filter, which FitnessGoal to fetch.
     */
    where?: FitnessGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FitnessGoals to fetch.
     */
    orderBy?: FitnessGoalOrderByWithRelationInput | FitnessGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FitnessGoals.
     */
    cursor?: FitnessGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FitnessGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FitnessGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FitnessGoals.
     */
    distinct?: FitnessGoalScalarFieldEnum | FitnessGoalScalarFieldEnum[]
  }

  /**
   * FitnessGoal findFirstOrThrow
   */
  export type FitnessGoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitnessGoal
     */
    select?: FitnessGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FitnessGoal
     */
    omit?: FitnessGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FitnessGoalInclude<ExtArgs> | null
    /**
     * Filter, which FitnessGoal to fetch.
     */
    where?: FitnessGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FitnessGoals to fetch.
     */
    orderBy?: FitnessGoalOrderByWithRelationInput | FitnessGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FitnessGoals.
     */
    cursor?: FitnessGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FitnessGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FitnessGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FitnessGoals.
     */
    distinct?: FitnessGoalScalarFieldEnum | FitnessGoalScalarFieldEnum[]
  }

  /**
   * FitnessGoal findMany
   */
  export type FitnessGoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitnessGoal
     */
    select?: FitnessGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FitnessGoal
     */
    omit?: FitnessGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FitnessGoalInclude<ExtArgs> | null
    /**
     * Filter, which FitnessGoals to fetch.
     */
    where?: FitnessGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FitnessGoals to fetch.
     */
    orderBy?: FitnessGoalOrderByWithRelationInput | FitnessGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FitnessGoals.
     */
    cursor?: FitnessGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FitnessGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FitnessGoals.
     */
    skip?: number
    distinct?: FitnessGoalScalarFieldEnum | FitnessGoalScalarFieldEnum[]
  }

  /**
   * FitnessGoal create
   */
  export type FitnessGoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitnessGoal
     */
    select?: FitnessGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FitnessGoal
     */
    omit?: FitnessGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FitnessGoalInclude<ExtArgs> | null
    /**
     * The data needed to create a FitnessGoal.
     */
    data: XOR<FitnessGoalCreateInput, FitnessGoalUncheckedCreateInput>
  }

  /**
   * FitnessGoal createMany
   */
  export type FitnessGoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FitnessGoals.
     */
    data: FitnessGoalCreateManyInput | FitnessGoalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FitnessGoal createManyAndReturn
   */
  export type FitnessGoalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitnessGoal
     */
    select?: FitnessGoalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FitnessGoal
     */
    omit?: FitnessGoalOmit<ExtArgs> | null
    /**
     * The data used to create many FitnessGoals.
     */
    data: FitnessGoalCreateManyInput | FitnessGoalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FitnessGoalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FitnessGoal update
   */
  export type FitnessGoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitnessGoal
     */
    select?: FitnessGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FitnessGoal
     */
    omit?: FitnessGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FitnessGoalInclude<ExtArgs> | null
    /**
     * The data needed to update a FitnessGoal.
     */
    data: XOR<FitnessGoalUpdateInput, FitnessGoalUncheckedUpdateInput>
    /**
     * Choose, which FitnessGoal to update.
     */
    where: FitnessGoalWhereUniqueInput
  }

  /**
   * FitnessGoal updateMany
   */
  export type FitnessGoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FitnessGoals.
     */
    data: XOR<FitnessGoalUpdateManyMutationInput, FitnessGoalUncheckedUpdateManyInput>
    /**
     * Filter which FitnessGoals to update
     */
    where?: FitnessGoalWhereInput
    /**
     * Limit how many FitnessGoals to update.
     */
    limit?: number
  }

  /**
   * FitnessGoal updateManyAndReturn
   */
  export type FitnessGoalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitnessGoal
     */
    select?: FitnessGoalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FitnessGoal
     */
    omit?: FitnessGoalOmit<ExtArgs> | null
    /**
     * The data used to update FitnessGoals.
     */
    data: XOR<FitnessGoalUpdateManyMutationInput, FitnessGoalUncheckedUpdateManyInput>
    /**
     * Filter which FitnessGoals to update
     */
    where?: FitnessGoalWhereInput
    /**
     * Limit how many FitnessGoals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FitnessGoalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FitnessGoal upsert
   */
  export type FitnessGoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitnessGoal
     */
    select?: FitnessGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FitnessGoal
     */
    omit?: FitnessGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FitnessGoalInclude<ExtArgs> | null
    /**
     * The filter to search for the FitnessGoal to update in case it exists.
     */
    where: FitnessGoalWhereUniqueInput
    /**
     * In case the FitnessGoal found by the `where` argument doesn't exist, create a new FitnessGoal with this data.
     */
    create: XOR<FitnessGoalCreateInput, FitnessGoalUncheckedCreateInput>
    /**
     * In case the FitnessGoal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FitnessGoalUpdateInput, FitnessGoalUncheckedUpdateInput>
  }

  /**
   * FitnessGoal delete
   */
  export type FitnessGoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitnessGoal
     */
    select?: FitnessGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FitnessGoal
     */
    omit?: FitnessGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FitnessGoalInclude<ExtArgs> | null
    /**
     * Filter which FitnessGoal to delete.
     */
    where: FitnessGoalWhereUniqueInput
  }

  /**
   * FitnessGoal deleteMany
   */
  export type FitnessGoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FitnessGoals to delete
     */
    where?: FitnessGoalWhereInput
    /**
     * Limit how many FitnessGoals to delete.
     */
    limit?: number
  }

  /**
   * FitnessGoal without action
   */
  export type FitnessGoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FitnessGoal
     */
    select?: FitnessGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FitnessGoal
     */
    omit?: FitnessGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FitnessGoalInclude<ExtArgs> | null
  }


  /**
   * Model Exercises
   */

  export type AggregateExercises = {
    _count: ExercisesCountAggregateOutputType | null
    _avg: ExercisesAvgAggregateOutputType | null
    _sum: ExercisesSumAggregateOutputType | null
    _min: ExercisesMinAggregateOutputType | null
    _max: ExercisesMaxAggregateOutputType | null
  }

  export type ExercisesAvgAggregateOutputType = {
    id: number | null
    useCount: number | null
    userId: number | null
  }

  export type ExercisesSumAggregateOutputType = {
    id: number | null
    useCount: number | null
    userId: number | null
  }

  export type ExercisesMinAggregateOutputType = {
    id: number | null
    name: string | null
    custom: boolean | null
    type: string | null
    muscle: string | null
    equipment: string | null
    notes: string | null
    useCount: number | null
    met: string | null
    userId: number | null
  }

  export type ExercisesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    custom: boolean | null
    type: string | null
    muscle: string | null
    equipment: string | null
    notes: string | null
    useCount: number | null
    met: string | null
    userId: number | null
  }

  export type ExercisesCountAggregateOutputType = {
    id: number
    name: number
    custom: number
    type: number
    muscle: number
    equipment: number
    notes: number
    useCount: number
    met: number
    userId: number
    _all: number
  }


  export type ExercisesAvgAggregateInputType = {
    id?: true
    useCount?: true
    userId?: true
  }

  export type ExercisesSumAggregateInputType = {
    id?: true
    useCount?: true
    userId?: true
  }

  export type ExercisesMinAggregateInputType = {
    id?: true
    name?: true
    custom?: true
    type?: true
    muscle?: true
    equipment?: true
    notes?: true
    useCount?: true
    met?: true
    userId?: true
  }

  export type ExercisesMaxAggregateInputType = {
    id?: true
    name?: true
    custom?: true
    type?: true
    muscle?: true
    equipment?: true
    notes?: true
    useCount?: true
    met?: true
    userId?: true
  }

  export type ExercisesCountAggregateInputType = {
    id?: true
    name?: true
    custom?: true
    type?: true
    muscle?: true
    equipment?: true
    notes?: true
    useCount?: true
    met?: true
    userId?: true
    _all?: true
  }

  export type ExercisesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercises to aggregate.
     */
    where?: ExercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExercisesOrderByWithRelationInput | ExercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exercises
    **/
    _count?: true | ExercisesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExercisesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExercisesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExercisesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExercisesMaxAggregateInputType
  }

  export type GetExercisesAggregateType<T extends ExercisesAggregateArgs> = {
        [P in keyof T & keyof AggregateExercises]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercises[P]>
      : GetScalarType<T[P], AggregateExercises[P]>
  }




  export type ExercisesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExercisesWhereInput
    orderBy?: ExercisesOrderByWithAggregationInput | ExercisesOrderByWithAggregationInput[]
    by: ExercisesScalarFieldEnum[] | ExercisesScalarFieldEnum
    having?: ExercisesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExercisesCountAggregateInputType | true
    _avg?: ExercisesAvgAggregateInputType
    _sum?: ExercisesSumAggregateInputType
    _min?: ExercisesMinAggregateInputType
    _max?: ExercisesMaxAggregateInputType
  }

  export type ExercisesGroupByOutputType = {
    id: number
    name: string
    custom: boolean
    type: string
    muscle: string
    equipment: string
    notes: string | null
    useCount: number
    met: string
    userId: number
    _count: ExercisesCountAggregateOutputType | null
    _avg: ExercisesAvgAggregateOutputType | null
    _sum: ExercisesSumAggregateOutputType | null
    _min: ExercisesMinAggregateOutputType | null
    _max: ExercisesMaxAggregateOutputType | null
  }

  type GetExercisesGroupByPayload<T extends ExercisesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExercisesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExercisesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExercisesGroupByOutputType[P]>
            : GetScalarType<T[P], ExercisesGroupByOutputType[P]>
        }
      >
    >


  export type ExercisesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    custom?: boolean
    type?: boolean
    muscle?: boolean
    equipment?: boolean
    notes?: boolean
    useCount?: boolean
    met?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercises"]>

  export type ExercisesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    custom?: boolean
    type?: boolean
    muscle?: boolean
    equipment?: boolean
    notes?: boolean
    useCount?: boolean
    met?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercises"]>

  export type ExercisesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    custom?: boolean
    type?: boolean
    muscle?: boolean
    equipment?: boolean
    notes?: boolean
    useCount?: boolean
    met?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercises"]>

  export type ExercisesSelectScalar = {
    id?: boolean
    name?: boolean
    custom?: boolean
    type?: boolean
    muscle?: boolean
    equipment?: boolean
    notes?: boolean
    useCount?: boolean
    met?: boolean
    userId?: boolean
  }

  export type ExercisesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "custom" | "type" | "muscle" | "equipment" | "notes" | "useCount" | "met" | "userId", ExtArgs["result"]["exercises"]>
  export type ExercisesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExercisesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExercisesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ExercisesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exercises"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      custom: boolean
      type: string
      muscle: string
      equipment: string
      notes: string | null
      useCount: number
      met: string
      userId: number
    }, ExtArgs["result"]["exercises"]>
    composites: {}
  }

  type ExercisesGetPayload<S extends boolean | null | undefined | ExercisesDefaultArgs> = $Result.GetResult<Prisma.$ExercisesPayload, S>

  type ExercisesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExercisesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExercisesCountAggregateInputType | true
    }

  export interface ExercisesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exercises'], meta: { name: 'Exercises' } }
    /**
     * Find zero or one Exercises that matches the filter.
     * @param {ExercisesFindUniqueArgs} args - Arguments to find a Exercises
     * @example
     * // Get one Exercises
     * const exercises = await prisma.exercises.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExercisesFindUniqueArgs>(args: SelectSubset<T, ExercisesFindUniqueArgs<ExtArgs>>): Prisma__ExercisesClient<$Result.GetResult<Prisma.$ExercisesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exercises that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExercisesFindUniqueOrThrowArgs} args - Arguments to find a Exercises
     * @example
     * // Get one Exercises
     * const exercises = await prisma.exercises.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExercisesFindUniqueOrThrowArgs>(args: SelectSubset<T, ExercisesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExercisesClient<$Result.GetResult<Prisma.$ExercisesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExercisesFindFirstArgs} args - Arguments to find a Exercises
     * @example
     * // Get one Exercises
     * const exercises = await prisma.exercises.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExercisesFindFirstArgs>(args?: SelectSubset<T, ExercisesFindFirstArgs<ExtArgs>>): Prisma__ExercisesClient<$Result.GetResult<Prisma.$ExercisesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercises that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExercisesFindFirstOrThrowArgs} args - Arguments to find a Exercises
     * @example
     * // Get one Exercises
     * const exercises = await prisma.exercises.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExercisesFindFirstOrThrowArgs>(args?: SelectSubset<T, ExercisesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExercisesClient<$Result.GetResult<Prisma.$ExercisesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExercisesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercises
     * const exercises = await prisma.exercises.findMany()
     * 
     * // Get first 10 Exercises
     * const exercises = await prisma.exercises.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exercisesWithIdOnly = await prisma.exercises.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExercisesFindManyArgs>(args?: SelectSubset<T, ExercisesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exercises.
     * @param {ExercisesCreateArgs} args - Arguments to create a Exercises.
     * @example
     * // Create one Exercises
     * const Exercises = await prisma.exercises.create({
     *   data: {
     *     // ... data to create a Exercises
     *   }
     * })
     * 
     */
    create<T extends ExercisesCreateArgs>(args: SelectSubset<T, ExercisesCreateArgs<ExtArgs>>): Prisma__ExercisesClient<$Result.GetResult<Prisma.$ExercisesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exercises.
     * @param {ExercisesCreateManyArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercises = await prisma.exercises.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExercisesCreateManyArgs>(args?: SelectSubset<T, ExercisesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exercises and returns the data saved in the database.
     * @param {ExercisesCreateManyAndReturnArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercises = await prisma.exercises.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exercises and only return the `id`
     * const exercisesWithIdOnly = await prisma.exercises.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExercisesCreateManyAndReturnArgs>(args?: SelectSubset<T, ExercisesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exercises.
     * @param {ExercisesDeleteArgs} args - Arguments to delete one Exercises.
     * @example
     * // Delete one Exercises
     * const Exercises = await prisma.exercises.delete({
     *   where: {
     *     // ... filter to delete one Exercises
     *   }
     * })
     * 
     */
    delete<T extends ExercisesDeleteArgs>(args: SelectSubset<T, ExercisesDeleteArgs<ExtArgs>>): Prisma__ExercisesClient<$Result.GetResult<Prisma.$ExercisesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exercises.
     * @param {ExercisesUpdateArgs} args - Arguments to update one Exercises.
     * @example
     * // Update one Exercises
     * const exercises = await prisma.exercises.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExercisesUpdateArgs>(args: SelectSubset<T, ExercisesUpdateArgs<ExtArgs>>): Prisma__ExercisesClient<$Result.GetResult<Prisma.$ExercisesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exercises.
     * @param {ExercisesDeleteManyArgs} args - Arguments to filter Exercises to delete.
     * @example
     * // Delete a few Exercises
     * const { count } = await prisma.exercises.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExercisesDeleteManyArgs>(args?: SelectSubset<T, ExercisesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExercisesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercises
     * const exercises = await prisma.exercises.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExercisesUpdateManyArgs>(args: SelectSubset<T, ExercisesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises and returns the data updated in the database.
     * @param {ExercisesUpdateManyAndReturnArgs} args - Arguments to update many Exercises.
     * @example
     * // Update many Exercises
     * const exercises = await prisma.exercises.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exercises and only return the `id`
     * const exercisesWithIdOnly = await prisma.exercises.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExercisesUpdateManyAndReturnArgs>(args: SelectSubset<T, ExercisesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exercises.
     * @param {ExercisesUpsertArgs} args - Arguments to update or create a Exercises.
     * @example
     * // Update or create a Exercises
     * const exercises = await prisma.exercises.upsert({
     *   create: {
     *     // ... data to create a Exercises
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercises we want to update
     *   }
     * })
     */
    upsert<T extends ExercisesUpsertArgs>(args: SelectSubset<T, ExercisesUpsertArgs<ExtArgs>>): Prisma__ExercisesClient<$Result.GetResult<Prisma.$ExercisesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExercisesCountArgs} args - Arguments to filter Exercises to count.
     * @example
     * // Count the number of Exercises
     * const count = await prisma.exercises.count({
     *   where: {
     *     // ... the filter for the Exercises we want to count
     *   }
     * })
    **/
    count<T extends ExercisesCountArgs>(
      args?: Subset<T, ExercisesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExercisesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExercisesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExercisesAggregateArgs>(args: Subset<T, ExercisesAggregateArgs>): Prisma.PrismaPromise<GetExercisesAggregateType<T>>

    /**
     * Group by Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExercisesGroupByArgs} args - Group by arguments.
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
      T extends ExercisesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExercisesGroupByArgs['orderBy'] }
        : { orderBy?: ExercisesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExercisesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExercisesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exercises model
   */
  readonly fields: ExercisesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exercises.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExercisesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Exercises model
   */
  interface ExercisesFieldRefs {
    readonly id: FieldRef<"Exercises", 'Int'>
    readonly name: FieldRef<"Exercises", 'String'>
    readonly custom: FieldRef<"Exercises", 'Boolean'>
    readonly type: FieldRef<"Exercises", 'String'>
    readonly muscle: FieldRef<"Exercises", 'String'>
    readonly equipment: FieldRef<"Exercises", 'String'>
    readonly notes: FieldRef<"Exercises", 'String'>
    readonly useCount: FieldRef<"Exercises", 'Int'>
    readonly met: FieldRef<"Exercises", 'String'>
    readonly userId: FieldRef<"Exercises", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Exercises findUnique
   */
  export type ExercisesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercises
     */
    select?: ExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercises
     */
    omit?: ExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercisesInclude<ExtArgs> | null
    /**
     * Filter, which Exercises to fetch.
     */
    where: ExercisesWhereUniqueInput
  }

  /**
   * Exercises findUniqueOrThrow
   */
  export type ExercisesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercises
     */
    select?: ExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercises
     */
    omit?: ExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercisesInclude<ExtArgs> | null
    /**
     * Filter, which Exercises to fetch.
     */
    where: ExercisesWhereUniqueInput
  }

  /**
   * Exercises findFirst
   */
  export type ExercisesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercises
     */
    select?: ExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercises
     */
    omit?: ExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercisesInclude<ExtArgs> | null
    /**
     * Filter, which Exercises to fetch.
     */
    where?: ExercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExercisesOrderByWithRelationInput | ExercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExercisesScalarFieldEnum | ExercisesScalarFieldEnum[]
  }

  /**
   * Exercises findFirstOrThrow
   */
  export type ExercisesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercises
     */
    select?: ExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercises
     */
    omit?: ExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercisesInclude<ExtArgs> | null
    /**
     * Filter, which Exercises to fetch.
     */
    where?: ExercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExercisesOrderByWithRelationInput | ExercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExercisesScalarFieldEnum | ExercisesScalarFieldEnum[]
  }

  /**
   * Exercises findMany
   */
  export type ExercisesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercises
     */
    select?: ExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercises
     */
    omit?: ExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercisesInclude<ExtArgs> | null
    /**
     * Filter, which Exercises to fetch.
     */
    where?: ExercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExercisesOrderByWithRelationInput | ExercisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exercises.
     */
    cursor?: ExercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    distinct?: ExercisesScalarFieldEnum | ExercisesScalarFieldEnum[]
  }

  /**
   * Exercises create
   */
  export type ExercisesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercises
     */
    select?: ExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercises
     */
    omit?: ExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercisesInclude<ExtArgs> | null
    /**
     * The data needed to create a Exercises.
     */
    data: XOR<ExercisesCreateInput, ExercisesUncheckedCreateInput>
  }

  /**
   * Exercises createMany
   */
  export type ExercisesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exercises.
     */
    data: ExercisesCreateManyInput | ExercisesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exercises createManyAndReturn
   */
  export type ExercisesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercises
     */
    select?: ExercisesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercises
     */
    omit?: ExercisesOmit<ExtArgs> | null
    /**
     * The data used to create many Exercises.
     */
    data: ExercisesCreateManyInput | ExercisesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercisesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exercises update
   */
  export type ExercisesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercises
     */
    select?: ExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercises
     */
    omit?: ExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercisesInclude<ExtArgs> | null
    /**
     * The data needed to update a Exercises.
     */
    data: XOR<ExercisesUpdateInput, ExercisesUncheckedUpdateInput>
    /**
     * Choose, which Exercises to update.
     */
    where: ExercisesWhereUniqueInput
  }

  /**
   * Exercises updateMany
   */
  export type ExercisesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExercisesUpdateManyMutationInput, ExercisesUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExercisesWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercises updateManyAndReturn
   */
  export type ExercisesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercises
     */
    select?: ExercisesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exercises
     */
    omit?: ExercisesOmit<ExtArgs> | null
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExercisesUpdateManyMutationInput, ExercisesUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExercisesWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercisesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exercises upsert
   */
  export type ExercisesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercises
     */
    select?: ExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercises
     */
    omit?: ExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercisesInclude<ExtArgs> | null
    /**
     * The filter to search for the Exercises to update in case it exists.
     */
    where: ExercisesWhereUniqueInput
    /**
     * In case the Exercises found by the `where` argument doesn't exist, create a new Exercises with this data.
     */
    create: XOR<ExercisesCreateInput, ExercisesUncheckedCreateInput>
    /**
     * In case the Exercises was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExercisesUpdateInput, ExercisesUncheckedUpdateInput>
  }

  /**
   * Exercises delete
   */
  export type ExercisesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercises
     */
    select?: ExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercises
     */
    omit?: ExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercisesInclude<ExtArgs> | null
    /**
     * Filter which Exercises to delete.
     */
    where: ExercisesWhereUniqueInput
  }

  /**
   * Exercises deleteMany
   */
  export type ExercisesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercises to delete
     */
    where?: ExercisesWhereInput
    /**
     * Limit how many Exercises to delete.
     */
    limit?: number
  }

  /**
   * Exercises without action
   */
  export type ExercisesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercises
     */
    select?: ExercisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercises
     */
    omit?: ExercisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExercisesInclude<ExtArgs> | null
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
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    avatarUrl: 'avatarUrl',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    role: 'role',
    isVerified: 'isVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    weight: 'weight',
    unitPref: 'unitPref'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WorkoutTemplateScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    templateName: 'templateName',
    description: 'description',
    routine: 'routine',
    duration: 'duration',
    notes: 'notes',
    userId: 'userId'
  };

  export type WorkoutTemplateScalarFieldEnum = (typeof WorkoutTemplateScalarFieldEnum)[keyof typeof WorkoutTemplateScalarFieldEnum]


  export const WorkoutLogScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    description: 'description',
    routine: 'routine',
    duration: 'duration',
    notes: 'notes',
    estimatedCalorieBurn: 'estimatedCalorieBurn',
    userId: 'userId'
  };

  export type WorkoutLogScalarFieldEnum = (typeof WorkoutLogScalarFieldEnum)[keyof typeof WorkoutLogScalarFieldEnum]


  export const WorkoutCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId',
    templateId: 'templateId'
  };

  export type WorkoutCategoryScalarFieldEnum = (typeof WorkoutCategoryScalarFieldEnum)[keyof typeof WorkoutCategoryScalarFieldEnum]


  export const FitnessGoalScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    description: 'description',
    completeBy: 'completeBy',
    progress: 'progress',
    status: 'status',
    subgoals: 'subgoals',
    userId: 'userId'
  };

  export type FitnessGoalScalarFieldEnum = (typeof FitnessGoalScalarFieldEnum)[keyof typeof FitnessGoalScalarFieldEnum]


  export const ExercisesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    custom: 'custom',
    type: 'type',
    muscle: 'muscle',
    equipment: 'equipment',
    notes: 'notes',
    useCount: 'useCount',
    met: 'met',
    userId: 'userId'
  };

  export type ExercisesScalarFieldEnum = (typeof ExercisesScalarFieldEnum)[keyof typeof ExercisesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'GoalStatus'
   */
  export type EnumGoalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalStatus'>
    


  /**
   * Reference to a field of type 'GoalStatus[]'
   */
  export type ListEnumGoalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    avatarUrl?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    weight?: FloatFilter<"User"> | number
    unitPref?: StringFilter<"User"> | string
    workoutLogs?: WorkoutLogListRelationFilter
    workoutTemplates?: WorkoutTemplateListRelationFilter
    fitnessGoals?: FitnessGoalListRelationFilter
    savedExercises?: ExercisesListRelationFilter
    createdCategories?: WorkoutCategoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    avatarUrl?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    weight?: SortOrder
    unitPref?: SortOrder
    workoutLogs?: WorkoutLogOrderByRelationAggregateInput
    workoutTemplates?: WorkoutTemplateOrderByRelationAggregateInput
    fitnessGoals?: FitnessGoalOrderByRelationAggregateInput
    savedExercises?: ExercisesOrderByRelationAggregateInput
    createdCategories?: WorkoutCategoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    avatarUrl?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    weight?: FloatFilter<"User"> | number
    unitPref?: StringFilter<"User"> | string
    workoutLogs?: WorkoutLogListRelationFilter
    workoutTemplates?: WorkoutTemplateListRelationFilter
    fitnessGoals?: FitnessGoalListRelationFilter
    savedExercises?: ExercisesListRelationFilter
    createdCategories?: WorkoutCategoryListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    avatarUrl?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    weight?: SortOrder
    unitPref?: SortOrder
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
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    weight?: FloatWithAggregatesFilter<"User"> | number
    unitPref?: StringWithAggregatesFilter<"User"> | string
  }

  export type WorkoutTemplateWhereInput = {
    AND?: WorkoutTemplateWhereInput | WorkoutTemplateWhereInput[]
    OR?: WorkoutTemplateWhereInput[]
    NOT?: WorkoutTemplateWhereInput | WorkoutTemplateWhereInput[]
    id?: IntFilter<"WorkoutTemplate"> | number
    createdAt?: DateTimeFilter<"WorkoutTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"WorkoutTemplate"> | Date | string
    templateName?: StringFilter<"WorkoutTemplate"> | string
    description?: StringFilter<"WorkoutTemplate"> | string
    routine?: JsonFilter<"WorkoutTemplate">
    duration?: IntFilter<"WorkoutTemplate"> | number
    notes?: StringNullableFilter<"WorkoutTemplate"> | string | null
    userId?: IntFilter<"WorkoutTemplate"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    categories?: WorkoutCategoryListRelationFilter
  }

  export type WorkoutTemplateOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    templateName?: SortOrder
    description?: SortOrder
    routine?: SortOrder
    duration?: SortOrder
    notes?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    categories?: WorkoutCategoryOrderByRelationAggregateInput
  }

  export type WorkoutTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    templateName?: string
    AND?: WorkoutTemplateWhereInput | WorkoutTemplateWhereInput[]
    OR?: WorkoutTemplateWhereInput[]
    NOT?: WorkoutTemplateWhereInput | WorkoutTemplateWhereInput[]
    createdAt?: DateTimeFilter<"WorkoutTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"WorkoutTemplate"> | Date | string
    description?: StringFilter<"WorkoutTemplate"> | string
    routine?: JsonFilter<"WorkoutTemplate">
    duration?: IntFilter<"WorkoutTemplate"> | number
    notes?: StringNullableFilter<"WorkoutTemplate"> | string | null
    userId?: IntFilter<"WorkoutTemplate"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    categories?: WorkoutCategoryListRelationFilter
  }, "id" | "templateName">

  export type WorkoutTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    templateName?: SortOrder
    description?: SortOrder
    routine?: SortOrder
    duration?: SortOrder
    notes?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: WorkoutTemplateCountOrderByAggregateInput
    _avg?: WorkoutTemplateAvgOrderByAggregateInput
    _max?: WorkoutTemplateMaxOrderByAggregateInput
    _min?: WorkoutTemplateMinOrderByAggregateInput
    _sum?: WorkoutTemplateSumOrderByAggregateInput
  }

  export type WorkoutTemplateScalarWhereWithAggregatesInput = {
    AND?: WorkoutTemplateScalarWhereWithAggregatesInput | WorkoutTemplateScalarWhereWithAggregatesInput[]
    OR?: WorkoutTemplateScalarWhereWithAggregatesInput[]
    NOT?: WorkoutTemplateScalarWhereWithAggregatesInput | WorkoutTemplateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WorkoutTemplate"> | number
    createdAt?: DateTimeWithAggregatesFilter<"WorkoutTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkoutTemplate"> | Date | string
    templateName?: StringWithAggregatesFilter<"WorkoutTemplate"> | string
    description?: StringWithAggregatesFilter<"WorkoutTemplate"> | string
    routine?: JsonWithAggregatesFilter<"WorkoutTemplate">
    duration?: IntWithAggregatesFilter<"WorkoutTemplate"> | number
    notes?: StringNullableWithAggregatesFilter<"WorkoutTemplate"> | string | null
    userId?: IntWithAggregatesFilter<"WorkoutTemplate"> | number
  }

  export type WorkoutLogWhereInput = {
    AND?: WorkoutLogWhereInput | WorkoutLogWhereInput[]
    OR?: WorkoutLogWhereInput[]
    NOT?: WorkoutLogWhereInput | WorkoutLogWhereInput[]
    id?: IntFilter<"WorkoutLog"> | number
    createdAt?: DateTimeFilter<"WorkoutLog"> | Date | string
    updatedAt?: DateTimeFilter<"WorkoutLog"> | Date | string
    title?: StringFilter<"WorkoutLog"> | string
    description?: StringFilter<"WorkoutLog"> | string
    routine?: JsonFilter<"WorkoutLog">
    duration?: IntFilter<"WorkoutLog"> | number
    notes?: StringNullableFilter<"WorkoutLog"> | string | null
    estimatedCalorieBurn?: IntFilter<"WorkoutLog"> | number
    userId?: IntFilter<"WorkoutLog"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    categories?: WorkoutCategoryListRelationFilter
  }

  export type WorkoutLogOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    routine?: SortOrder
    duration?: SortOrder
    notes?: SortOrderInput | SortOrder
    estimatedCalorieBurn?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    categories?: WorkoutCategoryOrderByRelationAggregateInput
  }

  export type WorkoutLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    AND?: WorkoutLogWhereInput | WorkoutLogWhereInput[]
    OR?: WorkoutLogWhereInput[]
    NOT?: WorkoutLogWhereInput | WorkoutLogWhereInput[]
    createdAt?: DateTimeFilter<"WorkoutLog"> | Date | string
    updatedAt?: DateTimeFilter<"WorkoutLog"> | Date | string
    description?: StringFilter<"WorkoutLog"> | string
    routine?: JsonFilter<"WorkoutLog">
    duration?: IntFilter<"WorkoutLog"> | number
    notes?: StringNullableFilter<"WorkoutLog"> | string | null
    estimatedCalorieBurn?: IntFilter<"WorkoutLog"> | number
    userId?: IntFilter<"WorkoutLog"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    categories?: WorkoutCategoryListRelationFilter
  }, "id" | "title">

  export type WorkoutLogOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    routine?: SortOrder
    duration?: SortOrder
    notes?: SortOrderInput | SortOrder
    estimatedCalorieBurn?: SortOrder
    userId?: SortOrder
    _count?: WorkoutLogCountOrderByAggregateInput
    _avg?: WorkoutLogAvgOrderByAggregateInput
    _max?: WorkoutLogMaxOrderByAggregateInput
    _min?: WorkoutLogMinOrderByAggregateInput
    _sum?: WorkoutLogSumOrderByAggregateInput
  }

  export type WorkoutLogScalarWhereWithAggregatesInput = {
    AND?: WorkoutLogScalarWhereWithAggregatesInput | WorkoutLogScalarWhereWithAggregatesInput[]
    OR?: WorkoutLogScalarWhereWithAggregatesInput[]
    NOT?: WorkoutLogScalarWhereWithAggregatesInput | WorkoutLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WorkoutLog"> | number
    createdAt?: DateTimeWithAggregatesFilter<"WorkoutLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkoutLog"> | Date | string
    title?: StringWithAggregatesFilter<"WorkoutLog"> | string
    description?: StringWithAggregatesFilter<"WorkoutLog"> | string
    routine?: JsonWithAggregatesFilter<"WorkoutLog">
    duration?: IntWithAggregatesFilter<"WorkoutLog"> | number
    notes?: StringNullableWithAggregatesFilter<"WorkoutLog"> | string | null
    estimatedCalorieBurn?: IntWithAggregatesFilter<"WorkoutLog"> | number
    userId?: IntWithAggregatesFilter<"WorkoutLog"> | number
  }

  export type WorkoutCategoryWhereInput = {
    AND?: WorkoutCategoryWhereInput | WorkoutCategoryWhereInput[]
    OR?: WorkoutCategoryWhereInput[]
    NOT?: WorkoutCategoryWhereInput | WorkoutCategoryWhereInput[]
    id?: IntFilter<"WorkoutCategory"> | number
    name?: StringFilter<"WorkoutCategory"> | string
    userId?: IntFilter<"WorkoutCategory"> | number
    templateId?: IntNullableFilter<"WorkoutCategory"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    templates?: XOR<WorkoutTemplateNullableScalarRelationFilter, WorkoutTemplateWhereInput> | null
    logs?: WorkoutLogListRelationFilter
  }

  export type WorkoutCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    templateId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    templates?: WorkoutTemplateOrderByWithRelationInput
    logs?: WorkoutLogOrderByRelationAggregateInput
  }

  export type WorkoutCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: WorkoutCategoryWhereInput | WorkoutCategoryWhereInput[]
    OR?: WorkoutCategoryWhereInput[]
    NOT?: WorkoutCategoryWhereInput | WorkoutCategoryWhereInput[]
    userId?: IntFilter<"WorkoutCategory"> | number
    templateId?: IntNullableFilter<"WorkoutCategory"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    templates?: XOR<WorkoutTemplateNullableScalarRelationFilter, WorkoutTemplateWhereInput> | null
    logs?: WorkoutLogListRelationFilter
  }, "id" | "name">

  export type WorkoutCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    templateId?: SortOrderInput | SortOrder
    _count?: WorkoutCategoryCountOrderByAggregateInput
    _avg?: WorkoutCategoryAvgOrderByAggregateInput
    _max?: WorkoutCategoryMaxOrderByAggregateInput
    _min?: WorkoutCategoryMinOrderByAggregateInput
    _sum?: WorkoutCategorySumOrderByAggregateInput
  }

  export type WorkoutCategoryScalarWhereWithAggregatesInput = {
    AND?: WorkoutCategoryScalarWhereWithAggregatesInput | WorkoutCategoryScalarWhereWithAggregatesInput[]
    OR?: WorkoutCategoryScalarWhereWithAggregatesInput[]
    NOT?: WorkoutCategoryScalarWhereWithAggregatesInput | WorkoutCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WorkoutCategory"> | number
    name?: StringWithAggregatesFilter<"WorkoutCategory"> | string
    userId?: IntWithAggregatesFilter<"WorkoutCategory"> | number
    templateId?: IntNullableWithAggregatesFilter<"WorkoutCategory"> | number | null
  }

  export type FitnessGoalWhereInput = {
    AND?: FitnessGoalWhereInput | FitnessGoalWhereInput[]
    OR?: FitnessGoalWhereInput[]
    NOT?: FitnessGoalWhereInput | FitnessGoalWhereInput[]
    id?: IntFilter<"FitnessGoal"> | number
    createdAt?: DateTimeFilter<"FitnessGoal"> | Date | string
    updatedAt?: DateTimeFilter<"FitnessGoal"> | Date | string
    title?: StringFilter<"FitnessGoal"> | string
    description?: StringFilter<"FitnessGoal"> | string
    completeBy?: DateTimeFilter<"FitnessGoal"> | Date | string
    progress?: FloatFilter<"FitnessGoal"> | number
    status?: EnumGoalStatusFilter<"FitnessGoal"> | $Enums.GoalStatus
    subgoals?: JsonNullableFilter<"FitnessGoal">
    userId?: IntFilter<"FitnessGoal"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FitnessGoalOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    completeBy?: SortOrder
    progress?: SortOrder
    status?: SortOrder
    subgoals?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FitnessGoalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    AND?: FitnessGoalWhereInput | FitnessGoalWhereInput[]
    OR?: FitnessGoalWhereInput[]
    NOT?: FitnessGoalWhereInput | FitnessGoalWhereInput[]
    createdAt?: DateTimeFilter<"FitnessGoal"> | Date | string
    updatedAt?: DateTimeFilter<"FitnessGoal"> | Date | string
    description?: StringFilter<"FitnessGoal"> | string
    completeBy?: DateTimeFilter<"FitnessGoal"> | Date | string
    progress?: FloatFilter<"FitnessGoal"> | number
    status?: EnumGoalStatusFilter<"FitnessGoal"> | $Enums.GoalStatus
    subgoals?: JsonNullableFilter<"FitnessGoal">
    userId?: IntFilter<"FitnessGoal"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "title">

  export type FitnessGoalOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    completeBy?: SortOrder
    progress?: SortOrder
    status?: SortOrder
    subgoals?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: FitnessGoalCountOrderByAggregateInput
    _avg?: FitnessGoalAvgOrderByAggregateInput
    _max?: FitnessGoalMaxOrderByAggregateInput
    _min?: FitnessGoalMinOrderByAggregateInput
    _sum?: FitnessGoalSumOrderByAggregateInput
  }

  export type FitnessGoalScalarWhereWithAggregatesInput = {
    AND?: FitnessGoalScalarWhereWithAggregatesInput | FitnessGoalScalarWhereWithAggregatesInput[]
    OR?: FitnessGoalScalarWhereWithAggregatesInput[]
    NOT?: FitnessGoalScalarWhereWithAggregatesInput | FitnessGoalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FitnessGoal"> | number
    createdAt?: DateTimeWithAggregatesFilter<"FitnessGoal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FitnessGoal"> | Date | string
    title?: StringWithAggregatesFilter<"FitnessGoal"> | string
    description?: StringWithAggregatesFilter<"FitnessGoal"> | string
    completeBy?: DateTimeWithAggregatesFilter<"FitnessGoal"> | Date | string
    progress?: FloatWithAggregatesFilter<"FitnessGoal"> | number
    status?: EnumGoalStatusWithAggregatesFilter<"FitnessGoal"> | $Enums.GoalStatus
    subgoals?: JsonNullableWithAggregatesFilter<"FitnessGoal">
    userId?: IntWithAggregatesFilter<"FitnessGoal"> | number
  }

  export type ExercisesWhereInput = {
    AND?: ExercisesWhereInput | ExercisesWhereInput[]
    OR?: ExercisesWhereInput[]
    NOT?: ExercisesWhereInput | ExercisesWhereInput[]
    id?: IntFilter<"Exercises"> | number
    name?: StringFilter<"Exercises"> | string
    custom?: BoolFilter<"Exercises"> | boolean
    type?: StringFilter<"Exercises"> | string
    muscle?: StringFilter<"Exercises"> | string
    equipment?: StringFilter<"Exercises"> | string
    notes?: StringNullableFilter<"Exercises"> | string | null
    useCount?: IntFilter<"Exercises"> | number
    met?: StringFilter<"Exercises"> | string
    userId?: IntFilter<"Exercises"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ExercisesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    custom?: SortOrder
    type?: SortOrder
    muscle?: SortOrder
    equipment?: SortOrder
    notes?: SortOrderInput | SortOrder
    useCount?: SortOrder
    met?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ExercisesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExercisesWhereInput | ExercisesWhereInput[]
    OR?: ExercisesWhereInput[]
    NOT?: ExercisesWhereInput | ExercisesWhereInput[]
    name?: StringFilter<"Exercises"> | string
    custom?: BoolFilter<"Exercises"> | boolean
    type?: StringFilter<"Exercises"> | string
    muscle?: StringFilter<"Exercises"> | string
    equipment?: StringFilter<"Exercises"> | string
    notes?: StringNullableFilter<"Exercises"> | string | null
    useCount?: IntFilter<"Exercises"> | number
    met?: StringFilter<"Exercises"> | string
    userId?: IntFilter<"Exercises"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ExercisesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    custom?: SortOrder
    type?: SortOrder
    muscle?: SortOrder
    equipment?: SortOrder
    notes?: SortOrderInput | SortOrder
    useCount?: SortOrder
    met?: SortOrder
    userId?: SortOrder
    _count?: ExercisesCountOrderByAggregateInput
    _avg?: ExercisesAvgOrderByAggregateInput
    _max?: ExercisesMaxOrderByAggregateInput
    _min?: ExercisesMinOrderByAggregateInput
    _sum?: ExercisesSumOrderByAggregateInput
  }

  export type ExercisesScalarWhereWithAggregatesInput = {
    AND?: ExercisesScalarWhereWithAggregatesInput | ExercisesScalarWhereWithAggregatesInput[]
    OR?: ExercisesScalarWhereWithAggregatesInput[]
    NOT?: ExercisesScalarWhereWithAggregatesInput | ExercisesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Exercises"> | number
    name?: StringWithAggregatesFilter<"Exercises"> | string
    custom?: BoolWithAggregatesFilter<"Exercises"> | boolean
    type?: StringWithAggregatesFilter<"Exercises"> | string
    muscle?: StringWithAggregatesFilter<"Exercises"> | string
    equipment?: StringWithAggregatesFilter<"Exercises"> | string
    notes?: StringNullableWithAggregatesFilter<"Exercises"> | string | null
    useCount?: IntWithAggregatesFilter<"Exercises"> | number
    met?: StringWithAggregatesFilter<"Exercises"> | string
    userId?: IntWithAggregatesFilter<"Exercises"> | number
  }

  export type UserCreateInput = {
    email: string
    passwordHash: string
    avatarUrl?: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    weight: number
    unitPref?: string
    workoutLogs?: WorkoutLogCreateNestedManyWithoutUserInput
    workoutTemplates?: WorkoutTemplateCreateNestedManyWithoutUserInput
    fitnessGoals?: FitnessGoalCreateNestedManyWithoutUserInput
    savedExercises?: ExercisesCreateNestedManyWithoutUserInput
    createdCategories?: WorkoutCategoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    passwordHash: string
    avatarUrl?: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    weight: number
    unitPref?: string
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutUserInput
    workoutTemplates?: WorkoutTemplateUncheckedCreateNestedManyWithoutUserInput
    fitnessGoals?: FitnessGoalUncheckedCreateNestedManyWithoutUserInput
    savedExercises?: ExercisesUncheckedCreateNestedManyWithoutUserInput
    createdCategories?: WorkoutCategoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    unitPref?: StringFieldUpdateOperationsInput | string
    workoutLogs?: WorkoutLogUpdateManyWithoutUserNestedInput
    workoutTemplates?: WorkoutTemplateUpdateManyWithoutUserNestedInput
    fitnessGoals?: FitnessGoalUpdateManyWithoutUserNestedInput
    savedExercises?: ExercisesUpdateManyWithoutUserNestedInput
    createdCategories?: WorkoutCategoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    unitPref?: StringFieldUpdateOperationsInput | string
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutUserNestedInput
    workoutTemplates?: WorkoutTemplateUncheckedUpdateManyWithoutUserNestedInput
    fitnessGoals?: FitnessGoalUncheckedUpdateManyWithoutUserNestedInput
    savedExercises?: ExercisesUncheckedUpdateManyWithoutUserNestedInput
    createdCategories?: WorkoutCategoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    passwordHash: string
    avatarUrl?: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    weight: number
    unitPref?: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    unitPref?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    unitPref?: StringFieldUpdateOperationsInput | string
  }

  export type WorkoutTemplateCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    templateName: string
    description: string
    routine: JsonNullValueInput | InputJsonValue
    duration: number
    notes?: string | null
    user: UserCreateNestedOneWithoutWorkoutTemplatesInput
    categories?: WorkoutCategoryCreateNestedManyWithoutTemplatesInput
  }

  export type WorkoutTemplateUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    templateName: string
    description: string
    routine: JsonNullValueInput | InputJsonValue
    duration: number
    notes?: string | null
    userId: number
    categories?: WorkoutCategoryUncheckedCreateNestedManyWithoutTemplatesInput
  }

  export type WorkoutTemplateUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templateName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    routine?: JsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutWorkoutTemplatesNestedInput
    categories?: WorkoutCategoryUpdateManyWithoutTemplatesNestedInput
  }

  export type WorkoutTemplateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templateName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    routine?: JsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    categories?: WorkoutCategoryUncheckedUpdateManyWithoutTemplatesNestedInput
  }

  export type WorkoutTemplateCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    templateName: string
    description: string
    routine: JsonNullValueInput | InputJsonValue
    duration: number
    notes?: string | null
    userId: number
  }

  export type WorkoutTemplateUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templateName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    routine?: JsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkoutTemplateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templateName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    routine?: JsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutLogCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    routine: JsonNullValueInput | InputJsonValue
    duration: number
    notes?: string | null
    estimatedCalorieBurn: number
    user: UserCreateNestedOneWithoutWorkoutLogsInput
    categories?: WorkoutCategoryCreateNestedManyWithoutLogsInput
  }

  export type WorkoutLogUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    routine: JsonNullValueInput | InputJsonValue
    duration: number
    notes?: string | null
    estimatedCalorieBurn: number
    userId: number
    categories?: WorkoutCategoryUncheckedCreateNestedManyWithoutLogsInput
  }

  export type WorkoutLogUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    routine?: JsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedCalorieBurn?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutWorkoutLogsNestedInput
    categories?: WorkoutCategoryUpdateManyWithoutLogsNestedInput
  }

  export type WorkoutLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    routine?: JsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedCalorieBurn?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categories?: WorkoutCategoryUncheckedUpdateManyWithoutLogsNestedInput
  }

  export type WorkoutLogCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    routine: JsonNullValueInput | InputJsonValue
    duration: number
    notes?: string | null
    estimatedCalorieBurn: number
    userId: number
  }

  export type WorkoutLogUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    routine?: JsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedCalorieBurn?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    routine?: JsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedCalorieBurn?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutCategoryCreateInput = {
    name: string
    user: UserCreateNestedOneWithoutCreatedCategoriesInput
    templates?: WorkoutTemplateCreateNestedOneWithoutCategoriesInput
    logs?: WorkoutLogCreateNestedManyWithoutCategoriesInput
  }

  export type WorkoutCategoryUncheckedCreateInput = {
    id?: number
    name: string
    userId: number
    templateId?: number | null
    logs?: WorkoutLogUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type WorkoutCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCreatedCategoriesNestedInput
    templates?: WorkoutTemplateUpdateOneWithoutCategoriesNestedInput
    logs?: WorkoutLogUpdateManyWithoutCategoriesNestedInput
  }

  export type WorkoutCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    templateId?: NullableIntFieldUpdateOperationsInput | number | null
    logs?: WorkoutLogUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type WorkoutCategoryCreateManyInput = {
    id?: number
    name: string
    userId: number
    templateId?: number | null
  }

  export type WorkoutCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WorkoutCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    templateId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FitnessGoalCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    completeBy: Date | string
    progress?: number
    status?: $Enums.GoalStatus
    subgoals?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutFitnessGoalsInput
  }

  export type FitnessGoalUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    completeBy: Date | string
    progress?: number
    status?: $Enums.GoalStatus
    subgoals?: NullableJsonNullValueInput | InputJsonValue
    userId: number
  }

  export type FitnessGoalUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    completeBy?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    subgoals?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutFitnessGoalsNestedInput
  }

  export type FitnessGoalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    completeBy?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    subgoals?: NullableJsonNullValueInput | InputJsonValue
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type FitnessGoalCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    completeBy: Date | string
    progress?: number
    status?: $Enums.GoalStatus
    subgoals?: NullableJsonNullValueInput | InputJsonValue
    userId: number
  }

  export type FitnessGoalUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    completeBy?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    subgoals?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FitnessGoalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    completeBy?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    subgoals?: NullableJsonNullValueInput | InputJsonValue
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ExercisesCreateInput = {
    name: string
    custom: boolean
    type: string
    muscle: string
    equipment: string
    notes?: string | null
    useCount?: number
    met: string
    user: UserCreateNestedOneWithoutSavedExercisesInput
  }

  export type ExercisesUncheckedCreateInput = {
    id?: number
    name: string
    custom: boolean
    type: string
    muscle: string
    equipment: string
    notes?: string | null
    useCount?: number
    met: string
    userId: number
  }

  export type ExercisesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    custom?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    muscle?: StringFieldUpdateOperationsInput | string
    equipment?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    useCount?: IntFieldUpdateOperationsInput | number
    met?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutSavedExercisesNestedInput
  }

  export type ExercisesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    custom?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    muscle?: StringFieldUpdateOperationsInput | string
    equipment?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    useCount?: IntFieldUpdateOperationsInput | number
    met?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ExercisesCreateManyInput = {
    id?: number
    name: string
    custom: boolean
    type: string
    muscle: string
    equipment: string
    notes?: string | null
    useCount?: number
    met: string
    userId: number
  }

  export type ExercisesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    custom?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    muscle?: StringFieldUpdateOperationsInput | string
    equipment?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    useCount?: IntFieldUpdateOperationsInput | number
    met?: StringFieldUpdateOperationsInput | string
  }

  export type ExercisesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    custom?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    muscle?: StringFieldUpdateOperationsInput | string
    equipment?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    useCount?: IntFieldUpdateOperationsInput | number
    met?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type WorkoutLogListRelationFilter = {
    every?: WorkoutLogWhereInput
    some?: WorkoutLogWhereInput
    none?: WorkoutLogWhereInput
  }

  export type WorkoutTemplateListRelationFilter = {
    every?: WorkoutTemplateWhereInput
    some?: WorkoutTemplateWhereInput
    none?: WorkoutTemplateWhereInput
  }

  export type FitnessGoalListRelationFilter = {
    every?: FitnessGoalWhereInput
    some?: FitnessGoalWhereInput
    none?: FitnessGoalWhereInput
  }

  export type ExercisesListRelationFilter = {
    every?: ExercisesWhereInput
    some?: ExercisesWhereInput
    none?: ExercisesWhereInput
  }

  export type WorkoutCategoryListRelationFilter = {
    every?: WorkoutCategoryWhereInput
    some?: WorkoutCategoryWhereInput
    none?: WorkoutCategoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WorkoutLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkoutTemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FitnessGoalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExercisesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkoutCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    avatarUrl?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    weight?: SortOrder
    unitPref?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    avatarUrl?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    weight?: SortOrder
    unitPref?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    avatarUrl?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    weight?: SortOrder
    unitPref?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WorkoutTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    templateName?: SortOrder
    description?: SortOrder
    routine?: SortOrder
    duration?: SortOrder
    notes?: SortOrder
    userId?: SortOrder
  }

  export type WorkoutTemplateAvgOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    userId?: SortOrder
  }

  export type WorkoutTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    templateName?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    notes?: SortOrder
    userId?: SortOrder
  }

  export type WorkoutTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    templateName?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    notes?: SortOrder
    userId?: SortOrder
  }

  export type WorkoutTemplateSumOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    userId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type WorkoutLogCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    routine?: SortOrder
    duration?: SortOrder
    notes?: SortOrder
    estimatedCalorieBurn?: SortOrder
    userId?: SortOrder
  }

  export type WorkoutLogAvgOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    estimatedCalorieBurn?: SortOrder
    userId?: SortOrder
  }

  export type WorkoutLogMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    notes?: SortOrder
    estimatedCalorieBurn?: SortOrder
    userId?: SortOrder
  }

  export type WorkoutLogMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    notes?: SortOrder
    estimatedCalorieBurn?: SortOrder
    userId?: SortOrder
  }

  export type WorkoutLogSumOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    estimatedCalorieBurn?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type WorkoutTemplateNullableScalarRelationFilter = {
    is?: WorkoutTemplateWhereInput | null
    isNot?: WorkoutTemplateWhereInput | null
  }

  export type WorkoutCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
  }

  export type WorkoutCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
  }

  export type WorkoutCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
  }

  export type WorkoutCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
  }

  export type WorkoutCategorySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type EnumGoalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | EnumGoalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalStatusFilter<$PrismaModel> | $Enums.GoalStatus
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FitnessGoalCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    completeBy?: SortOrder
    progress?: SortOrder
    status?: SortOrder
    subgoals?: SortOrder
    userId?: SortOrder
  }

  export type FitnessGoalAvgOrderByAggregateInput = {
    id?: SortOrder
    progress?: SortOrder
    userId?: SortOrder
  }

  export type FitnessGoalMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    completeBy?: SortOrder
    progress?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type FitnessGoalMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    completeBy?: SortOrder
    progress?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type FitnessGoalSumOrderByAggregateInput = {
    id?: SortOrder
    progress?: SortOrder
    userId?: SortOrder
  }

  export type EnumGoalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | EnumGoalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalStatusWithAggregatesFilter<$PrismaModel> | $Enums.GoalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalStatusFilter<$PrismaModel>
    _max?: NestedEnumGoalStatusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ExercisesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    custom?: SortOrder
    type?: SortOrder
    muscle?: SortOrder
    equipment?: SortOrder
    notes?: SortOrder
    useCount?: SortOrder
    met?: SortOrder
    userId?: SortOrder
  }

  export type ExercisesAvgOrderByAggregateInput = {
    id?: SortOrder
    useCount?: SortOrder
    userId?: SortOrder
  }

  export type ExercisesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    custom?: SortOrder
    type?: SortOrder
    muscle?: SortOrder
    equipment?: SortOrder
    notes?: SortOrder
    useCount?: SortOrder
    met?: SortOrder
    userId?: SortOrder
  }

  export type ExercisesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    custom?: SortOrder
    type?: SortOrder
    muscle?: SortOrder
    equipment?: SortOrder
    notes?: SortOrder
    useCount?: SortOrder
    met?: SortOrder
    userId?: SortOrder
  }

  export type ExercisesSumOrderByAggregateInput = {
    id?: SortOrder
    useCount?: SortOrder
    userId?: SortOrder
  }

  export type WorkoutLogCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkoutLogCreateWithoutUserInput, WorkoutLogUncheckedCreateWithoutUserInput> | WorkoutLogCreateWithoutUserInput[] | WorkoutLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutUserInput | WorkoutLogCreateOrConnectWithoutUserInput[]
    createMany?: WorkoutLogCreateManyUserInputEnvelope
    connect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
  }

  export type WorkoutTemplateCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkoutTemplateCreateWithoutUserInput, WorkoutTemplateUncheckedCreateWithoutUserInput> | WorkoutTemplateCreateWithoutUserInput[] | WorkoutTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutTemplateCreateOrConnectWithoutUserInput | WorkoutTemplateCreateOrConnectWithoutUserInput[]
    createMany?: WorkoutTemplateCreateManyUserInputEnvelope
    connect?: WorkoutTemplateWhereUniqueInput | WorkoutTemplateWhereUniqueInput[]
  }

  export type FitnessGoalCreateNestedManyWithoutUserInput = {
    create?: XOR<FitnessGoalCreateWithoutUserInput, FitnessGoalUncheckedCreateWithoutUserInput> | FitnessGoalCreateWithoutUserInput[] | FitnessGoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FitnessGoalCreateOrConnectWithoutUserInput | FitnessGoalCreateOrConnectWithoutUserInput[]
    createMany?: FitnessGoalCreateManyUserInputEnvelope
    connect?: FitnessGoalWhereUniqueInput | FitnessGoalWhereUniqueInput[]
  }

  export type ExercisesCreateNestedManyWithoutUserInput = {
    create?: XOR<ExercisesCreateWithoutUserInput, ExercisesUncheckedCreateWithoutUserInput> | ExercisesCreateWithoutUserInput[] | ExercisesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExercisesCreateOrConnectWithoutUserInput | ExercisesCreateOrConnectWithoutUserInput[]
    createMany?: ExercisesCreateManyUserInputEnvelope
    connect?: ExercisesWhereUniqueInput | ExercisesWhereUniqueInput[]
  }

  export type WorkoutCategoryCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkoutCategoryCreateWithoutUserInput, WorkoutCategoryUncheckedCreateWithoutUserInput> | WorkoutCategoryCreateWithoutUserInput[] | WorkoutCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutCategoryCreateOrConnectWithoutUserInput | WorkoutCategoryCreateOrConnectWithoutUserInput[]
    createMany?: WorkoutCategoryCreateManyUserInputEnvelope
    connect?: WorkoutCategoryWhereUniqueInput | WorkoutCategoryWhereUniqueInput[]
  }

  export type WorkoutLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkoutLogCreateWithoutUserInput, WorkoutLogUncheckedCreateWithoutUserInput> | WorkoutLogCreateWithoutUserInput[] | WorkoutLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutUserInput | WorkoutLogCreateOrConnectWithoutUserInput[]
    createMany?: WorkoutLogCreateManyUserInputEnvelope
    connect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
  }

  export type WorkoutTemplateUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkoutTemplateCreateWithoutUserInput, WorkoutTemplateUncheckedCreateWithoutUserInput> | WorkoutTemplateCreateWithoutUserInput[] | WorkoutTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutTemplateCreateOrConnectWithoutUserInput | WorkoutTemplateCreateOrConnectWithoutUserInput[]
    createMany?: WorkoutTemplateCreateManyUserInputEnvelope
    connect?: WorkoutTemplateWhereUniqueInput | WorkoutTemplateWhereUniqueInput[]
  }

  export type FitnessGoalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FitnessGoalCreateWithoutUserInput, FitnessGoalUncheckedCreateWithoutUserInput> | FitnessGoalCreateWithoutUserInput[] | FitnessGoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FitnessGoalCreateOrConnectWithoutUserInput | FitnessGoalCreateOrConnectWithoutUserInput[]
    createMany?: FitnessGoalCreateManyUserInputEnvelope
    connect?: FitnessGoalWhereUniqueInput | FitnessGoalWhereUniqueInput[]
  }

  export type ExercisesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ExercisesCreateWithoutUserInput, ExercisesUncheckedCreateWithoutUserInput> | ExercisesCreateWithoutUserInput[] | ExercisesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExercisesCreateOrConnectWithoutUserInput | ExercisesCreateOrConnectWithoutUserInput[]
    createMany?: ExercisesCreateManyUserInputEnvelope
    connect?: ExercisesWhereUniqueInput | ExercisesWhereUniqueInput[]
  }

  export type WorkoutCategoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkoutCategoryCreateWithoutUserInput, WorkoutCategoryUncheckedCreateWithoutUserInput> | WorkoutCategoryCreateWithoutUserInput[] | WorkoutCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutCategoryCreateOrConnectWithoutUserInput | WorkoutCategoryCreateOrConnectWithoutUserInput[]
    createMany?: WorkoutCategoryCreateManyUserInputEnvelope
    connect?: WorkoutCategoryWhereUniqueInput | WorkoutCategoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WorkoutLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkoutLogCreateWithoutUserInput, WorkoutLogUncheckedCreateWithoutUserInput> | WorkoutLogCreateWithoutUserInput[] | WorkoutLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutUserInput | WorkoutLogCreateOrConnectWithoutUserInput[]
    upsert?: WorkoutLogUpsertWithWhereUniqueWithoutUserInput | WorkoutLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkoutLogCreateManyUserInputEnvelope
    set?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    disconnect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    delete?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    connect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    update?: WorkoutLogUpdateWithWhereUniqueWithoutUserInput | WorkoutLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkoutLogUpdateManyWithWhereWithoutUserInput | WorkoutLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkoutLogScalarWhereInput | WorkoutLogScalarWhereInput[]
  }

  export type WorkoutTemplateUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkoutTemplateCreateWithoutUserInput, WorkoutTemplateUncheckedCreateWithoutUserInput> | WorkoutTemplateCreateWithoutUserInput[] | WorkoutTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutTemplateCreateOrConnectWithoutUserInput | WorkoutTemplateCreateOrConnectWithoutUserInput[]
    upsert?: WorkoutTemplateUpsertWithWhereUniqueWithoutUserInput | WorkoutTemplateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkoutTemplateCreateManyUserInputEnvelope
    set?: WorkoutTemplateWhereUniqueInput | WorkoutTemplateWhereUniqueInput[]
    disconnect?: WorkoutTemplateWhereUniqueInput | WorkoutTemplateWhereUniqueInput[]
    delete?: WorkoutTemplateWhereUniqueInput | WorkoutTemplateWhereUniqueInput[]
    connect?: WorkoutTemplateWhereUniqueInput | WorkoutTemplateWhereUniqueInput[]
    update?: WorkoutTemplateUpdateWithWhereUniqueWithoutUserInput | WorkoutTemplateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkoutTemplateUpdateManyWithWhereWithoutUserInput | WorkoutTemplateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkoutTemplateScalarWhereInput | WorkoutTemplateScalarWhereInput[]
  }

  export type FitnessGoalUpdateManyWithoutUserNestedInput = {
    create?: XOR<FitnessGoalCreateWithoutUserInput, FitnessGoalUncheckedCreateWithoutUserInput> | FitnessGoalCreateWithoutUserInput[] | FitnessGoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FitnessGoalCreateOrConnectWithoutUserInput | FitnessGoalCreateOrConnectWithoutUserInput[]
    upsert?: FitnessGoalUpsertWithWhereUniqueWithoutUserInput | FitnessGoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FitnessGoalCreateManyUserInputEnvelope
    set?: FitnessGoalWhereUniqueInput | FitnessGoalWhereUniqueInput[]
    disconnect?: FitnessGoalWhereUniqueInput | FitnessGoalWhereUniqueInput[]
    delete?: FitnessGoalWhereUniqueInput | FitnessGoalWhereUniqueInput[]
    connect?: FitnessGoalWhereUniqueInput | FitnessGoalWhereUniqueInput[]
    update?: FitnessGoalUpdateWithWhereUniqueWithoutUserInput | FitnessGoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FitnessGoalUpdateManyWithWhereWithoutUserInput | FitnessGoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FitnessGoalScalarWhereInput | FitnessGoalScalarWhereInput[]
  }

  export type ExercisesUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExercisesCreateWithoutUserInput, ExercisesUncheckedCreateWithoutUserInput> | ExercisesCreateWithoutUserInput[] | ExercisesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExercisesCreateOrConnectWithoutUserInput | ExercisesCreateOrConnectWithoutUserInput[]
    upsert?: ExercisesUpsertWithWhereUniqueWithoutUserInput | ExercisesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExercisesCreateManyUserInputEnvelope
    set?: ExercisesWhereUniqueInput | ExercisesWhereUniqueInput[]
    disconnect?: ExercisesWhereUniqueInput | ExercisesWhereUniqueInput[]
    delete?: ExercisesWhereUniqueInput | ExercisesWhereUniqueInput[]
    connect?: ExercisesWhereUniqueInput | ExercisesWhereUniqueInput[]
    update?: ExercisesUpdateWithWhereUniqueWithoutUserInput | ExercisesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExercisesUpdateManyWithWhereWithoutUserInput | ExercisesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExercisesScalarWhereInput | ExercisesScalarWhereInput[]
  }

  export type WorkoutCategoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkoutCategoryCreateWithoutUserInput, WorkoutCategoryUncheckedCreateWithoutUserInput> | WorkoutCategoryCreateWithoutUserInput[] | WorkoutCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutCategoryCreateOrConnectWithoutUserInput | WorkoutCategoryCreateOrConnectWithoutUserInput[]
    upsert?: WorkoutCategoryUpsertWithWhereUniqueWithoutUserInput | WorkoutCategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkoutCategoryCreateManyUserInputEnvelope
    set?: WorkoutCategoryWhereUniqueInput | WorkoutCategoryWhereUniqueInput[]
    disconnect?: WorkoutCategoryWhereUniqueInput | WorkoutCategoryWhereUniqueInput[]
    delete?: WorkoutCategoryWhereUniqueInput | WorkoutCategoryWhereUniqueInput[]
    connect?: WorkoutCategoryWhereUniqueInput | WorkoutCategoryWhereUniqueInput[]
    update?: WorkoutCategoryUpdateWithWhereUniqueWithoutUserInput | WorkoutCategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkoutCategoryUpdateManyWithWhereWithoutUserInput | WorkoutCategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkoutCategoryScalarWhereInput | WorkoutCategoryScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WorkoutLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkoutLogCreateWithoutUserInput, WorkoutLogUncheckedCreateWithoutUserInput> | WorkoutLogCreateWithoutUserInput[] | WorkoutLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutUserInput | WorkoutLogCreateOrConnectWithoutUserInput[]
    upsert?: WorkoutLogUpsertWithWhereUniqueWithoutUserInput | WorkoutLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkoutLogCreateManyUserInputEnvelope
    set?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    disconnect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    delete?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    connect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    update?: WorkoutLogUpdateWithWhereUniqueWithoutUserInput | WorkoutLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkoutLogUpdateManyWithWhereWithoutUserInput | WorkoutLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkoutLogScalarWhereInput | WorkoutLogScalarWhereInput[]
  }

  export type WorkoutTemplateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkoutTemplateCreateWithoutUserInput, WorkoutTemplateUncheckedCreateWithoutUserInput> | WorkoutTemplateCreateWithoutUserInput[] | WorkoutTemplateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutTemplateCreateOrConnectWithoutUserInput | WorkoutTemplateCreateOrConnectWithoutUserInput[]
    upsert?: WorkoutTemplateUpsertWithWhereUniqueWithoutUserInput | WorkoutTemplateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkoutTemplateCreateManyUserInputEnvelope
    set?: WorkoutTemplateWhereUniqueInput | WorkoutTemplateWhereUniqueInput[]
    disconnect?: WorkoutTemplateWhereUniqueInput | WorkoutTemplateWhereUniqueInput[]
    delete?: WorkoutTemplateWhereUniqueInput | WorkoutTemplateWhereUniqueInput[]
    connect?: WorkoutTemplateWhereUniqueInput | WorkoutTemplateWhereUniqueInput[]
    update?: WorkoutTemplateUpdateWithWhereUniqueWithoutUserInput | WorkoutTemplateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkoutTemplateUpdateManyWithWhereWithoutUserInput | WorkoutTemplateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkoutTemplateScalarWhereInput | WorkoutTemplateScalarWhereInput[]
  }

  export type FitnessGoalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FitnessGoalCreateWithoutUserInput, FitnessGoalUncheckedCreateWithoutUserInput> | FitnessGoalCreateWithoutUserInput[] | FitnessGoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FitnessGoalCreateOrConnectWithoutUserInput | FitnessGoalCreateOrConnectWithoutUserInput[]
    upsert?: FitnessGoalUpsertWithWhereUniqueWithoutUserInput | FitnessGoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FitnessGoalCreateManyUserInputEnvelope
    set?: FitnessGoalWhereUniqueInput | FitnessGoalWhereUniqueInput[]
    disconnect?: FitnessGoalWhereUniqueInput | FitnessGoalWhereUniqueInput[]
    delete?: FitnessGoalWhereUniqueInput | FitnessGoalWhereUniqueInput[]
    connect?: FitnessGoalWhereUniqueInput | FitnessGoalWhereUniqueInput[]
    update?: FitnessGoalUpdateWithWhereUniqueWithoutUserInput | FitnessGoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FitnessGoalUpdateManyWithWhereWithoutUserInput | FitnessGoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FitnessGoalScalarWhereInput | FitnessGoalScalarWhereInput[]
  }

  export type ExercisesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExercisesCreateWithoutUserInput, ExercisesUncheckedCreateWithoutUserInput> | ExercisesCreateWithoutUserInput[] | ExercisesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExercisesCreateOrConnectWithoutUserInput | ExercisesCreateOrConnectWithoutUserInput[]
    upsert?: ExercisesUpsertWithWhereUniqueWithoutUserInput | ExercisesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExercisesCreateManyUserInputEnvelope
    set?: ExercisesWhereUniqueInput | ExercisesWhereUniqueInput[]
    disconnect?: ExercisesWhereUniqueInput | ExercisesWhereUniqueInput[]
    delete?: ExercisesWhereUniqueInput | ExercisesWhereUniqueInput[]
    connect?: ExercisesWhereUniqueInput | ExercisesWhereUniqueInput[]
    update?: ExercisesUpdateWithWhereUniqueWithoutUserInput | ExercisesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExercisesUpdateManyWithWhereWithoutUserInput | ExercisesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExercisesScalarWhereInput | ExercisesScalarWhereInput[]
  }

  export type WorkoutCategoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkoutCategoryCreateWithoutUserInput, WorkoutCategoryUncheckedCreateWithoutUserInput> | WorkoutCategoryCreateWithoutUserInput[] | WorkoutCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutCategoryCreateOrConnectWithoutUserInput | WorkoutCategoryCreateOrConnectWithoutUserInput[]
    upsert?: WorkoutCategoryUpsertWithWhereUniqueWithoutUserInput | WorkoutCategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkoutCategoryCreateManyUserInputEnvelope
    set?: WorkoutCategoryWhereUniqueInput | WorkoutCategoryWhereUniqueInput[]
    disconnect?: WorkoutCategoryWhereUniqueInput | WorkoutCategoryWhereUniqueInput[]
    delete?: WorkoutCategoryWhereUniqueInput | WorkoutCategoryWhereUniqueInput[]
    connect?: WorkoutCategoryWhereUniqueInput | WorkoutCategoryWhereUniqueInput[]
    update?: WorkoutCategoryUpdateWithWhereUniqueWithoutUserInput | WorkoutCategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkoutCategoryUpdateManyWithWhereWithoutUserInput | WorkoutCategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkoutCategoryScalarWhereInput | WorkoutCategoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWorkoutTemplatesInput = {
    create?: XOR<UserCreateWithoutWorkoutTemplatesInput, UserUncheckedCreateWithoutWorkoutTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkoutTemplatesInput
    connect?: UserWhereUniqueInput
  }

  export type WorkoutCategoryCreateNestedManyWithoutTemplatesInput = {
    create?: XOR<WorkoutCategoryCreateWithoutTemplatesInput, WorkoutCategoryUncheckedCreateWithoutTemplatesInput> | WorkoutCategoryCreateWithoutTemplatesInput[] | WorkoutCategoryUncheckedCreateWithoutTemplatesInput[]
    connectOrCreate?: WorkoutCategoryCreateOrConnectWithoutTemplatesInput | WorkoutCategoryCreateOrConnectWithoutTemplatesInput[]
    createMany?: WorkoutCategoryCreateManyTemplatesInputEnvelope
    connect?: WorkoutCategoryWhereUniqueInput | WorkoutCategoryWhereUniqueInput[]
  }

  export type WorkoutCategoryUncheckedCreateNestedManyWithoutTemplatesInput = {
    create?: XOR<WorkoutCategoryCreateWithoutTemplatesInput, WorkoutCategoryUncheckedCreateWithoutTemplatesInput> | WorkoutCategoryCreateWithoutTemplatesInput[] | WorkoutCategoryUncheckedCreateWithoutTemplatesInput[]
    connectOrCreate?: WorkoutCategoryCreateOrConnectWithoutTemplatesInput | WorkoutCategoryCreateOrConnectWithoutTemplatesInput[]
    createMany?: WorkoutCategoryCreateManyTemplatesInputEnvelope
    connect?: WorkoutCategoryWhereUniqueInput | WorkoutCategoryWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutWorkoutTemplatesNestedInput = {
    create?: XOR<UserCreateWithoutWorkoutTemplatesInput, UserUncheckedCreateWithoutWorkoutTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkoutTemplatesInput
    upsert?: UserUpsertWithoutWorkoutTemplatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkoutTemplatesInput, UserUpdateWithoutWorkoutTemplatesInput>, UserUncheckedUpdateWithoutWorkoutTemplatesInput>
  }

  export type WorkoutCategoryUpdateManyWithoutTemplatesNestedInput = {
    create?: XOR<WorkoutCategoryCreateWithoutTemplatesInput, WorkoutCategoryUncheckedCreateWithoutTemplatesInput> | WorkoutCategoryCreateWithoutTemplatesInput[] | WorkoutCategoryUncheckedCreateWithoutTemplatesInput[]
    connectOrCreate?: WorkoutCategoryCreateOrConnectWithoutTemplatesInput | WorkoutCategoryCreateOrConnectWithoutTemplatesInput[]
    upsert?: WorkoutCategoryUpsertWithWhereUniqueWithoutTemplatesInput | WorkoutCategoryUpsertWithWhereUniqueWithoutTemplatesInput[]
    createMany?: WorkoutCategoryCreateManyTemplatesInputEnvelope
    set?: WorkoutCategoryWhereUniqueInput | WorkoutCategoryWhereUniqueInput[]
    disconnect?: WorkoutCategoryWhereUniqueInput | WorkoutCategoryWhereUniqueInput[]
    delete?: WorkoutCategoryWhereUniqueInput | WorkoutCategoryWhereUniqueInput[]
    connect?: WorkoutCategoryWhereUniqueInput | WorkoutCategoryWhereUniqueInput[]
    update?: WorkoutCategoryUpdateWithWhereUniqueWithoutTemplatesInput | WorkoutCategoryUpdateWithWhereUniqueWithoutTemplatesInput[]
    updateMany?: WorkoutCategoryUpdateManyWithWhereWithoutTemplatesInput | WorkoutCategoryUpdateManyWithWhereWithoutTemplatesInput[]
    deleteMany?: WorkoutCategoryScalarWhereInput | WorkoutCategoryScalarWhereInput[]
  }

  export type WorkoutCategoryUncheckedUpdateManyWithoutTemplatesNestedInput = {
    create?: XOR<WorkoutCategoryCreateWithoutTemplatesInput, WorkoutCategoryUncheckedCreateWithoutTemplatesInput> | WorkoutCategoryCreateWithoutTemplatesInput[] | WorkoutCategoryUncheckedCreateWithoutTemplatesInput[]
    connectOrCreate?: WorkoutCategoryCreateOrConnectWithoutTemplatesInput | WorkoutCategoryCreateOrConnectWithoutTemplatesInput[]
    upsert?: WorkoutCategoryUpsertWithWhereUniqueWithoutTemplatesInput | WorkoutCategoryUpsertWithWhereUniqueWithoutTemplatesInput[]
    createMany?: WorkoutCategoryCreateManyTemplatesInputEnvelope
    set?: WorkoutCategoryWhereUniqueInput | WorkoutCategoryWhereUniqueInput[]
    disconnect?: WorkoutCategoryWhereUniqueInput | WorkoutCategoryWhereUniqueInput[]
    delete?: WorkoutCategoryWhereUniqueInput | WorkoutCategoryWhereUniqueInput[]
    connect?: WorkoutCategoryWhereUniqueInput | WorkoutCategoryWhereUniqueInput[]
    update?: WorkoutCategoryUpdateWithWhereUniqueWithoutTemplatesInput | WorkoutCategoryUpdateWithWhereUniqueWithoutTemplatesInput[]
    updateMany?: WorkoutCategoryUpdateManyWithWhereWithoutTemplatesInput | WorkoutCategoryUpdateManyWithWhereWithoutTemplatesInput[]
    deleteMany?: WorkoutCategoryScalarWhereInput | WorkoutCategoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWorkoutLogsInput = {
    create?: XOR<UserCreateWithoutWorkoutLogsInput, UserUncheckedCreateWithoutWorkoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkoutLogsInput
    connect?: UserWhereUniqueInput
  }

  export type WorkoutCategoryCreateNestedManyWithoutLogsInput = {
    create?: XOR<WorkoutCategoryCreateWithoutLogsInput, WorkoutCategoryUncheckedCreateWithoutLogsInput> | WorkoutCategoryCreateWithoutLogsInput[] | WorkoutCategoryUncheckedCreateWithoutLogsInput[]
    connectOrCreate?: WorkoutCategoryCreateOrConnectWithoutLogsInput | WorkoutCategoryCreateOrConnectWithoutLogsInput[]
    connect?: WorkoutCategoryWhereUniqueInput | WorkoutCategoryWhereUniqueInput[]
  }

  export type WorkoutCategoryUncheckedCreateNestedManyWithoutLogsInput = {
    create?: XOR<WorkoutCategoryCreateWithoutLogsInput, WorkoutCategoryUncheckedCreateWithoutLogsInput> | WorkoutCategoryCreateWithoutLogsInput[] | WorkoutCategoryUncheckedCreateWithoutLogsInput[]
    connectOrCreate?: WorkoutCategoryCreateOrConnectWithoutLogsInput | WorkoutCategoryCreateOrConnectWithoutLogsInput[]
    connect?: WorkoutCategoryWhereUniqueInput | WorkoutCategoryWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutWorkoutLogsNestedInput = {
    create?: XOR<UserCreateWithoutWorkoutLogsInput, UserUncheckedCreateWithoutWorkoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkoutLogsInput
    upsert?: UserUpsertWithoutWorkoutLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkoutLogsInput, UserUpdateWithoutWorkoutLogsInput>, UserUncheckedUpdateWithoutWorkoutLogsInput>
  }

  export type WorkoutCategoryUpdateManyWithoutLogsNestedInput = {
    create?: XOR<WorkoutCategoryCreateWithoutLogsInput, WorkoutCategoryUncheckedCreateWithoutLogsInput> | WorkoutCategoryCreateWithoutLogsInput[] | WorkoutCategoryUncheckedCreateWithoutLogsInput[]
    connectOrCreate?: WorkoutCategoryCreateOrConnectWithoutLogsInput | WorkoutCategoryCreateOrConnectWithoutLogsInput[]
    upsert?: WorkoutCategoryUpsertWithWhereUniqueWithoutLogsInput | WorkoutCategoryUpsertWithWhereUniqueWithoutLogsInput[]
    set?: WorkoutCategoryWhereUniqueInput | WorkoutCategoryWhereUniqueInput[]
    disconnect?: WorkoutCategoryWhereUniqueInput | WorkoutCategoryWhereUniqueInput[]
    delete?: WorkoutCategoryWhereUniqueInput | WorkoutCategoryWhereUniqueInput[]
    connect?: WorkoutCategoryWhereUniqueInput | WorkoutCategoryWhereUniqueInput[]
    update?: WorkoutCategoryUpdateWithWhereUniqueWithoutLogsInput | WorkoutCategoryUpdateWithWhereUniqueWithoutLogsInput[]
    updateMany?: WorkoutCategoryUpdateManyWithWhereWithoutLogsInput | WorkoutCategoryUpdateManyWithWhereWithoutLogsInput[]
    deleteMany?: WorkoutCategoryScalarWhereInput | WorkoutCategoryScalarWhereInput[]
  }

  export type WorkoutCategoryUncheckedUpdateManyWithoutLogsNestedInput = {
    create?: XOR<WorkoutCategoryCreateWithoutLogsInput, WorkoutCategoryUncheckedCreateWithoutLogsInput> | WorkoutCategoryCreateWithoutLogsInput[] | WorkoutCategoryUncheckedCreateWithoutLogsInput[]
    connectOrCreate?: WorkoutCategoryCreateOrConnectWithoutLogsInput | WorkoutCategoryCreateOrConnectWithoutLogsInput[]
    upsert?: WorkoutCategoryUpsertWithWhereUniqueWithoutLogsInput | WorkoutCategoryUpsertWithWhereUniqueWithoutLogsInput[]
    set?: WorkoutCategoryWhereUniqueInput | WorkoutCategoryWhereUniqueInput[]
    disconnect?: WorkoutCategoryWhereUniqueInput | WorkoutCategoryWhereUniqueInput[]
    delete?: WorkoutCategoryWhereUniqueInput | WorkoutCategoryWhereUniqueInput[]
    connect?: WorkoutCategoryWhereUniqueInput | WorkoutCategoryWhereUniqueInput[]
    update?: WorkoutCategoryUpdateWithWhereUniqueWithoutLogsInput | WorkoutCategoryUpdateWithWhereUniqueWithoutLogsInput[]
    updateMany?: WorkoutCategoryUpdateManyWithWhereWithoutLogsInput | WorkoutCategoryUpdateManyWithWhereWithoutLogsInput[]
    deleteMany?: WorkoutCategoryScalarWhereInput | WorkoutCategoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedCategoriesInput = {
    create?: XOR<UserCreateWithoutCreatedCategoriesInput, UserUncheckedCreateWithoutCreatedCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedCategoriesInput
    connect?: UserWhereUniqueInput
  }

  export type WorkoutTemplateCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<WorkoutTemplateCreateWithoutCategoriesInput, WorkoutTemplateUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: WorkoutTemplateCreateOrConnectWithoutCategoriesInput
    connect?: WorkoutTemplateWhereUniqueInput
  }

  export type WorkoutLogCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<WorkoutLogCreateWithoutCategoriesInput, WorkoutLogUncheckedCreateWithoutCategoriesInput> | WorkoutLogCreateWithoutCategoriesInput[] | WorkoutLogUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutCategoriesInput | WorkoutLogCreateOrConnectWithoutCategoriesInput[]
    connect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
  }

  export type WorkoutLogUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<WorkoutLogCreateWithoutCategoriesInput, WorkoutLogUncheckedCreateWithoutCategoriesInput> | WorkoutLogCreateWithoutCategoriesInput[] | WorkoutLogUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutCategoriesInput | WorkoutLogCreateOrConnectWithoutCategoriesInput[]
    connect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCreatedCategoriesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedCategoriesInput, UserUncheckedCreateWithoutCreatedCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedCategoriesInput
    upsert?: UserUpsertWithoutCreatedCategoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedCategoriesInput, UserUpdateWithoutCreatedCategoriesInput>, UserUncheckedUpdateWithoutCreatedCategoriesInput>
  }

  export type WorkoutTemplateUpdateOneWithoutCategoriesNestedInput = {
    create?: XOR<WorkoutTemplateCreateWithoutCategoriesInput, WorkoutTemplateUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: WorkoutTemplateCreateOrConnectWithoutCategoriesInput
    upsert?: WorkoutTemplateUpsertWithoutCategoriesInput
    disconnect?: WorkoutTemplateWhereInput | boolean
    delete?: WorkoutTemplateWhereInput | boolean
    connect?: WorkoutTemplateWhereUniqueInput
    update?: XOR<XOR<WorkoutTemplateUpdateToOneWithWhereWithoutCategoriesInput, WorkoutTemplateUpdateWithoutCategoriesInput>, WorkoutTemplateUncheckedUpdateWithoutCategoriesInput>
  }

  export type WorkoutLogUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<WorkoutLogCreateWithoutCategoriesInput, WorkoutLogUncheckedCreateWithoutCategoriesInput> | WorkoutLogCreateWithoutCategoriesInput[] | WorkoutLogUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutCategoriesInput | WorkoutLogCreateOrConnectWithoutCategoriesInput[]
    upsert?: WorkoutLogUpsertWithWhereUniqueWithoutCategoriesInput | WorkoutLogUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    disconnect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    delete?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    connect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    update?: WorkoutLogUpdateWithWhereUniqueWithoutCategoriesInput | WorkoutLogUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: WorkoutLogUpdateManyWithWhereWithoutCategoriesInput | WorkoutLogUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: WorkoutLogScalarWhereInput | WorkoutLogScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WorkoutLogUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<WorkoutLogCreateWithoutCategoriesInput, WorkoutLogUncheckedCreateWithoutCategoriesInput> | WorkoutLogCreateWithoutCategoriesInput[] | WorkoutLogUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutCategoriesInput | WorkoutLogCreateOrConnectWithoutCategoriesInput[]
    upsert?: WorkoutLogUpsertWithWhereUniqueWithoutCategoriesInput | WorkoutLogUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    disconnect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    delete?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    connect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    update?: WorkoutLogUpdateWithWhereUniqueWithoutCategoriesInput | WorkoutLogUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: WorkoutLogUpdateManyWithWhereWithoutCategoriesInput | WorkoutLogUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: WorkoutLogScalarWhereInput | WorkoutLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFitnessGoalsInput = {
    create?: XOR<UserCreateWithoutFitnessGoalsInput, UserUncheckedCreateWithoutFitnessGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFitnessGoalsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumGoalStatusFieldUpdateOperationsInput = {
    set?: $Enums.GoalStatus
  }

  export type UserUpdateOneRequiredWithoutFitnessGoalsNestedInput = {
    create?: XOR<UserCreateWithoutFitnessGoalsInput, UserUncheckedCreateWithoutFitnessGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFitnessGoalsInput
    upsert?: UserUpsertWithoutFitnessGoalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFitnessGoalsInput, UserUpdateWithoutFitnessGoalsInput>, UserUncheckedUpdateWithoutFitnessGoalsInput>
  }

  export type UserCreateNestedOneWithoutSavedExercisesInput = {
    create?: XOR<UserCreateWithoutSavedExercisesInput, UserUncheckedCreateWithoutSavedExercisesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedExercisesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSavedExercisesNestedInput = {
    create?: XOR<UserCreateWithoutSavedExercisesInput, UserUncheckedCreateWithoutSavedExercisesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedExercisesInput
    upsert?: UserUpsertWithoutSavedExercisesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSavedExercisesInput, UserUpdateWithoutSavedExercisesInput>, UserUncheckedUpdateWithoutSavedExercisesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGoalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | EnumGoalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalStatusFilter<$PrismaModel> | $Enums.GoalStatus
  }

  export type NestedEnumGoalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | EnumGoalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalStatusWithAggregatesFilter<$PrismaModel> | $Enums.GoalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalStatusFilter<$PrismaModel>
    _max?: NestedEnumGoalStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type WorkoutLogCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    routine: JsonNullValueInput | InputJsonValue
    duration: number
    notes?: string | null
    estimatedCalorieBurn: number
    categories?: WorkoutCategoryCreateNestedManyWithoutLogsInput
  }

  export type WorkoutLogUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    routine: JsonNullValueInput | InputJsonValue
    duration: number
    notes?: string | null
    estimatedCalorieBurn: number
    categories?: WorkoutCategoryUncheckedCreateNestedManyWithoutLogsInput
  }

  export type WorkoutLogCreateOrConnectWithoutUserInput = {
    where: WorkoutLogWhereUniqueInput
    create: XOR<WorkoutLogCreateWithoutUserInput, WorkoutLogUncheckedCreateWithoutUserInput>
  }

  export type WorkoutLogCreateManyUserInputEnvelope = {
    data: WorkoutLogCreateManyUserInput | WorkoutLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutTemplateCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    templateName: string
    description: string
    routine: JsonNullValueInput | InputJsonValue
    duration: number
    notes?: string | null
    categories?: WorkoutCategoryCreateNestedManyWithoutTemplatesInput
  }

  export type WorkoutTemplateUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    templateName: string
    description: string
    routine: JsonNullValueInput | InputJsonValue
    duration: number
    notes?: string | null
    categories?: WorkoutCategoryUncheckedCreateNestedManyWithoutTemplatesInput
  }

  export type WorkoutTemplateCreateOrConnectWithoutUserInput = {
    where: WorkoutTemplateWhereUniqueInput
    create: XOR<WorkoutTemplateCreateWithoutUserInput, WorkoutTemplateUncheckedCreateWithoutUserInput>
  }

  export type WorkoutTemplateCreateManyUserInputEnvelope = {
    data: WorkoutTemplateCreateManyUserInput | WorkoutTemplateCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FitnessGoalCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    completeBy: Date | string
    progress?: number
    status?: $Enums.GoalStatus
    subgoals?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FitnessGoalUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    completeBy: Date | string
    progress?: number
    status?: $Enums.GoalStatus
    subgoals?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FitnessGoalCreateOrConnectWithoutUserInput = {
    where: FitnessGoalWhereUniqueInput
    create: XOR<FitnessGoalCreateWithoutUserInput, FitnessGoalUncheckedCreateWithoutUserInput>
  }

  export type FitnessGoalCreateManyUserInputEnvelope = {
    data: FitnessGoalCreateManyUserInput | FitnessGoalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ExercisesCreateWithoutUserInput = {
    name: string
    custom: boolean
    type: string
    muscle: string
    equipment: string
    notes?: string | null
    useCount?: number
    met: string
  }

  export type ExercisesUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    custom: boolean
    type: string
    muscle: string
    equipment: string
    notes?: string | null
    useCount?: number
    met: string
  }

  export type ExercisesCreateOrConnectWithoutUserInput = {
    where: ExercisesWhereUniqueInput
    create: XOR<ExercisesCreateWithoutUserInput, ExercisesUncheckedCreateWithoutUserInput>
  }

  export type ExercisesCreateManyUserInputEnvelope = {
    data: ExercisesCreateManyUserInput | ExercisesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutCategoryCreateWithoutUserInput = {
    name: string
    templates?: WorkoutTemplateCreateNestedOneWithoutCategoriesInput
    logs?: WorkoutLogCreateNestedManyWithoutCategoriesInput
  }

  export type WorkoutCategoryUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    templateId?: number | null
    logs?: WorkoutLogUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type WorkoutCategoryCreateOrConnectWithoutUserInput = {
    where: WorkoutCategoryWhereUniqueInput
    create: XOR<WorkoutCategoryCreateWithoutUserInput, WorkoutCategoryUncheckedCreateWithoutUserInput>
  }

  export type WorkoutCategoryCreateManyUserInputEnvelope = {
    data: WorkoutCategoryCreateManyUserInput | WorkoutCategoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutLogUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkoutLogWhereUniqueInput
    update: XOR<WorkoutLogUpdateWithoutUserInput, WorkoutLogUncheckedUpdateWithoutUserInput>
    create: XOR<WorkoutLogCreateWithoutUserInput, WorkoutLogUncheckedCreateWithoutUserInput>
  }

  export type WorkoutLogUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkoutLogWhereUniqueInput
    data: XOR<WorkoutLogUpdateWithoutUserInput, WorkoutLogUncheckedUpdateWithoutUserInput>
  }

  export type WorkoutLogUpdateManyWithWhereWithoutUserInput = {
    where: WorkoutLogScalarWhereInput
    data: XOR<WorkoutLogUpdateManyMutationInput, WorkoutLogUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkoutLogScalarWhereInput = {
    AND?: WorkoutLogScalarWhereInput | WorkoutLogScalarWhereInput[]
    OR?: WorkoutLogScalarWhereInput[]
    NOT?: WorkoutLogScalarWhereInput | WorkoutLogScalarWhereInput[]
    id?: IntFilter<"WorkoutLog"> | number
    createdAt?: DateTimeFilter<"WorkoutLog"> | Date | string
    updatedAt?: DateTimeFilter<"WorkoutLog"> | Date | string
    title?: StringFilter<"WorkoutLog"> | string
    description?: StringFilter<"WorkoutLog"> | string
    routine?: JsonFilter<"WorkoutLog">
    duration?: IntFilter<"WorkoutLog"> | number
    notes?: StringNullableFilter<"WorkoutLog"> | string | null
    estimatedCalorieBurn?: IntFilter<"WorkoutLog"> | number
    userId?: IntFilter<"WorkoutLog"> | number
  }

  export type WorkoutTemplateUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkoutTemplateWhereUniqueInput
    update: XOR<WorkoutTemplateUpdateWithoutUserInput, WorkoutTemplateUncheckedUpdateWithoutUserInput>
    create: XOR<WorkoutTemplateCreateWithoutUserInput, WorkoutTemplateUncheckedCreateWithoutUserInput>
  }

  export type WorkoutTemplateUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkoutTemplateWhereUniqueInput
    data: XOR<WorkoutTemplateUpdateWithoutUserInput, WorkoutTemplateUncheckedUpdateWithoutUserInput>
  }

  export type WorkoutTemplateUpdateManyWithWhereWithoutUserInput = {
    where: WorkoutTemplateScalarWhereInput
    data: XOR<WorkoutTemplateUpdateManyMutationInput, WorkoutTemplateUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkoutTemplateScalarWhereInput = {
    AND?: WorkoutTemplateScalarWhereInput | WorkoutTemplateScalarWhereInput[]
    OR?: WorkoutTemplateScalarWhereInput[]
    NOT?: WorkoutTemplateScalarWhereInput | WorkoutTemplateScalarWhereInput[]
    id?: IntFilter<"WorkoutTemplate"> | number
    createdAt?: DateTimeFilter<"WorkoutTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"WorkoutTemplate"> | Date | string
    templateName?: StringFilter<"WorkoutTemplate"> | string
    description?: StringFilter<"WorkoutTemplate"> | string
    routine?: JsonFilter<"WorkoutTemplate">
    duration?: IntFilter<"WorkoutTemplate"> | number
    notes?: StringNullableFilter<"WorkoutTemplate"> | string | null
    userId?: IntFilter<"WorkoutTemplate"> | number
  }

  export type FitnessGoalUpsertWithWhereUniqueWithoutUserInput = {
    where: FitnessGoalWhereUniqueInput
    update: XOR<FitnessGoalUpdateWithoutUserInput, FitnessGoalUncheckedUpdateWithoutUserInput>
    create: XOR<FitnessGoalCreateWithoutUserInput, FitnessGoalUncheckedCreateWithoutUserInput>
  }

  export type FitnessGoalUpdateWithWhereUniqueWithoutUserInput = {
    where: FitnessGoalWhereUniqueInput
    data: XOR<FitnessGoalUpdateWithoutUserInput, FitnessGoalUncheckedUpdateWithoutUserInput>
  }

  export type FitnessGoalUpdateManyWithWhereWithoutUserInput = {
    where: FitnessGoalScalarWhereInput
    data: XOR<FitnessGoalUpdateManyMutationInput, FitnessGoalUncheckedUpdateManyWithoutUserInput>
  }

  export type FitnessGoalScalarWhereInput = {
    AND?: FitnessGoalScalarWhereInput | FitnessGoalScalarWhereInput[]
    OR?: FitnessGoalScalarWhereInput[]
    NOT?: FitnessGoalScalarWhereInput | FitnessGoalScalarWhereInput[]
    id?: IntFilter<"FitnessGoal"> | number
    createdAt?: DateTimeFilter<"FitnessGoal"> | Date | string
    updatedAt?: DateTimeFilter<"FitnessGoal"> | Date | string
    title?: StringFilter<"FitnessGoal"> | string
    description?: StringFilter<"FitnessGoal"> | string
    completeBy?: DateTimeFilter<"FitnessGoal"> | Date | string
    progress?: FloatFilter<"FitnessGoal"> | number
    status?: EnumGoalStatusFilter<"FitnessGoal"> | $Enums.GoalStatus
    subgoals?: JsonNullableFilter<"FitnessGoal">
    userId?: IntFilter<"FitnessGoal"> | number
  }

  export type ExercisesUpsertWithWhereUniqueWithoutUserInput = {
    where: ExercisesWhereUniqueInput
    update: XOR<ExercisesUpdateWithoutUserInput, ExercisesUncheckedUpdateWithoutUserInput>
    create: XOR<ExercisesCreateWithoutUserInput, ExercisesUncheckedCreateWithoutUserInput>
  }

  export type ExercisesUpdateWithWhereUniqueWithoutUserInput = {
    where: ExercisesWhereUniqueInput
    data: XOR<ExercisesUpdateWithoutUserInput, ExercisesUncheckedUpdateWithoutUserInput>
  }

  export type ExercisesUpdateManyWithWhereWithoutUserInput = {
    where: ExercisesScalarWhereInput
    data: XOR<ExercisesUpdateManyMutationInput, ExercisesUncheckedUpdateManyWithoutUserInput>
  }

  export type ExercisesScalarWhereInput = {
    AND?: ExercisesScalarWhereInput | ExercisesScalarWhereInput[]
    OR?: ExercisesScalarWhereInput[]
    NOT?: ExercisesScalarWhereInput | ExercisesScalarWhereInput[]
    id?: IntFilter<"Exercises"> | number
    name?: StringFilter<"Exercises"> | string
    custom?: BoolFilter<"Exercises"> | boolean
    type?: StringFilter<"Exercises"> | string
    muscle?: StringFilter<"Exercises"> | string
    equipment?: StringFilter<"Exercises"> | string
    notes?: StringNullableFilter<"Exercises"> | string | null
    useCount?: IntFilter<"Exercises"> | number
    met?: StringFilter<"Exercises"> | string
    userId?: IntFilter<"Exercises"> | number
  }

  export type WorkoutCategoryUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkoutCategoryWhereUniqueInput
    update: XOR<WorkoutCategoryUpdateWithoutUserInput, WorkoutCategoryUncheckedUpdateWithoutUserInput>
    create: XOR<WorkoutCategoryCreateWithoutUserInput, WorkoutCategoryUncheckedCreateWithoutUserInput>
  }

  export type WorkoutCategoryUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkoutCategoryWhereUniqueInput
    data: XOR<WorkoutCategoryUpdateWithoutUserInput, WorkoutCategoryUncheckedUpdateWithoutUserInput>
  }

  export type WorkoutCategoryUpdateManyWithWhereWithoutUserInput = {
    where: WorkoutCategoryScalarWhereInput
    data: XOR<WorkoutCategoryUpdateManyMutationInput, WorkoutCategoryUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkoutCategoryScalarWhereInput = {
    AND?: WorkoutCategoryScalarWhereInput | WorkoutCategoryScalarWhereInput[]
    OR?: WorkoutCategoryScalarWhereInput[]
    NOT?: WorkoutCategoryScalarWhereInput | WorkoutCategoryScalarWhereInput[]
    id?: IntFilter<"WorkoutCategory"> | number
    name?: StringFilter<"WorkoutCategory"> | string
    userId?: IntFilter<"WorkoutCategory"> | number
    templateId?: IntNullableFilter<"WorkoutCategory"> | number | null
  }

  export type UserCreateWithoutWorkoutTemplatesInput = {
    email: string
    passwordHash: string
    avatarUrl?: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    weight: number
    unitPref?: string
    workoutLogs?: WorkoutLogCreateNestedManyWithoutUserInput
    fitnessGoals?: FitnessGoalCreateNestedManyWithoutUserInput
    savedExercises?: ExercisesCreateNestedManyWithoutUserInput
    createdCategories?: WorkoutCategoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkoutTemplatesInput = {
    id?: number
    email: string
    passwordHash: string
    avatarUrl?: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    weight: number
    unitPref?: string
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutUserInput
    fitnessGoals?: FitnessGoalUncheckedCreateNestedManyWithoutUserInput
    savedExercises?: ExercisesUncheckedCreateNestedManyWithoutUserInput
    createdCategories?: WorkoutCategoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkoutTemplatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkoutTemplatesInput, UserUncheckedCreateWithoutWorkoutTemplatesInput>
  }

  export type WorkoutCategoryCreateWithoutTemplatesInput = {
    name: string
    user: UserCreateNestedOneWithoutCreatedCategoriesInput
    logs?: WorkoutLogCreateNestedManyWithoutCategoriesInput
  }

  export type WorkoutCategoryUncheckedCreateWithoutTemplatesInput = {
    id?: number
    name: string
    userId: number
    logs?: WorkoutLogUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type WorkoutCategoryCreateOrConnectWithoutTemplatesInput = {
    where: WorkoutCategoryWhereUniqueInput
    create: XOR<WorkoutCategoryCreateWithoutTemplatesInput, WorkoutCategoryUncheckedCreateWithoutTemplatesInput>
  }

  export type WorkoutCategoryCreateManyTemplatesInputEnvelope = {
    data: WorkoutCategoryCreateManyTemplatesInput | WorkoutCategoryCreateManyTemplatesInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWorkoutTemplatesInput = {
    update: XOR<UserUpdateWithoutWorkoutTemplatesInput, UserUncheckedUpdateWithoutWorkoutTemplatesInput>
    create: XOR<UserCreateWithoutWorkoutTemplatesInput, UserUncheckedCreateWithoutWorkoutTemplatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkoutTemplatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkoutTemplatesInput, UserUncheckedUpdateWithoutWorkoutTemplatesInput>
  }

  export type UserUpdateWithoutWorkoutTemplatesInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    unitPref?: StringFieldUpdateOperationsInput | string
    workoutLogs?: WorkoutLogUpdateManyWithoutUserNestedInput
    fitnessGoals?: FitnessGoalUpdateManyWithoutUserNestedInput
    savedExercises?: ExercisesUpdateManyWithoutUserNestedInput
    createdCategories?: WorkoutCategoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkoutTemplatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    unitPref?: StringFieldUpdateOperationsInput | string
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutUserNestedInput
    fitnessGoals?: FitnessGoalUncheckedUpdateManyWithoutUserNestedInput
    savedExercises?: ExercisesUncheckedUpdateManyWithoutUserNestedInput
    createdCategories?: WorkoutCategoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkoutCategoryUpsertWithWhereUniqueWithoutTemplatesInput = {
    where: WorkoutCategoryWhereUniqueInput
    update: XOR<WorkoutCategoryUpdateWithoutTemplatesInput, WorkoutCategoryUncheckedUpdateWithoutTemplatesInput>
    create: XOR<WorkoutCategoryCreateWithoutTemplatesInput, WorkoutCategoryUncheckedCreateWithoutTemplatesInput>
  }

  export type WorkoutCategoryUpdateWithWhereUniqueWithoutTemplatesInput = {
    where: WorkoutCategoryWhereUniqueInput
    data: XOR<WorkoutCategoryUpdateWithoutTemplatesInput, WorkoutCategoryUncheckedUpdateWithoutTemplatesInput>
  }

  export type WorkoutCategoryUpdateManyWithWhereWithoutTemplatesInput = {
    where: WorkoutCategoryScalarWhereInput
    data: XOR<WorkoutCategoryUpdateManyMutationInput, WorkoutCategoryUncheckedUpdateManyWithoutTemplatesInput>
  }

  export type UserCreateWithoutWorkoutLogsInput = {
    email: string
    passwordHash: string
    avatarUrl?: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    weight: number
    unitPref?: string
    workoutTemplates?: WorkoutTemplateCreateNestedManyWithoutUserInput
    fitnessGoals?: FitnessGoalCreateNestedManyWithoutUserInput
    savedExercises?: ExercisesCreateNestedManyWithoutUserInput
    createdCategories?: WorkoutCategoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkoutLogsInput = {
    id?: number
    email: string
    passwordHash: string
    avatarUrl?: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    weight: number
    unitPref?: string
    workoutTemplates?: WorkoutTemplateUncheckedCreateNestedManyWithoutUserInput
    fitnessGoals?: FitnessGoalUncheckedCreateNestedManyWithoutUserInput
    savedExercises?: ExercisesUncheckedCreateNestedManyWithoutUserInput
    createdCategories?: WorkoutCategoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkoutLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkoutLogsInput, UserUncheckedCreateWithoutWorkoutLogsInput>
  }

  export type WorkoutCategoryCreateWithoutLogsInput = {
    name: string
    user: UserCreateNestedOneWithoutCreatedCategoriesInput
    templates?: WorkoutTemplateCreateNestedOneWithoutCategoriesInput
  }

  export type WorkoutCategoryUncheckedCreateWithoutLogsInput = {
    id?: number
    name: string
    userId: number
    templateId?: number | null
  }

  export type WorkoutCategoryCreateOrConnectWithoutLogsInput = {
    where: WorkoutCategoryWhereUniqueInput
    create: XOR<WorkoutCategoryCreateWithoutLogsInput, WorkoutCategoryUncheckedCreateWithoutLogsInput>
  }

  export type UserUpsertWithoutWorkoutLogsInput = {
    update: XOR<UserUpdateWithoutWorkoutLogsInput, UserUncheckedUpdateWithoutWorkoutLogsInput>
    create: XOR<UserCreateWithoutWorkoutLogsInput, UserUncheckedCreateWithoutWorkoutLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkoutLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkoutLogsInput, UserUncheckedUpdateWithoutWorkoutLogsInput>
  }

  export type UserUpdateWithoutWorkoutLogsInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    unitPref?: StringFieldUpdateOperationsInput | string
    workoutTemplates?: WorkoutTemplateUpdateManyWithoutUserNestedInput
    fitnessGoals?: FitnessGoalUpdateManyWithoutUserNestedInput
    savedExercises?: ExercisesUpdateManyWithoutUserNestedInput
    createdCategories?: WorkoutCategoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkoutLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    unitPref?: StringFieldUpdateOperationsInput | string
    workoutTemplates?: WorkoutTemplateUncheckedUpdateManyWithoutUserNestedInput
    fitnessGoals?: FitnessGoalUncheckedUpdateManyWithoutUserNestedInput
    savedExercises?: ExercisesUncheckedUpdateManyWithoutUserNestedInput
    createdCategories?: WorkoutCategoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkoutCategoryUpsertWithWhereUniqueWithoutLogsInput = {
    where: WorkoutCategoryWhereUniqueInput
    update: XOR<WorkoutCategoryUpdateWithoutLogsInput, WorkoutCategoryUncheckedUpdateWithoutLogsInput>
    create: XOR<WorkoutCategoryCreateWithoutLogsInput, WorkoutCategoryUncheckedCreateWithoutLogsInput>
  }

  export type WorkoutCategoryUpdateWithWhereUniqueWithoutLogsInput = {
    where: WorkoutCategoryWhereUniqueInput
    data: XOR<WorkoutCategoryUpdateWithoutLogsInput, WorkoutCategoryUncheckedUpdateWithoutLogsInput>
  }

  export type WorkoutCategoryUpdateManyWithWhereWithoutLogsInput = {
    where: WorkoutCategoryScalarWhereInput
    data: XOR<WorkoutCategoryUpdateManyMutationInput, WorkoutCategoryUncheckedUpdateManyWithoutLogsInput>
  }

  export type UserCreateWithoutCreatedCategoriesInput = {
    email: string
    passwordHash: string
    avatarUrl?: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    weight: number
    unitPref?: string
    workoutLogs?: WorkoutLogCreateNestedManyWithoutUserInput
    workoutTemplates?: WorkoutTemplateCreateNestedManyWithoutUserInput
    fitnessGoals?: FitnessGoalCreateNestedManyWithoutUserInput
    savedExercises?: ExercisesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedCategoriesInput = {
    id?: number
    email: string
    passwordHash: string
    avatarUrl?: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    weight: number
    unitPref?: string
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutUserInput
    workoutTemplates?: WorkoutTemplateUncheckedCreateNestedManyWithoutUserInput
    fitnessGoals?: FitnessGoalUncheckedCreateNestedManyWithoutUserInput
    savedExercises?: ExercisesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedCategoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedCategoriesInput, UserUncheckedCreateWithoutCreatedCategoriesInput>
  }

  export type WorkoutTemplateCreateWithoutCategoriesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    templateName: string
    description: string
    routine: JsonNullValueInput | InputJsonValue
    duration: number
    notes?: string | null
    user: UserCreateNestedOneWithoutWorkoutTemplatesInput
  }

  export type WorkoutTemplateUncheckedCreateWithoutCategoriesInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    templateName: string
    description: string
    routine: JsonNullValueInput | InputJsonValue
    duration: number
    notes?: string | null
    userId: number
  }

  export type WorkoutTemplateCreateOrConnectWithoutCategoriesInput = {
    where: WorkoutTemplateWhereUniqueInput
    create: XOR<WorkoutTemplateCreateWithoutCategoriesInput, WorkoutTemplateUncheckedCreateWithoutCategoriesInput>
  }

  export type WorkoutLogCreateWithoutCategoriesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    routine: JsonNullValueInput | InputJsonValue
    duration: number
    notes?: string | null
    estimatedCalorieBurn: number
    user: UserCreateNestedOneWithoutWorkoutLogsInput
  }

  export type WorkoutLogUncheckedCreateWithoutCategoriesInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    routine: JsonNullValueInput | InputJsonValue
    duration: number
    notes?: string | null
    estimatedCalorieBurn: number
    userId: number
  }

  export type WorkoutLogCreateOrConnectWithoutCategoriesInput = {
    where: WorkoutLogWhereUniqueInput
    create: XOR<WorkoutLogCreateWithoutCategoriesInput, WorkoutLogUncheckedCreateWithoutCategoriesInput>
  }

  export type UserUpsertWithoutCreatedCategoriesInput = {
    update: XOR<UserUpdateWithoutCreatedCategoriesInput, UserUncheckedUpdateWithoutCreatedCategoriesInput>
    create: XOR<UserCreateWithoutCreatedCategoriesInput, UserUncheckedCreateWithoutCreatedCategoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedCategoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedCategoriesInput, UserUncheckedUpdateWithoutCreatedCategoriesInput>
  }

  export type UserUpdateWithoutCreatedCategoriesInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    unitPref?: StringFieldUpdateOperationsInput | string
    workoutLogs?: WorkoutLogUpdateManyWithoutUserNestedInput
    workoutTemplates?: WorkoutTemplateUpdateManyWithoutUserNestedInput
    fitnessGoals?: FitnessGoalUpdateManyWithoutUserNestedInput
    savedExercises?: ExercisesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    unitPref?: StringFieldUpdateOperationsInput | string
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutUserNestedInput
    workoutTemplates?: WorkoutTemplateUncheckedUpdateManyWithoutUserNestedInput
    fitnessGoals?: FitnessGoalUncheckedUpdateManyWithoutUserNestedInput
    savedExercises?: ExercisesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkoutTemplateUpsertWithoutCategoriesInput = {
    update: XOR<WorkoutTemplateUpdateWithoutCategoriesInput, WorkoutTemplateUncheckedUpdateWithoutCategoriesInput>
    create: XOR<WorkoutTemplateCreateWithoutCategoriesInput, WorkoutTemplateUncheckedCreateWithoutCategoriesInput>
    where?: WorkoutTemplateWhereInput
  }

  export type WorkoutTemplateUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: WorkoutTemplateWhereInput
    data: XOR<WorkoutTemplateUpdateWithoutCategoriesInput, WorkoutTemplateUncheckedUpdateWithoutCategoriesInput>
  }

  export type WorkoutTemplateUpdateWithoutCategoriesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templateName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    routine?: JsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutWorkoutTemplatesNestedInput
  }

  export type WorkoutTemplateUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templateName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    routine?: JsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutLogUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: WorkoutLogWhereUniqueInput
    update: XOR<WorkoutLogUpdateWithoutCategoriesInput, WorkoutLogUncheckedUpdateWithoutCategoriesInput>
    create: XOR<WorkoutLogCreateWithoutCategoriesInput, WorkoutLogUncheckedCreateWithoutCategoriesInput>
  }

  export type WorkoutLogUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: WorkoutLogWhereUniqueInput
    data: XOR<WorkoutLogUpdateWithoutCategoriesInput, WorkoutLogUncheckedUpdateWithoutCategoriesInput>
  }

  export type WorkoutLogUpdateManyWithWhereWithoutCategoriesInput = {
    where: WorkoutLogScalarWhereInput
    data: XOR<WorkoutLogUpdateManyMutationInput, WorkoutLogUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type UserCreateWithoutFitnessGoalsInput = {
    email: string
    passwordHash: string
    avatarUrl?: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    weight: number
    unitPref?: string
    workoutLogs?: WorkoutLogCreateNestedManyWithoutUserInput
    workoutTemplates?: WorkoutTemplateCreateNestedManyWithoutUserInput
    savedExercises?: ExercisesCreateNestedManyWithoutUserInput
    createdCategories?: WorkoutCategoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFitnessGoalsInput = {
    id?: number
    email: string
    passwordHash: string
    avatarUrl?: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    weight: number
    unitPref?: string
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutUserInput
    workoutTemplates?: WorkoutTemplateUncheckedCreateNestedManyWithoutUserInput
    savedExercises?: ExercisesUncheckedCreateNestedManyWithoutUserInput
    createdCategories?: WorkoutCategoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFitnessGoalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFitnessGoalsInput, UserUncheckedCreateWithoutFitnessGoalsInput>
  }

  export type UserUpsertWithoutFitnessGoalsInput = {
    update: XOR<UserUpdateWithoutFitnessGoalsInput, UserUncheckedUpdateWithoutFitnessGoalsInput>
    create: XOR<UserCreateWithoutFitnessGoalsInput, UserUncheckedCreateWithoutFitnessGoalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFitnessGoalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFitnessGoalsInput, UserUncheckedUpdateWithoutFitnessGoalsInput>
  }

  export type UserUpdateWithoutFitnessGoalsInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    unitPref?: StringFieldUpdateOperationsInput | string
    workoutLogs?: WorkoutLogUpdateManyWithoutUserNestedInput
    workoutTemplates?: WorkoutTemplateUpdateManyWithoutUserNestedInput
    savedExercises?: ExercisesUpdateManyWithoutUserNestedInput
    createdCategories?: WorkoutCategoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFitnessGoalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    unitPref?: StringFieldUpdateOperationsInput | string
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutUserNestedInput
    workoutTemplates?: WorkoutTemplateUncheckedUpdateManyWithoutUserNestedInput
    savedExercises?: ExercisesUncheckedUpdateManyWithoutUserNestedInput
    createdCategories?: WorkoutCategoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSavedExercisesInput = {
    email: string
    passwordHash: string
    avatarUrl?: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    weight: number
    unitPref?: string
    workoutLogs?: WorkoutLogCreateNestedManyWithoutUserInput
    workoutTemplates?: WorkoutTemplateCreateNestedManyWithoutUserInput
    fitnessGoals?: FitnessGoalCreateNestedManyWithoutUserInput
    createdCategories?: WorkoutCategoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSavedExercisesInput = {
    id?: number
    email: string
    passwordHash: string
    avatarUrl?: string
    firstName: string
    lastName: string
    phone?: string | null
    role?: $Enums.UserRole
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    weight: number
    unitPref?: string
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutUserInput
    workoutTemplates?: WorkoutTemplateUncheckedCreateNestedManyWithoutUserInput
    fitnessGoals?: FitnessGoalUncheckedCreateNestedManyWithoutUserInput
    createdCategories?: WorkoutCategoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSavedExercisesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedExercisesInput, UserUncheckedCreateWithoutSavedExercisesInput>
  }

  export type UserUpsertWithoutSavedExercisesInput = {
    update: XOR<UserUpdateWithoutSavedExercisesInput, UserUncheckedUpdateWithoutSavedExercisesInput>
    create: XOR<UserCreateWithoutSavedExercisesInput, UserUncheckedCreateWithoutSavedExercisesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSavedExercisesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSavedExercisesInput, UserUncheckedUpdateWithoutSavedExercisesInput>
  }

  export type UserUpdateWithoutSavedExercisesInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    unitPref?: StringFieldUpdateOperationsInput | string
    workoutLogs?: WorkoutLogUpdateManyWithoutUserNestedInput
    workoutTemplates?: WorkoutTemplateUpdateManyWithoutUserNestedInput
    fitnessGoals?: FitnessGoalUpdateManyWithoutUserNestedInput
    createdCategories?: WorkoutCategoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedExercisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: FloatFieldUpdateOperationsInput | number
    unitPref?: StringFieldUpdateOperationsInput | string
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutUserNestedInput
    workoutTemplates?: WorkoutTemplateUncheckedUpdateManyWithoutUserNestedInput
    fitnessGoals?: FitnessGoalUncheckedUpdateManyWithoutUserNestedInput
    createdCategories?: WorkoutCategoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkoutLogCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    routine: JsonNullValueInput | InputJsonValue
    duration: number
    notes?: string | null
    estimatedCalorieBurn: number
  }

  export type WorkoutTemplateCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    templateName: string
    description: string
    routine: JsonNullValueInput | InputJsonValue
    duration: number
    notes?: string | null
  }

  export type FitnessGoalCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    completeBy: Date | string
    progress?: number
    status?: $Enums.GoalStatus
    subgoals?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ExercisesCreateManyUserInput = {
    id?: number
    name: string
    custom: boolean
    type: string
    muscle: string
    equipment: string
    notes?: string | null
    useCount?: number
    met: string
  }

  export type WorkoutCategoryCreateManyUserInput = {
    id?: number
    name: string
    templateId?: number | null
  }

  export type WorkoutLogUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    routine?: JsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedCalorieBurn?: IntFieldUpdateOperationsInput | number
    categories?: WorkoutCategoryUpdateManyWithoutLogsNestedInput
  }

  export type WorkoutLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    routine?: JsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedCalorieBurn?: IntFieldUpdateOperationsInput | number
    categories?: WorkoutCategoryUncheckedUpdateManyWithoutLogsNestedInput
  }

  export type WorkoutLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    routine?: JsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedCalorieBurn?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutTemplateUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templateName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    routine?: JsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: WorkoutCategoryUpdateManyWithoutTemplatesNestedInput
  }

  export type WorkoutTemplateUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templateName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    routine?: JsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: WorkoutCategoryUncheckedUpdateManyWithoutTemplatesNestedInput
  }

  export type WorkoutTemplateUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templateName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    routine?: JsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FitnessGoalUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    completeBy?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    subgoals?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FitnessGoalUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    completeBy?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    subgoals?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FitnessGoalUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    completeBy?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: FloatFieldUpdateOperationsInput | number
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    subgoals?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ExercisesUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    custom?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    muscle?: StringFieldUpdateOperationsInput | string
    equipment?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    useCount?: IntFieldUpdateOperationsInput | number
    met?: StringFieldUpdateOperationsInput | string
  }

  export type ExercisesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    custom?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    muscle?: StringFieldUpdateOperationsInput | string
    equipment?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    useCount?: IntFieldUpdateOperationsInput | number
    met?: StringFieldUpdateOperationsInput | string
  }

  export type ExercisesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    custom?: BoolFieldUpdateOperationsInput | boolean
    type?: StringFieldUpdateOperationsInput | string
    muscle?: StringFieldUpdateOperationsInput | string
    equipment?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    useCount?: IntFieldUpdateOperationsInput | number
    met?: StringFieldUpdateOperationsInput | string
  }

  export type WorkoutCategoryUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    templates?: WorkoutTemplateUpdateOneWithoutCategoriesNestedInput
    logs?: WorkoutLogUpdateManyWithoutCategoriesNestedInput
  }

  export type WorkoutCategoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    templateId?: NullableIntFieldUpdateOperationsInput | number | null
    logs?: WorkoutLogUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type WorkoutCategoryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    templateId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WorkoutCategoryCreateManyTemplatesInput = {
    id?: number
    name: string
    userId: number
  }

  export type WorkoutCategoryUpdateWithoutTemplatesInput = {
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCreatedCategoriesNestedInput
    logs?: WorkoutLogUpdateManyWithoutCategoriesNestedInput
  }

  export type WorkoutCategoryUncheckedUpdateWithoutTemplatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    logs?: WorkoutLogUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type WorkoutCategoryUncheckedUpdateManyWithoutTemplatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutCategoryUpdateWithoutLogsInput = {
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCreatedCategoriesNestedInput
    templates?: WorkoutTemplateUpdateOneWithoutCategoriesNestedInput
  }

  export type WorkoutCategoryUncheckedUpdateWithoutLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    templateId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WorkoutCategoryUncheckedUpdateManyWithoutLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    templateId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WorkoutLogUpdateWithoutCategoriesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    routine?: JsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedCalorieBurn?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutWorkoutLogsNestedInput
  }

  export type WorkoutLogUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    routine?: JsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedCalorieBurn?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutLogUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    routine?: JsonNullValueInput | InputJsonValue
    duration?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedCalorieBurn?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }



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