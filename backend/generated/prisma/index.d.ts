
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
 * Model Vehiculo
 * 
 */
export type Vehiculo = $Result.DefaultSelection<Prisma.$VehiculoPayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Reserva
 * 
 */
export type Reserva = $Result.DefaultSelection<Prisma.$ReservaPayload>
/**
 * Model Contrato
 * 
 */
export type Contrato = $Result.DefaultSelection<Prisma.$ContratoPayload>
/**
 * Model Devolucion
 * 
 */
export type Devolucion = $Result.DefaultSelection<Prisma.$DevolucionPayload>
/**
 * Model Mantenimiento
 * 
 */
export type Mantenimiento = $Result.DefaultSelection<Prisma.$MantenimientoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoVehiculo: {
  SEDAN: 'SEDAN',
  SUV: 'SUV',
  CAMIONETA: 'CAMIONETA',
  DEPORTIVO: 'DEPORTIVO',
  FURGONETA: 'FURGONETA'
};

export type TipoVehiculo = (typeof TipoVehiculo)[keyof typeof TipoVehiculo]


export const EstadoVehiculo: {
  DISPONIBLE: 'DISPONIBLE',
  ALQUILADO: 'ALQUILADO',
  MANTENIMIENTO: 'MANTENIMIENTO',
  FUERA_DE_SERVICIO: 'FUERA_DE_SERVICIO'
};

export type EstadoVehiculo = (typeof EstadoVehiculo)[keyof typeof EstadoVehiculo]


export const EstadoReserva: {
  PENDIENTE: 'PENDIENTE',
  CONFIRMADA: 'CONFIRMADA',
  ACTIVA: 'ACTIVA',
  FINALIZADA: 'FINALIZADA',
  CANCELADA: 'CANCELADA'
};

export type EstadoReserva = (typeof EstadoReserva)[keyof typeof EstadoReserva]


export const EstadoContrato: {
  VIGENTE: 'VIGENTE',
  FINALIZADO: 'FINALIZADO',
  CANCELADO: 'CANCELADO'
};

export type EstadoContrato = (typeof EstadoContrato)[keyof typeof EstadoContrato]


export const TipoMantenimiento: {
  PREVENTIVO: 'PREVENTIVO',
  CORRECTIVO: 'CORRECTIVO',
  REVISION: 'REVISION'
};

export type TipoMantenimiento = (typeof TipoMantenimiento)[keyof typeof TipoMantenimiento]

}

export type TipoVehiculo = $Enums.TipoVehiculo

export const TipoVehiculo: typeof $Enums.TipoVehiculo

export type EstadoVehiculo = $Enums.EstadoVehiculo

export const EstadoVehiculo: typeof $Enums.EstadoVehiculo

export type EstadoReserva = $Enums.EstadoReserva

export const EstadoReserva: typeof $Enums.EstadoReserva

export type EstadoContrato = $Enums.EstadoContrato

export const EstadoContrato: typeof $Enums.EstadoContrato

export type TipoMantenimiento = $Enums.TipoMantenimiento

export const TipoMantenimiento: typeof $Enums.TipoMantenimiento

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Vehiculos
 * const vehiculos = await prisma.vehiculo.findMany()
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Vehiculos
   * const vehiculos = await prisma.vehiculo.findMany()
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.vehiculo`: Exposes CRUD operations for the **Vehiculo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehiculos
    * const vehiculos = await prisma.vehiculo.findMany()
    * ```
    */
  get vehiculo(): Prisma.VehiculoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reserva`: Exposes CRUD operations for the **Reserva** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservas
    * const reservas = await prisma.reserva.findMany()
    * ```
    */
  get reserva(): Prisma.ReservaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contrato`: Exposes CRUD operations for the **Contrato** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contratoes
    * const contratoes = await prisma.contrato.findMany()
    * ```
    */
  get contrato(): Prisma.ContratoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.devolucion`: Exposes CRUD operations for the **Devolucion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devolucions
    * const devolucions = await prisma.devolucion.findMany()
    * ```
    */
  get devolucion(): Prisma.DevolucionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mantenimiento`: Exposes CRUD operations for the **Mantenimiento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mantenimientos
    * const mantenimientos = await prisma.mantenimiento.findMany()
    * ```
    */
  get mantenimiento(): Prisma.MantenimientoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
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
    Vehiculo: 'Vehiculo',
    Cliente: 'Cliente',
    Reserva: 'Reserva',
    Contrato: 'Contrato',
    Devolucion: 'Devolucion',
    Mantenimiento: 'Mantenimiento'
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
      modelProps: "vehiculo" | "cliente" | "reserva" | "contrato" | "devolucion" | "mantenimiento"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Vehiculo: {
        payload: Prisma.$VehiculoPayload<ExtArgs>
        fields: Prisma.VehiculoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehiculoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehiculoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          findFirst: {
            args: Prisma.VehiculoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehiculoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          findMany: {
            args: Prisma.VehiculoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>[]
          }
          create: {
            args: Prisma.VehiculoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          createMany: {
            args: Prisma.VehiculoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehiculoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>[]
          }
          delete: {
            args: Prisma.VehiculoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          update: {
            args: Prisma.VehiculoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          deleteMany: {
            args: Prisma.VehiculoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehiculoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehiculoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>[]
          }
          upsert: {
            args: Prisma.VehiculoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          aggregate: {
            args: Prisma.VehiculoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehiculo>
          }
          groupBy: {
            args: Prisma.VehiculoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehiculoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehiculoCountArgs<ExtArgs>
            result: $Utils.Optional<VehiculoCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Reserva: {
        payload: Prisma.$ReservaPayload<ExtArgs>
        fields: Prisma.ReservaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          findFirst: {
            args: Prisma.ReservaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          findMany: {
            args: Prisma.ReservaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>[]
          }
          create: {
            args: Prisma.ReservaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          createMany: {
            args: Prisma.ReservaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>[]
          }
          delete: {
            args: Prisma.ReservaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          update: {
            args: Prisma.ReservaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          deleteMany: {
            args: Prisma.ReservaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReservaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>[]
          }
          upsert: {
            args: Prisma.ReservaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          aggregate: {
            args: Prisma.ReservaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReserva>
          }
          groupBy: {
            args: Prisma.ReservaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservaCountArgs<ExtArgs>
            result: $Utils.Optional<ReservaCountAggregateOutputType> | number
          }
        }
      }
      Contrato: {
        payload: Prisma.$ContratoPayload<ExtArgs>
        fields: Prisma.ContratoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContratoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContratoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratoPayload>
          }
          findFirst: {
            args: Prisma.ContratoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContratoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratoPayload>
          }
          findMany: {
            args: Prisma.ContratoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratoPayload>[]
          }
          create: {
            args: Prisma.ContratoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratoPayload>
          }
          createMany: {
            args: Prisma.ContratoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContratoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratoPayload>[]
          }
          delete: {
            args: Prisma.ContratoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratoPayload>
          }
          update: {
            args: Prisma.ContratoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratoPayload>
          }
          deleteMany: {
            args: Prisma.ContratoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContratoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContratoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratoPayload>[]
          }
          upsert: {
            args: Prisma.ContratoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContratoPayload>
          }
          aggregate: {
            args: Prisma.ContratoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContrato>
          }
          groupBy: {
            args: Prisma.ContratoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContratoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContratoCountArgs<ExtArgs>
            result: $Utils.Optional<ContratoCountAggregateOutputType> | number
          }
        }
      }
      Devolucion: {
        payload: Prisma.$DevolucionPayload<ExtArgs>
        fields: Prisma.DevolucionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DevolucionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevolucionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DevolucionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevolucionPayload>
          }
          findFirst: {
            args: Prisma.DevolucionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevolucionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DevolucionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevolucionPayload>
          }
          findMany: {
            args: Prisma.DevolucionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevolucionPayload>[]
          }
          create: {
            args: Prisma.DevolucionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevolucionPayload>
          }
          createMany: {
            args: Prisma.DevolucionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DevolucionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevolucionPayload>[]
          }
          delete: {
            args: Prisma.DevolucionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevolucionPayload>
          }
          update: {
            args: Prisma.DevolucionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevolucionPayload>
          }
          deleteMany: {
            args: Prisma.DevolucionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DevolucionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DevolucionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevolucionPayload>[]
          }
          upsert: {
            args: Prisma.DevolucionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevolucionPayload>
          }
          aggregate: {
            args: Prisma.DevolucionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevolucion>
          }
          groupBy: {
            args: Prisma.DevolucionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DevolucionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DevolucionCountArgs<ExtArgs>
            result: $Utils.Optional<DevolucionCountAggregateOutputType> | number
          }
        }
      }
      Mantenimiento: {
        payload: Prisma.$MantenimientoPayload<ExtArgs>
        fields: Prisma.MantenimientoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MantenimientoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MantenimientoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MantenimientoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MantenimientoPayload>
          }
          findFirst: {
            args: Prisma.MantenimientoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MantenimientoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MantenimientoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MantenimientoPayload>
          }
          findMany: {
            args: Prisma.MantenimientoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MantenimientoPayload>[]
          }
          create: {
            args: Prisma.MantenimientoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MantenimientoPayload>
          }
          createMany: {
            args: Prisma.MantenimientoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MantenimientoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MantenimientoPayload>[]
          }
          delete: {
            args: Prisma.MantenimientoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MantenimientoPayload>
          }
          update: {
            args: Prisma.MantenimientoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MantenimientoPayload>
          }
          deleteMany: {
            args: Prisma.MantenimientoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MantenimientoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MantenimientoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MantenimientoPayload>[]
          }
          upsert: {
            args: Prisma.MantenimientoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MantenimientoPayload>
          }
          aggregate: {
            args: Prisma.MantenimientoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMantenimiento>
          }
          groupBy: {
            args: Prisma.MantenimientoGroupByArgs<ExtArgs>
            result: $Utils.Optional<MantenimientoGroupByOutputType>[]
          }
          count: {
            args: Prisma.MantenimientoCountArgs<ExtArgs>
            result: $Utils.Optional<MantenimientoCountAggregateOutputType> | number
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
    vehiculo?: VehiculoOmit
    cliente?: ClienteOmit
    reserva?: ReservaOmit
    contrato?: ContratoOmit
    devolucion?: DevolucionOmit
    mantenimiento?: MantenimientoOmit
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
   * Count Type VehiculoCountOutputType
   */

  export type VehiculoCountOutputType = {
    reservas: number
    mantenimientos: number
  }

  export type VehiculoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | VehiculoCountOutputTypeCountReservasArgs
    mantenimientos?: boolean | VehiculoCountOutputTypeCountMantenimientosArgs
  }

  // Custom InputTypes
  /**
   * VehiculoCountOutputType without action
   */
  export type VehiculoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiculoCountOutputType
     */
    select?: VehiculoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehiculoCountOutputType without action
   */
  export type VehiculoCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
  }

  /**
   * VehiculoCountOutputType without action
   */
  export type VehiculoCountOutputTypeCountMantenimientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MantenimientoWhereInput
  }


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    reservas: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | ClienteCountOutputTypeCountReservasArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Vehiculo
   */

  export type AggregateVehiculo = {
    _count: VehiculoCountAggregateOutputType | null
    _avg: VehiculoAvgAggregateOutputType | null
    _sum: VehiculoSumAggregateOutputType | null
    _min: VehiculoMinAggregateOutputType | null
    _max: VehiculoMaxAggregateOutputType | null
  }

  export type VehiculoAvgAggregateOutputType = {
    id: number | null
    anio: number | null
    precioPorDia: number | null
    kilometraje: number | null
  }

  export type VehiculoSumAggregateOutputType = {
    id: number | null
    anio: number | null
    precioPorDia: number | null
    kilometraje: number | null
  }

  export type VehiculoMinAggregateOutputType = {
    id: number | null
    marca: string | null
    modelo: string | null
    anio: number | null
    placa: string | null
    tipo: $Enums.TipoVehiculo | null
    estado: $Enums.EstadoVehiculo | null
    precioPorDia: number | null
    kilometraje: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehiculoMaxAggregateOutputType = {
    id: number | null
    marca: string | null
    modelo: string | null
    anio: number | null
    placa: string | null
    tipo: $Enums.TipoVehiculo | null
    estado: $Enums.EstadoVehiculo | null
    precioPorDia: number | null
    kilometraje: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehiculoCountAggregateOutputType = {
    id: number
    marca: number
    modelo: number
    anio: number
    placa: number
    tipo: number
    estado: number
    precioPorDia: number
    kilometraje: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VehiculoAvgAggregateInputType = {
    id?: true
    anio?: true
    precioPorDia?: true
    kilometraje?: true
  }

  export type VehiculoSumAggregateInputType = {
    id?: true
    anio?: true
    precioPorDia?: true
    kilometraje?: true
  }

  export type VehiculoMinAggregateInputType = {
    id?: true
    marca?: true
    modelo?: true
    anio?: true
    placa?: true
    tipo?: true
    estado?: true
    precioPorDia?: true
    kilometraje?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehiculoMaxAggregateInputType = {
    id?: true
    marca?: true
    modelo?: true
    anio?: true
    placa?: true
    tipo?: true
    estado?: true
    precioPorDia?: true
    kilometraje?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehiculoCountAggregateInputType = {
    id?: true
    marca?: true
    modelo?: true
    anio?: true
    placa?: true
    tipo?: true
    estado?: true
    precioPorDia?: true
    kilometraje?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VehiculoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehiculo to aggregate.
     */
    where?: VehiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehiculos to fetch.
     */
    orderBy?: VehiculoOrderByWithRelationInput | VehiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehiculos
    **/
    _count?: true | VehiculoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehiculoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehiculoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehiculoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehiculoMaxAggregateInputType
  }

  export type GetVehiculoAggregateType<T extends VehiculoAggregateArgs> = {
        [P in keyof T & keyof AggregateVehiculo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehiculo[P]>
      : GetScalarType<T[P], AggregateVehiculo[P]>
  }




  export type VehiculoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehiculoWhereInput
    orderBy?: VehiculoOrderByWithAggregationInput | VehiculoOrderByWithAggregationInput[]
    by: VehiculoScalarFieldEnum[] | VehiculoScalarFieldEnum
    having?: VehiculoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehiculoCountAggregateInputType | true
    _avg?: VehiculoAvgAggregateInputType
    _sum?: VehiculoSumAggregateInputType
    _min?: VehiculoMinAggregateInputType
    _max?: VehiculoMaxAggregateInputType
  }

  export type VehiculoGroupByOutputType = {
    id: number
    marca: string
    modelo: string
    anio: number
    placa: string
    tipo: $Enums.TipoVehiculo
    estado: $Enums.EstadoVehiculo
    precioPorDia: number
    kilometraje: number
    createdAt: Date
    updatedAt: Date
    _count: VehiculoCountAggregateOutputType | null
    _avg: VehiculoAvgAggregateOutputType | null
    _sum: VehiculoSumAggregateOutputType | null
    _min: VehiculoMinAggregateOutputType | null
    _max: VehiculoMaxAggregateOutputType | null
  }

  type GetVehiculoGroupByPayload<T extends VehiculoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehiculoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehiculoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehiculoGroupByOutputType[P]>
            : GetScalarType<T[P], VehiculoGroupByOutputType[P]>
        }
      >
    >


  export type VehiculoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marca?: boolean
    modelo?: boolean
    anio?: boolean
    placa?: boolean
    tipo?: boolean
    estado?: boolean
    precioPorDia?: boolean
    kilometraje?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reservas?: boolean | Vehiculo$reservasArgs<ExtArgs>
    mantenimientos?: boolean | Vehiculo$mantenimientosArgs<ExtArgs>
    _count?: boolean | VehiculoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehiculo"]>

  export type VehiculoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marca?: boolean
    modelo?: boolean
    anio?: boolean
    placa?: boolean
    tipo?: boolean
    estado?: boolean
    precioPorDia?: boolean
    kilometraje?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vehiculo"]>

  export type VehiculoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marca?: boolean
    modelo?: boolean
    anio?: boolean
    placa?: boolean
    tipo?: boolean
    estado?: boolean
    precioPorDia?: boolean
    kilometraje?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vehiculo"]>

  export type VehiculoSelectScalar = {
    id?: boolean
    marca?: boolean
    modelo?: boolean
    anio?: boolean
    placa?: boolean
    tipo?: boolean
    estado?: boolean
    precioPorDia?: boolean
    kilometraje?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VehiculoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "marca" | "modelo" | "anio" | "placa" | "tipo" | "estado" | "precioPorDia" | "kilometraje" | "createdAt" | "updatedAt", ExtArgs["result"]["vehiculo"]>
  export type VehiculoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | Vehiculo$reservasArgs<ExtArgs>
    mantenimientos?: boolean | Vehiculo$mantenimientosArgs<ExtArgs>
    _count?: boolean | VehiculoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehiculoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VehiculoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VehiculoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehiculo"
    objects: {
      reservas: Prisma.$ReservaPayload<ExtArgs>[]
      mantenimientos: Prisma.$MantenimientoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      marca: string
      modelo: string
      anio: number
      placa: string
      tipo: $Enums.TipoVehiculo
      estado: $Enums.EstadoVehiculo
      precioPorDia: number
      kilometraje: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vehiculo"]>
    composites: {}
  }

  type VehiculoGetPayload<S extends boolean | null | undefined | VehiculoDefaultArgs> = $Result.GetResult<Prisma.$VehiculoPayload, S>

  type VehiculoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehiculoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehiculoCountAggregateInputType | true
    }

  export interface VehiculoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehiculo'], meta: { name: 'Vehiculo' } }
    /**
     * Find zero or one Vehiculo that matches the filter.
     * @param {VehiculoFindUniqueArgs} args - Arguments to find a Vehiculo
     * @example
     * // Get one Vehiculo
     * const vehiculo = await prisma.vehiculo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehiculoFindUniqueArgs>(args: SelectSubset<T, VehiculoFindUniqueArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehiculo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehiculoFindUniqueOrThrowArgs} args - Arguments to find a Vehiculo
     * @example
     * // Get one Vehiculo
     * const vehiculo = await prisma.vehiculo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehiculoFindUniqueOrThrowArgs>(args: SelectSubset<T, VehiculoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehiculo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoFindFirstArgs} args - Arguments to find a Vehiculo
     * @example
     * // Get one Vehiculo
     * const vehiculo = await prisma.vehiculo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehiculoFindFirstArgs>(args?: SelectSubset<T, VehiculoFindFirstArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehiculo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoFindFirstOrThrowArgs} args - Arguments to find a Vehiculo
     * @example
     * // Get one Vehiculo
     * const vehiculo = await prisma.vehiculo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehiculoFindFirstOrThrowArgs>(args?: SelectSubset<T, VehiculoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehiculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehiculos
     * const vehiculos = await prisma.vehiculo.findMany()
     * 
     * // Get first 10 Vehiculos
     * const vehiculos = await prisma.vehiculo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehiculoWithIdOnly = await prisma.vehiculo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehiculoFindManyArgs>(args?: SelectSubset<T, VehiculoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehiculo.
     * @param {VehiculoCreateArgs} args - Arguments to create a Vehiculo.
     * @example
     * // Create one Vehiculo
     * const Vehiculo = await prisma.vehiculo.create({
     *   data: {
     *     // ... data to create a Vehiculo
     *   }
     * })
     * 
     */
    create<T extends VehiculoCreateArgs>(args: SelectSubset<T, VehiculoCreateArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehiculos.
     * @param {VehiculoCreateManyArgs} args - Arguments to create many Vehiculos.
     * @example
     * // Create many Vehiculos
     * const vehiculo = await prisma.vehiculo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehiculoCreateManyArgs>(args?: SelectSubset<T, VehiculoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehiculos and returns the data saved in the database.
     * @param {VehiculoCreateManyAndReturnArgs} args - Arguments to create many Vehiculos.
     * @example
     * // Create many Vehiculos
     * const vehiculo = await prisma.vehiculo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehiculos and only return the `id`
     * const vehiculoWithIdOnly = await prisma.vehiculo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehiculoCreateManyAndReturnArgs>(args?: SelectSubset<T, VehiculoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehiculo.
     * @param {VehiculoDeleteArgs} args - Arguments to delete one Vehiculo.
     * @example
     * // Delete one Vehiculo
     * const Vehiculo = await prisma.vehiculo.delete({
     *   where: {
     *     // ... filter to delete one Vehiculo
     *   }
     * })
     * 
     */
    delete<T extends VehiculoDeleteArgs>(args: SelectSubset<T, VehiculoDeleteArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehiculo.
     * @param {VehiculoUpdateArgs} args - Arguments to update one Vehiculo.
     * @example
     * // Update one Vehiculo
     * const vehiculo = await prisma.vehiculo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehiculoUpdateArgs>(args: SelectSubset<T, VehiculoUpdateArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehiculos.
     * @param {VehiculoDeleteManyArgs} args - Arguments to filter Vehiculos to delete.
     * @example
     * // Delete a few Vehiculos
     * const { count } = await prisma.vehiculo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehiculoDeleteManyArgs>(args?: SelectSubset<T, VehiculoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehiculos
     * const vehiculo = await prisma.vehiculo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehiculoUpdateManyArgs>(args: SelectSubset<T, VehiculoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehiculos and returns the data updated in the database.
     * @param {VehiculoUpdateManyAndReturnArgs} args - Arguments to update many Vehiculos.
     * @example
     * // Update many Vehiculos
     * const vehiculo = await prisma.vehiculo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehiculos and only return the `id`
     * const vehiculoWithIdOnly = await prisma.vehiculo.updateManyAndReturn({
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
    updateManyAndReturn<T extends VehiculoUpdateManyAndReturnArgs>(args: SelectSubset<T, VehiculoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehiculo.
     * @param {VehiculoUpsertArgs} args - Arguments to update or create a Vehiculo.
     * @example
     * // Update or create a Vehiculo
     * const vehiculo = await prisma.vehiculo.upsert({
     *   create: {
     *     // ... data to create a Vehiculo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehiculo we want to update
     *   }
     * })
     */
    upsert<T extends VehiculoUpsertArgs>(args: SelectSubset<T, VehiculoUpsertArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoCountArgs} args - Arguments to filter Vehiculos to count.
     * @example
     * // Count the number of Vehiculos
     * const count = await prisma.vehiculo.count({
     *   where: {
     *     // ... the filter for the Vehiculos we want to count
     *   }
     * })
    **/
    count<T extends VehiculoCountArgs>(
      args?: Subset<T, VehiculoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehiculoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehiculoAggregateArgs>(args: Subset<T, VehiculoAggregateArgs>): Prisma.PrismaPromise<GetVehiculoAggregateType<T>>

    /**
     * Group by Vehiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoGroupByArgs} args - Group by arguments.
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
      T extends VehiculoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehiculoGroupByArgs['orderBy'] }
        : { orderBy?: VehiculoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VehiculoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehiculoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehiculo model
   */
  readonly fields: VehiculoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehiculo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehiculoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservas<T extends Vehiculo$reservasArgs<ExtArgs> = {}>(args?: Subset<T, Vehiculo$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mantenimientos<T extends Vehiculo$mantenimientosArgs<ExtArgs> = {}>(args?: Subset<T, Vehiculo$mantenimientosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Vehiculo model
   */
  interface VehiculoFieldRefs {
    readonly id: FieldRef<"Vehiculo", 'Int'>
    readonly marca: FieldRef<"Vehiculo", 'String'>
    readonly modelo: FieldRef<"Vehiculo", 'String'>
    readonly anio: FieldRef<"Vehiculo", 'Int'>
    readonly placa: FieldRef<"Vehiculo", 'String'>
    readonly tipo: FieldRef<"Vehiculo", 'TipoVehiculo'>
    readonly estado: FieldRef<"Vehiculo", 'EstadoVehiculo'>
    readonly precioPorDia: FieldRef<"Vehiculo", 'Float'>
    readonly kilometraje: FieldRef<"Vehiculo", 'Int'>
    readonly createdAt: FieldRef<"Vehiculo", 'DateTime'>
    readonly updatedAt: FieldRef<"Vehiculo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vehiculo findUnique
   */
  export type VehiculoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter, which Vehiculo to fetch.
     */
    where: VehiculoWhereUniqueInput
  }

  /**
   * Vehiculo findUniqueOrThrow
   */
  export type VehiculoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter, which Vehiculo to fetch.
     */
    where: VehiculoWhereUniqueInput
  }

  /**
   * Vehiculo findFirst
   */
  export type VehiculoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter, which Vehiculo to fetch.
     */
    where?: VehiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehiculos to fetch.
     */
    orderBy?: VehiculoOrderByWithRelationInput | VehiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehiculos.
     */
    cursor?: VehiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehiculos.
     */
    distinct?: VehiculoScalarFieldEnum | VehiculoScalarFieldEnum[]
  }

  /**
   * Vehiculo findFirstOrThrow
   */
  export type VehiculoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter, which Vehiculo to fetch.
     */
    where?: VehiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehiculos to fetch.
     */
    orderBy?: VehiculoOrderByWithRelationInput | VehiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehiculos.
     */
    cursor?: VehiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehiculos.
     */
    distinct?: VehiculoScalarFieldEnum | VehiculoScalarFieldEnum[]
  }

  /**
   * Vehiculo findMany
   */
  export type VehiculoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter, which Vehiculos to fetch.
     */
    where?: VehiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehiculos to fetch.
     */
    orderBy?: VehiculoOrderByWithRelationInput | VehiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehiculos.
     */
    cursor?: VehiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehiculos.
     */
    distinct?: VehiculoScalarFieldEnum | VehiculoScalarFieldEnum[]
  }

  /**
   * Vehiculo create
   */
  export type VehiculoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehiculo.
     */
    data: XOR<VehiculoCreateInput, VehiculoUncheckedCreateInput>
  }

  /**
   * Vehiculo createMany
   */
  export type VehiculoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehiculos.
     */
    data: VehiculoCreateManyInput | VehiculoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehiculo createManyAndReturn
   */
  export type VehiculoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * The data used to create many Vehiculos.
     */
    data: VehiculoCreateManyInput | VehiculoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehiculo update
   */
  export type VehiculoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehiculo.
     */
    data: XOR<VehiculoUpdateInput, VehiculoUncheckedUpdateInput>
    /**
     * Choose, which Vehiculo to update.
     */
    where: VehiculoWhereUniqueInput
  }

  /**
   * Vehiculo updateMany
   */
  export type VehiculoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehiculos.
     */
    data: XOR<VehiculoUpdateManyMutationInput, VehiculoUncheckedUpdateManyInput>
    /**
     * Filter which Vehiculos to update
     */
    where?: VehiculoWhereInput
    /**
     * Limit how many Vehiculos to update.
     */
    limit?: number
  }

  /**
   * Vehiculo updateManyAndReturn
   */
  export type VehiculoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * The data used to update Vehiculos.
     */
    data: XOR<VehiculoUpdateManyMutationInput, VehiculoUncheckedUpdateManyInput>
    /**
     * Filter which Vehiculos to update
     */
    where?: VehiculoWhereInput
    /**
     * Limit how many Vehiculos to update.
     */
    limit?: number
  }

  /**
   * Vehiculo upsert
   */
  export type VehiculoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehiculo to update in case it exists.
     */
    where: VehiculoWhereUniqueInput
    /**
     * In case the Vehiculo found by the `where` argument doesn't exist, create a new Vehiculo with this data.
     */
    create: XOR<VehiculoCreateInput, VehiculoUncheckedCreateInput>
    /**
     * In case the Vehiculo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehiculoUpdateInput, VehiculoUncheckedUpdateInput>
  }

  /**
   * Vehiculo delete
   */
  export type VehiculoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter which Vehiculo to delete.
     */
    where: VehiculoWhereUniqueInput
  }

  /**
   * Vehiculo deleteMany
   */
  export type VehiculoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehiculos to delete
     */
    where?: VehiculoWhereInput
    /**
     * Limit how many Vehiculos to delete.
     */
    limit?: number
  }

  /**
   * Vehiculo.reservas
   */
  export type Vehiculo$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    cursor?: ReservaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Vehiculo.mantenimientos
   */
  export type Vehiculo$mantenimientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mantenimiento
     */
    select?: MantenimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mantenimiento
     */
    omit?: MantenimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MantenimientoInclude<ExtArgs> | null
    where?: MantenimientoWhereInput
    orderBy?: MantenimientoOrderByWithRelationInput | MantenimientoOrderByWithRelationInput[]
    cursor?: MantenimientoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MantenimientoScalarFieldEnum | MantenimientoScalarFieldEnum[]
  }

  /**
   * Vehiculo without action
   */
  export type VehiculoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id: number | null
    nombres: string | null
    apellidos: string | null
    documentoIdentidad: string | null
    licenciaConduccion: string | null
    correo: string | null
    telefono: string | null
    direccion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: number | null
    nombres: string | null
    apellidos: string | null
    documentoIdentidad: string | null
    licenciaConduccion: string | null
    correo: string | null
    telefono: string | null
    direccion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nombres: number
    apellidos: number
    documentoIdentidad: number
    licenciaConduccion: number
    correo: number
    telefono: number
    direccion: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id?: true
  }

  export type ClienteSumAggregateInputType = {
    id?: true
  }

  export type ClienteMinAggregateInputType = {
    id?: true
    nombres?: true
    apellidos?: true
    documentoIdentidad?: true
    licenciaConduccion?: true
    correo?: true
    telefono?: true
    direccion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nombres?: true
    apellidos?: true
    documentoIdentidad?: true
    licenciaConduccion?: true
    correo?: true
    telefono?: true
    direccion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nombres?: true
    apellidos?: true
    documentoIdentidad?: true
    licenciaConduccion?: true
    correo?: true
    telefono?: true
    direccion?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: number
    nombres: string
    apellidos: string
    documentoIdentidad: string
    licenciaConduccion: string
    correo: string
    telefono: string
    direccion: string | null
    createdAt: Date
    updatedAt: Date
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombres?: boolean
    apellidos?: boolean
    documentoIdentidad?: boolean
    licenciaConduccion?: boolean
    correo?: boolean
    telefono?: boolean
    direccion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reservas?: boolean | Cliente$reservasArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombres?: boolean
    apellidos?: boolean
    documentoIdentidad?: boolean
    licenciaConduccion?: boolean
    correo?: boolean
    telefono?: boolean
    direccion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombres?: boolean
    apellidos?: boolean
    documentoIdentidad?: boolean
    licenciaConduccion?: boolean
    correo?: boolean
    telefono?: boolean
    direccion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id?: boolean
    nombres?: boolean
    apellidos?: boolean
    documentoIdentidad?: boolean
    licenciaConduccion?: boolean
    correo?: boolean
    telefono?: boolean
    direccion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombres" | "apellidos" | "documentoIdentidad" | "licenciaConduccion" | "correo" | "telefono" | "direccion" | "createdAt" | "updatedAt", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | Cliente$reservasArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      reservas: Prisma.$ReservaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombres: string
      apellidos: string
      documentoIdentidad: string
      licenciaConduccion: string
      correo: string
      telefono: string
      direccion: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
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
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservas<T extends Cliente$reservasArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'Int'>
    readonly nombres: FieldRef<"Cliente", 'String'>
    readonly apellidos: FieldRef<"Cliente", 'String'>
    readonly documentoIdentidad: FieldRef<"Cliente", 'String'>
    readonly licenciaConduccion: FieldRef<"Cliente", 'String'>
    readonly correo: FieldRef<"Cliente", 'String'>
    readonly telefono: FieldRef<"Cliente", 'String'>
    readonly direccion: FieldRef<"Cliente", 'String'>
    readonly createdAt: FieldRef<"Cliente", 'DateTime'>
    readonly updatedAt: FieldRef<"Cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.reservas
   */
  export type Cliente$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    cursor?: ReservaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Reserva
   */

  export type AggregateReserva = {
    _count: ReservaCountAggregateOutputType | null
    _avg: ReservaAvgAggregateOutputType | null
    _sum: ReservaSumAggregateOutputType | null
    _min: ReservaMinAggregateOutputType | null
    _max: ReservaMaxAggregateOutputType | null
  }

  export type ReservaAvgAggregateOutputType = {
    id: number | null
    clienteId: number | null
    vehiculoId: number | null
  }

  export type ReservaSumAggregateOutputType = {
    id: number | null
    clienteId: number | null
    vehiculoId: number | null
  }

  export type ReservaMinAggregateOutputType = {
    id: number | null
    clienteId: number | null
    vehiculoId: number | null
    fechaInicio: Date | null
    fechaFin: Date | null
    estado: $Enums.EstadoReserva | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservaMaxAggregateOutputType = {
    id: number | null
    clienteId: number | null
    vehiculoId: number | null
    fechaInicio: Date | null
    fechaFin: Date | null
    estado: $Enums.EstadoReserva | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservaCountAggregateOutputType = {
    id: number
    clienteId: number
    vehiculoId: number
    fechaInicio: number
    fechaFin: number
    estado: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReservaAvgAggregateInputType = {
    id?: true
    clienteId?: true
    vehiculoId?: true
  }

  export type ReservaSumAggregateInputType = {
    id?: true
    clienteId?: true
    vehiculoId?: true
  }

  export type ReservaMinAggregateInputType = {
    id?: true
    clienteId?: true
    vehiculoId?: true
    fechaInicio?: true
    fechaFin?: true
    estado?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservaMaxAggregateInputType = {
    id?: true
    clienteId?: true
    vehiculoId?: true
    fechaInicio?: true
    fechaFin?: true
    estado?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservaCountAggregateInputType = {
    id?: true
    clienteId?: true
    vehiculoId?: true
    fechaInicio?: true
    fechaFin?: true
    estado?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReservaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reserva to aggregate.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservas
    **/
    _count?: true | ReservaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservaMaxAggregateInputType
  }

  export type GetReservaAggregateType<T extends ReservaAggregateArgs> = {
        [P in keyof T & keyof AggregateReserva]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReserva[P]>
      : GetScalarType<T[P], AggregateReserva[P]>
  }




  export type ReservaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithAggregationInput | ReservaOrderByWithAggregationInput[]
    by: ReservaScalarFieldEnum[] | ReservaScalarFieldEnum
    having?: ReservaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservaCountAggregateInputType | true
    _avg?: ReservaAvgAggregateInputType
    _sum?: ReservaSumAggregateInputType
    _min?: ReservaMinAggregateInputType
    _max?: ReservaMaxAggregateInputType
  }

  export type ReservaGroupByOutputType = {
    id: number
    clienteId: number
    vehiculoId: number
    fechaInicio: Date
    fechaFin: Date
    estado: $Enums.EstadoReserva
    createdAt: Date
    updatedAt: Date
    _count: ReservaCountAggregateOutputType | null
    _avg: ReservaAvgAggregateOutputType | null
    _sum: ReservaSumAggregateOutputType | null
    _min: ReservaMinAggregateOutputType | null
    _max: ReservaMaxAggregateOutputType | null
  }

  type GetReservaGroupByPayload<T extends ReservaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservaGroupByOutputType[P]>
            : GetScalarType<T[P], ReservaGroupByOutputType[P]>
        }
      >
    >


  export type ReservaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    vehiculoId?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
    contrato?: boolean | Reserva$contratoArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>

  export type ReservaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    vehiculoId?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>

  export type ReservaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    vehiculoId?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>

  export type ReservaSelectScalar = {
    id?: boolean
    clienteId?: boolean
    vehiculoId?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReservaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clienteId" | "vehiculoId" | "fechaInicio" | "fechaFin" | "estado" | "createdAt" | "updatedAt", ExtArgs["result"]["reserva"]>
  export type ReservaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
    contrato?: boolean | Reserva$contratoArgs<ExtArgs>
  }
  export type ReservaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
  }
  export type ReservaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
  }

  export type $ReservaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reserva"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      vehiculo: Prisma.$VehiculoPayload<ExtArgs>
      contrato: Prisma.$ContratoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clienteId: number
      vehiculoId: number
      fechaInicio: Date
      fechaFin: Date
      estado: $Enums.EstadoReserva
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reserva"]>
    composites: {}
  }

  type ReservaGetPayload<S extends boolean | null | undefined | ReservaDefaultArgs> = $Result.GetResult<Prisma.$ReservaPayload, S>

  type ReservaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservaCountAggregateInputType | true
    }

  export interface ReservaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reserva'], meta: { name: 'Reserva' } }
    /**
     * Find zero or one Reserva that matches the filter.
     * @param {ReservaFindUniqueArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservaFindUniqueArgs>(args: SelectSubset<T, ReservaFindUniqueArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reserva that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservaFindUniqueOrThrowArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservaFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reserva that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaFindFirstArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservaFindFirstArgs>(args?: SelectSubset<T, ReservaFindFirstArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reserva that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaFindFirstOrThrowArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservaFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservas
     * const reservas = await prisma.reserva.findMany()
     * 
     * // Get first 10 Reservas
     * const reservas = await prisma.reserva.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservaWithIdOnly = await prisma.reserva.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservaFindManyArgs>(args?: SelectSubset<T, ReservaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reserva.
     * @param {ReservaCreateArgs} args - Arguments to create a Reserva.
     * @example
     * // Create one Reserva
     * const Reserva = await prisma.reserva.create({
     *   data: {
     *     // ... data to create a Reserva
     *   }
     * })
     * 
     */
    create<T extends ReservaCreateArgs>(args: SelectSubset<T, ReservaCreateArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservas.
     * @param {ReservaCreateManyArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reserva = await prisma.reserva.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservaCreateManyArgs>(args?: SelectSubset<T, ReservaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservas and returns the data saved in the database.
     * @param {ReservaCreateManyAndReturnArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reserva = await prisma.reserva.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservas and only return the `id`
     * const reservaWithIdOnly = await prisma.reserva.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservaCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reserva.
     * @param {ReservaDeleteArgs} args - Arguments to delete one Reserva.
     * @example
     * // Delete one Reserva
     * const Reserva = await prisma.reserva.delete({
     *   where: {
     *     // ... filter to delete one Reserva
     *   }
     * })
     * 
     */
    delete<T extends ReservaDeleteArgs>(args: SelectSubset<T, ReservaDeleteArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reserva.
     * @param {ReservaUpdateArgs} args - Arguments to update one Reserva.
     * @example
     * // Update one Reserva
     * const reserva = await prisma.reserva.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservaUpdateArgs>(args: SelectSubset<T, ReservaUpdateArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservas.
     * @param {ReservaDeleteManyArgs} args - Arguments to filter Reservas to delete.
     * @example
     * // Delete a few Reservas
     * const { count } = await prisma.reserva.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservaDeleteManyArgs>(args?: SelectSubset<T, ReservaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservas
     * const reserva = await prisma.reserva.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservaUpdateManyArgs>(args: SelectSubset<T, ReservaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas and returns the data updated in the database.
     * @param {ReservaUpdateManyAndReturnArgs} args - Arguments to update many Reservas.
     * @example
     * // Update many Reservas
     * const reserva = await prisma.reserva.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservas and only return the `id`
     * const reservaWithIdOnly = await prisma.reserva.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReservaUpdateManyAndReturnArgs>(args: SelectSubset<T, ReservaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reserva.
     * @param {ReservaUpsertArgs} args - Arguments to update or create a Reserva.
     * @example
     * // Update or create a Reserva
     * const reserva = await prisma.reserva.upsert({
     *   create: {
     *     // ... data to create a Reserva
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reserva we want to update
     *   }
     * })
     */
    upsert<T extends ReservaUpsertArgs>(args: SelectSubset<T, ReservaUpsertArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaCountArgs} args - Arguments to filter Reservas to count.
     * @example
     * // Count the number of Reservas
     * const count = await prisma.reserva.count({
     *   where: {
     *     // ... the filter for the Reservas we want to count
     *   }
     * })
    **/
    count<T extends ReservaCountArgs>(
      args?: Subset<T, ReservaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reserva.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservaAggregateArgs>(args: Subset<T, ReservaAggregateArgs>): Prisma.PrismaPromise<GetReservaAggregateType<T>>

    /**
     * Group by Reserva.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaGroupByArgs} args - Group by arguments.
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
      T extends ReservaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservaGroupByArgs['orderBy'] }
        : { orderBy?: ReservaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReservaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reserva model
   */
  readonly fields: ReservaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reserva.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vehiculo<T extends VehiculoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehiculoDefaultArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contrato<T extends Reserva$contratoArgs<ExtArgs> = {}>(args?: Subset<T, Reserva$contratoArgs<ExtArgs>>): Prisma__ContratoClient<$Result.GetResult<Prisma.$ContratoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reserva model
   */
  interface ReservaFieldRefs {
    readonly id: FieldRef<"Reserva", 'Int'>
    readonly clienteId: FieldRef<"Reserva", 'Int'>
    readonly vehiculoId: FieldRef<"Reserva", 'Int'>
    readonly fechaInicio: FieldRef<"Reserva", 'DateTime'>
    readonly fechaFin: FieldRef<"Reserva", 'DateTime'>
    readonly estado: FieldRef<"Reserva", 'EstadoReserva'>
    readonly createdAt: FieldRef<"Reserva", 'DateTime'>
    readonly updatedAt: FieldRef<"Reserva", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reserva findUnique
   */
  export type ReservaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva findUniqueOrThrow
   */
  export type ReservaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva findFirst
   */
  export type ReservaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservas.
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservas.
     */
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Reserva findFirstOrThrow
   */
  export type ReservaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservas.
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservas.
     */
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Reserva findMany
   */
  export type ReservaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reservas to fetch.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservas.
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservas.
     */
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Reserva create
   */
  export type ReservaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * The data needed to create a Reserva.
     */
    data: XOR<ReservaCreateInput, ReservaUncheckedCreateInput>
  }

  /**
   * Reserva createMany
   */
  export type ReservaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservas.
     */
    data: ReservaCreateManyInput | ReservaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reserva createManyAndReturn
   */
  export type ReservaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * The data used to create many Reservas.
     */
    data: ReservaCreateManyInput | ReservaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reserva update
   */
  export type ReservaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * The data needed to update a Reserva.
     */
    data: XOR<ReservaUpdateInput, ReservaUncheckedUpdateInput>
    /**
     * Choose, which Reserva to update.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva updateMany
   */
  export type ReservaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservas.
     */
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyInput>
    /**
     * Filter which Reservas to update
     */
    where?: ReservaWhereInput
    /**
     * Limit how many Reservas to update.
     */
    limit?: number
  }

  /**
   * Reserva updateManyAndReturn
   */
  export type ReservaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * The data used to update Reservas.
     */
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyInput>
    /**
     * Filter which Reservas to update
     */
    where?: ReservaWhereInput
    /**
     * Limit how many Reservas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reserva upsert
   */
  export type ReservaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * The filter to search for the Reserva to update in case it exists.
     */
    where: ReservaWhereUniqueInput
    /**
     * In case the Reserva found by the `where` argument doesn't exist, create a new Reserva with this data.
     */
    create: XOR<ReservaCreateInput, ReservaUncheckedCreateInput>
    /**
     * In case the Reserva was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservaUpdateInput, ReservaUncheckedUpdateInput>
  }

  /**
   * Reserva delete
   */
  export type ReservaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter which Reserva to delete.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva deleteMany
   */
  export type ReservaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservas to delete
     */
    where?: ReservaWhereInput
    /**
     * Limit how many Reservas to delete.
     */
    limit?: number
  }

  /**
   * Reserva.contrato
   */
  export type Reserva$contratoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrato
     */
    select?: ContratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contrato
     */
    omit?: ContratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratoInclude<ExtArgs> | null
    where?: ContratoWhereInput
  }

  /**
   * Reserva without action
   */
  export type ReservaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
  }


  /**
   * Model Contrato
   */

  export type AggregateContrato = {
    _count: ContratoCountAggregateOutputType | null
    _avg: ContratoAvgAggregateOutputType | null
    _sum: ContratoSumAggregateOutputType | null
    _min: ContratoMinAggregateOutputType | null
    _max: ContratoMaxAggregateOutputType | null
  }

  export type ContratoAvgAggregateOutputType = {
    id: number | null
    reservaId: number | null
    valorTotal: number | null
  }

  export type ContratoSumAggregateOutputType = {
    id: number | null
    reservaId: number | null
    valorTotal: number | null
  }

  export type ContratoMinAggregateOutputType = {
    id: number | null
    reservaId: number | null
    fechaEntrega: Date | null
    valorTotal: number | null
    condiciones: string | null
    estado: $Enums.EstadoContrato | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContratoMaxAggregateOutputType = {
    id: number | null
    reservaId: number | null
    fechaEntrega: Date | null
    valorTotal: number | null
    condiciones: string | null
    estado: $Enums.EstadoContrato | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContratoCountAggregateOutputType = {
    id: number
    reservaId: number
    fechaEntrega: number
    valorTotal: number
    condiciones: number
    estado: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContratoAvgAggregateInputType = {
    id?: true
    reservaId?: true
    valorTotal?: true
  }

  export type ContratoSumAggregateInputType = {
    id?: true
    reservaId?: true
    valorTotal?: true
  }

  export type ContratoMinAggregateInputType = {
    id?: true
    reservaId?: true
    fechaEntrega?: true
    valorTotal?: true
    condiciones?: true
    estado?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContratoMaxAggregateInputType = {
    id?: true
    reservaId?: true
    fechaEntrega?: true
    valorTotal?: true
    condiciones?: true
    estado?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContratoCountAggregateInputType = {
    id?: true
    reservaId?: true
    fechaEntrega?: true
    valorTotal?: true
    condiciones?: true
    estado?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContratoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contrato to aggregate.
     */
    where?: ContratoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contratoes to fetch.
     */
    orderBy?: ContratoOrderByWithRelationInput | ContratoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContratoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contratoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contratoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contratoes
    **/
    _count?: true | ContratoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContratoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContratoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContratoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContratoMaxAggregateInputType
  }

  export type GetContratoAggregateType<T extends ContratoAggregateArgs> = {
        [P in keyof T & keyof AggregateContrato]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContrato[P]>
      : GetScalarType<T[P], AggregateContrato[P]>
  }




  export type ContratoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContratoWhereInput
    orderBy?: ContratoOrderByWithAggregationInput | ContratoOrderByWithAggregationInput[]
    by: ContratoScalarFieldEnum[] | ContratoScalarFieldEnum
    having?: ContratoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContratoCountAggregateInputType | true
    _avg?: ContratoAvgAggregateInputType
    _sum?: ContratoSumAggregateInputType
    _min?: ContratoMinAggregateInputType
    _max?: ContratoMaxAggregateInputType
  }

  export type ContratoGroupByOutputType = {
    id: number
    reservaId: number
    fechaEntrega: Date
    valorTotal: number
    condiciones: string | null
    estado: $Enums.EstadoContrato
    createdAt: Date
    updatedAt: Date
    _count: ContratoCountAggregateOutputType | null
    _avg: ContratoAvgAggregateOutputType | null
    _sum: ContratoSumAggregateOutputType | null
    _min: ContratoMinAggregateOutputType | null
    _max: ContratoMaxAggregateOutputType | null
  }

  type GetContratoGroupByPayload<T extends ContratoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContratoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContratoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContratoGroupByOutputType[P]>
            : GetScalarType<T[P], ContratoGroupByOutputType[P]>
        }
      >
    >


  export type ContratoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservaId?: boolean
    fechaEntrega?: boolean
    valorTotal?: boolean
    condiciones?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reserva?: boolean | ReservaDefaultArgs<ExtArgs>
    devolucion?: boolean | Contrato$devolucionArgs<ExtArgs>
  }, ExtArgs["result"]["contrato"]>

  export type ContratoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservaId?: boolean
    fechaEntrega?: boolean
    valorTotal?: boolean
    condiciones?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reserva?: boolean | ReservaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contrato"]>

  export type ContratoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservaId?: boolean
    fechaEntrega?: boolean
    valorTotal?: boolean
    condiciones?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reserva?: boolean | ReservaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contrato"]>

  export type ContratoSelectScalar = {
    id?: boolean
    reservaId?: boolean
    fechaEntrega?: boolean
    valorTotal?: boolean
    condiciones?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContratoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reservaId" | "fechaEntrega" | "valorTotal" | "condiciones" | "estado" | "createdAt" | "updatedAt", ExtArgs["result"]["contrato"]>
  export type ContratoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | ReservaDefaultArgs<ExtArgs>
    devolucion?: boolean | Contrato$devolucionArgs<ExtArgs>
  }
  export type ContratoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | ReservaDefaultArgs<ExtArgs>
  }
  export type ContratoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | ReservaDefaultArgs<ExtArgs>
  }

  export type $ContratoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contrato"
    objects: {
      reserva: Prisma.$ReservaPayload<ExtArgs>
      devolucion: Prisma.$DevolucionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reservaId: number
      fechaEntrega: Date
      valorTotal: number
      condiciones: string | null
      estado: $Enums.EstadoContrato
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contrato"]>
    composites: {}
  }

  type ContratoGetPayload<S extends boolean | null | undefined | ContratoDefaultArgs> = $Result.GetResult<Prisma.$ContratoPayload, S>

  type ContratoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContratoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContratoCountAggregateInputType | true
    }

  export interface ContratoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contrato'], meta: { name: 'Contrato' } }
    /**
     * Find zero or one Contrato that matches the filter.
     * @param {ContratoFindUniqueArgs} args - Arguments to find a Contrato
     * @example
     * // Get one Contrato
     * const contrato = await prisma.contrato.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContratoFindUniqueArgs>(args: SelectSubset<T, ContratoFindUniqueArgs<ExtArgs>>): Prisma__ContratoClient<$Result.GetResult<Prisma.$ContratoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contrato that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContratoFindUniqueOrThrowArgs} args - Arguments to find a Contrato
     * @example
     * // Get one Contrato
     * const contrato = await prisma.contrato.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContratoFindUniqueOrThrowArgs>(args: SelectSubset<T, ContratoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContratoClient<$Result.GetResult<Prisma.$ContratoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contrato that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratoFindFirstArgs} args - Arguments to find a Contrato
     * @example
     * // Get one Contrato
     * const contrato = await prisma.contrato.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContratoFindFirstArgs>(args?: SelectSubset<T, ContratoFindFirstArgs<ExtArgs>>): Prisma__ContratoClient<$Result.GetResult<Prisma.$ContratoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contrato that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratoFindFirstOrThrowArgs} args - Arguments to find a Contrato
     * @example
     * // Get one Contrato
     * const contrato = await prisma.contrato.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContratoFindFirstOrThrowArgs>(args?: SelectSubset<T, ContratoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContratoClient<$Result.GetResult<Prisma.$ContratoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contratoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contratoes
     * const contratoes = await prisma.contrato.findMany()
     * 
     * // Get first 10 Contratoes
     * const contratoes = await prisma.contrato.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contratoWithIdOnly = await prisma.contrato.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContratoFindManyArgs>(args?: SelectSubset<T, ContratoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContratoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contrato.
     * @param {ContratoCreateArgs} args - Arguments to create a Contrato.
     * @example
     * // Create one Contrato
     * const Contrato = await prisma.contrato.create({
     *   data: {
     *     // ... data to create a Contrato
     *   }
     * })
     * 
     */
    create<T extends ContratoCreateArgs>(args: SelectSubset<T, ContratoCreateArgs<ExtArgs>>): Prisma__ContratoClient<$Result.GetResult<Prisma.$ContratoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contratoes.
     * @param {ContratoCreateManyArgs} args - Arguments to create many Contratoes.
     * @example
     * // Create many Contratoes
     * const contrato = await prisma.contrato.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContratoCreateManyArgs>(args?: SelectSubset<T, ContratoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contratoes and returns the data saved in the database.
     * @param {ContratoCreateManyAndReturnArgs} args - Arguments to create many Contratoes.
     * @example
     * // Create many Contratoes
     * const contrato = await prisma.contrato.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contratoes and only return the `id`
     * const contratoWithIdOnly = await prisma.contrato.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContratoCreateManyAndReturnArgs>(args?: SelectSubset<T, ContratoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContratoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contrato.
     * @param {ContratoDeleteArgs} args - Arguments to delete one Contrato.
     * @example
     * // Delete one Contrato
     * const Contrato = await prisma.contrato.delete({
     *   where: {
     *     // ... filter to delete one Contrato
     *   }
     * })
     * 
     */
    delete<T extends ContratoDeleteArgs>(args: SelectSubset<T, ContratoDeleteArgs<ExtArgs>>): Prisma__ContratoClient<$Result.GetResult<Prisma.$ContratoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contrato.
     * @param {ContratoUpdateArgs} args - Arguments to update one Contrato.
     * @example
     * // Update one Contrato
     * const contrato = await prisma.contrato.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContratoUpdateArgs>(args: SelectSubset<T, ContratoUpdateArgs<ExtArgs>>): Prisma__ContratoClient<$Result.GetResult<Prisma.$ContratoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contratoes.
     * @param {ContratoDeleteManyArgs} args - Arguments to filter Contratoes to delete.
     * @example
     * // Delete a few Contratoes
     * const { count } = await prisma.contrato.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContratoDeleteManyArgs>(args?: SelectSubset<T, ContratoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contratoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contratoes
     * const contrato = await prisma.contrato.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContratoUpdateManyArgs>(args: SelectSubset<T, ContratoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contratoes and returns the data updated in the database.
     * @param {ContratoUpdateManyAndReturnArgs} args - Arguments to update many Contratoes.
     * @example
     * // Update many Contratoes
     * const contrato = await prisma.contrato.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contratoes and only return the `id`
     * const contratoWithIdOnly = await prisma.contrato.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContratoUpdateManyAndReturnArgs>(args: SelectSubset<T, ContratoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContratoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contrato.
     * @param {ContratoUpsertArgs} args - Arguments to update or create a Contrato.
     * @example
     * // Update or create a Contrato
     * const contrato = await prisma.contrato.upsert({
     *   create: {
     *     // ... data to create a Contrato
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contrato we want to update
     *   }
     * })
     */
    upsert<T extends ContratoUpsertArgs>(args: SelectSubset<T, ContratoUpsertArgs<ExtArgs>>): Prisma__ContratoClient<$Result.GetResult<Prisma.$ContratoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contratoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratoCountArgs} args - Arguments to filter Contratoes to count.
     * @example
     * // Count the number of Contratoes
     * const count = await prisma.contrato.count({
     *   where: {
     *     // ... the filter for the Contratoes we want to count
     *   }
     * })
    **/
    count<T extends ContratoCountArgs>(
      args?: Subset<T, ContratoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContratoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contrato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContratoAggregateArgs>(args: Subset<T, ContratoAggregateArgs>): Prisma.PrismaPromise<GetContratoAggregateType<T>>

    /**
     * Group by Contrato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratoGroupByArgs} args - Group by arguments.
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
      T extends ContratoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContratoGroupByArgs['orderBy'] }
        : { orderBy?: ContratoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContratoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContratoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contrato model
   */
  readonly fields: ContratoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contrato.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContratoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reserva<T extends ReservaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReservaDefaultArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    devolucion<T extends Contrato$devolucionArgs<ExtArgs> = {}>(args?: Subset<T, Contrato$devolucionArgs<ExtArgs>>): Prisma__DevolucionClient<$Result.GetResult<Prisma.$DevolucionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Contrato model
   */
  interface ContratoFieldRefs {
    readonly id: FieldRef<"Contrato", 'Int'>
    readonly reservaId: FieldRef<"Contrato", 'Int'>
    readonly fechaEntrega: FieldRef<"Contrato", 'DateTime'>
    readonly valorTotal: FieldRef<"Contrato", 'Float'>
    readonly condiciones: FieldRef<"Contrato", 'String'>
    readonly estado: FieldRef<"Contrato", 'EstadoContrato'>
    readonly createdAt: FieldRef<"Contrato", 'DateTime'>
    readonly updatedAt: FieldRef<"Contrato", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contrato findUnique
   */
  export type ContratoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrato
     */
    select?: ContratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contrato
     */
    omit?: ContratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratoInclude<ExtArgs> | null
    /**
     * Filter, which Contrato to fetch.
     */
    where: ContratoWhereUniqueInput
  }

  /**
   * Contrato findUniqueOrThrow
   */
  export type ContratoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrato
     */
    select?: ContratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contrato
     */
    omit?: ContratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratoInclude<ExtArgs> | null
    /**
     * Filter, which Contrato to fetch.
     */
    where: ContratoWhereUniqueInput
  }

  /**
   * Contrato findFirst
   */
  export type ContratoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrato
     */
    select?: ContratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contrato
     */
    omit?: ContratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratoInclude<ExtArgs> | null
    /**
     * Filter, which Contrato to fetch.
     */
    where?: ContratoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contratoes to fetch.
     */
    orderBy?: ContratoOrderByWithRelationInput | ContratoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contratoes.
     */
    cursor?: ContratoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contratoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contratoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contratoes.
     */
    distinct?: ContratoScalarFieldEnum | ContratoScalarFieldEnum[]
  }

  /**
   * Contrato findFirstOrThrow
   */
  export type ContratoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrato
     */
    select?: ContratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contrato
     */
    omit?: ContratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratoInclude<ExtArgs> | null
    /**
     * Filter, which Contrato to fetch.
     */
    where?: ContratoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contratoes to fetch.
     */
    orderBy?: ContratoOrderByWithRelationInput | ContratoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contratoes.
     */
    cursor?: ContratoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contratoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contratoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contratoes.
     */
    distinct?: ContratoScalarFieldEnum | ContratoScalarFieldEnum[]
  }

  /**
   * Contrato findMany
   */
  export type ContratoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrato
     */
    select?: ContratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contrato
     */
    omit?: ContratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratoInclude<ExtArgs> | null
    /**
     * Filter, which Contratoes to fetch.
     */
    where?: ContratoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contratoes to fetch.
     */
    orderBy?: ContratoOrderByWithRelationInput | ContratoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contratoes.
     */
    cursor?: ContratoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contratoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contratoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contratoes.
     */
    distinct?: ContratoScalarFieldEnum | ContratoScalarFieldEnum[]
  }

  /**
   * Contrato create
   */
  export type ContratoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrato
     */
    select?: ContratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contrato
     */
    omit?: ContratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratoInclude<ExtArgs> | null
    /**
     * The data needed to create a Contrato.
     */
    data: XOR<ContratoCreateInput, ContratoUncheckedCreateInput>
  }

  /**
   * Contrato createMany
   */
  export type ContratoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contratoes.
     */
    data: ContratoCreateManyInput | ContratoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contrato createManyAndReturn
   */
  export type ContratoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrato
     */
    select?: ContratoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contrato
     */
    omit?: ContratoOmit<ExtArgs> | null
    /**
     * The data used to create many Contratoes.
     */
    data: ContratoCreateManyInput | ContratoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contrato update
   */
  export type ContratoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrato
     */
    select?: ContratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contrato
     */
    omit?: ContratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratoInclude<ExtArgs> | null
    /**
     * The data needed to update a Contrato.
     */
    data: XOR<ContratoUpdateInput, ContratoUncheckedUpdateInput>
    /**
     * Choose, which Contrato to update.
     */
    where: ContratoWhereUniqueInput
  }

  /**
   * Contrato updateMany
   */
  export type ContratoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contratoes.
     */
    data: XOR<ContratoUpdateManyMutationInput, ContratoUncheckedUpdateManyInput>
    /**
     * Filter which Contratoes to update
     */
    where?: ContratoWhereInput
    /**
     * Limit how many Contratoes to update.
     */
    limit?: number
  }

  /**
   * Contrato updateManyAndReturn
   */
  export type ContratoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrato
     */
    select?: ContratoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contrato
     */
    omit?: ContratoOmit<ExtArgs> | null
    /**
     * The data used to update Contratoes.
     */
    data: XOR<ContratoUpdateManyMutationInput, ContratoUncheckedUpdateManyInput>
    /**
     * Filter which Contratoes to update
     */
    where?: ContratoWhereInput
    /**
     * Limit how many Contratoes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contrato upsert
   */
  export type ContratoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrato
     */
    select?: ContratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contrato
     */
    omit?: ContratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratoInclude<ExtArgs> | null
    /**
     * The filter to search for the Contrato to update in case it exists.
     */
    where: ContratoWhereUniqueInput
    /**
     * In case the Contrato found by the `where` argument doesn't exist, create a new Contrato with this data.
     */
    create: XOR<ContratoCreateInput, ContratoUncheckedCreateInput>
    /**
     * In case the Contrato was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContratoUpdateInput, ContratoUncheckedUpdateInput>
  }

  /**
   * Contrato delete
   */
  export type ContratoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrato
     */
    select?: ContratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contrato
     */
    omit?: ContratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratoInclude<ExtArgs> | null
    /**
     * Filter which Contrato to delete.
     */
    where: ContratoWhereUniqueInput
  }

  /**
   * Contrato deleteMany
   */
  export type ContratoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contratoes to delete
     */
    where?: ContratoWhereInput
    /**
     * Limit how many Contratoes to delete.
     */
    limit?: number
  }

  /**
   * Contrato.devolucion
   */
  export type Contrato$devolucionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucion
     */
    select?: DevolucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucion
     */
    omit?: DevolucionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucionInclude<ExtArgs> | null
    where?: DevolucionWhereInput
  }

  /**
   * Contrato without action
   */
  export type ContratoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contrato
     */
    select?: ContratoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contrato
     */
    omit?: ContratoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContratoInclude<ExtArgs> | null
  }


  /**
   * Model Devolucion
   */

  export type AggregateDevolucion = {
    _count: DevolucionCountAggregateOutputType | null
    _avg: DevolucionAvgAggregateOutputType | null
    _sum: DevolucionSumAggregateOutputType | null
    _min: DevolucionMinAggregateOutputType | null
    _max: DevolucionMaxAggregateOutputType | null
  }

  export type DevolucionAvgAggregateOutputType = {
    id: number | null
    contratoId: number | null
    kilometrajeRetorno: number | null
    cargosAdicionales: number | null
  }

  export type DevolucionSumAggregateOutputType = {
    id: number | null
    contratoId: number | null
    kilometrajeRetorno: number | null
    cargosAdicionales: number | null
  }

  export type DevolucionMinAggregateOutputType = {
    id: number | null
    contratoId: number | null
    fechaDevolucion: Date | null
    estadoVehiculo: string | null
    kilometrajeRetorno: number | null
    cargosAdicionales: number | null
    observaciones: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DevolucionMaxAggregateOutputType = {
    id: number | null
    contratoId: number | null
    fechaDevolucion: Date | null
    estadoVehiculo: string | null
    kilometrajeRetorno: number | null
    cargosAdicionales: number | null
    observaciones: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DevolucionCountAggregateOutputType = {
    id: number
    contratoId: number
    fechaDevolucion: number
    estadoVehiculo: number
    kilometrajeRetorno: number
    cargosAdicionales: number
    observaciones: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DevolucionAvgAggregateInputType = {
    id?: true
    contratoId?: true
    kilometrajeRetorno?: true
    cargosAdicionales?: true
  }

  export type DevolucionSumAggregateInputType = {
    id?: true
    contratoId?: true
    kilometrajeRetorno?: true
    cargosAdicionales?: true
  }

  export type DevolucionMinAggregateInputType = {
    id?: true
    contratoId?: true
    fechaDevolucion?: true
    estadoVehiculo?: true
    kilometrajeRetorno?: true
    cargosAdicionales?: true
    observaciones?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DevolucionMaxAggregateInputType = {
    id?: true
    contratoId?: true
    fechaDevolucion?: true
    estadoVehiculo?: true
    kilometrajeRetorno?: true
    cargosAdicionales?: true
    observaciones?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DevolucionCountAggregateInputType = {
    id?: true
    contratoId?: true
    fechaDevolucion?: true
    estadoVehiculo?: true
    kilometrajeRetorno?: true
    cargosAdicionales?: true
    observaciones?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DevolucionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devolucion to aggregate.
     */
    where?: DevolucionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devolucions to fetch.
     */
    orderBy?: DevolucionOrderByWithRelationInput | DevolucionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DevolucionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devolucions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devolucions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devolucions
    **/
    _count?: true | DevolucionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DevolucionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DevolucionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DevolucionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DevolucionMaxAggregateInputType
  }

  export type GetDevolucionAggregateType<T extends DevolucionAggregateArgs> = {
        [P in keyof T & keyof AggregateDevolucion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevolucion[P]>
      : GetScalarType<T[P], AggregateDevolucion[P]>
  }




  export type DevolucionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DevolucionWhereInput
    orderBy?: DevolucionOrderByWithAggregationInput | DevolucionOrderByWithAggregationInput[]
    by: DevolucionScalarFieldEnum[] | DevolucionScalarFieldEnum
    having?: DevolucionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DevolucionCountAggregateInputType | true
    _avg?: DevolucionAvgAggregateInputType
    _sum?: DevolucionSumAggregateInputType
    _min?: DevolucionMinAggregateInputType
    _max?: DevolucionMaxAggregateInputType
  }

  export type DevolucionGroupByOutputType = {
    id: number
    contratoId: number
    fechaDevolucion: Date
    estadoVehiculo: string
    kilometrajeRetorno: number
    cargosAdicionales: number
    observaciones: string | null
    createdAt: Date
    updatedAt: Date
    _count: DevolucionCountAggregateOutputType | null
    _avg: DevolucionAvgAggregateOutputType | null
    _sum: DevolucionSumAggregateOutputType | null
    _min: DevolucionMinAggregateOutputType | null
    _max: DevolucionMaxAggregateOutputType | null
  }

  type GetDevolucionGroupByPayload<T extends DevolucionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DevolucionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DevolucionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DevolucionGroupByOutputType[P]>
            : GetScalarType<T[P], DevolucionGroupByOutputType[P]>
        }
      >
    >


  export type DevolucionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contratoId?: boolean
    fechaDevolucion?: boolean
    estadoVehiculo?: boolean
    kilometrajeRetorno?: boolean
    cargosAdicionales?: boolean
    observaciones?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contrato?: boolean | ContratoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["devolucion"]>

  export type DevolucionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contratoId?: boolean
    fechaDevolucion?: boolean
    estadoVehiculo?: boolean
    kilometrajeRetorno?: boolean
    cargosAdicionales?: boolean
    observaciones?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contrato?: boolean | ContratoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["devolucion"]>

  export type DevolucionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contratoId?: boolean
    fechaDevolucion?: boolean
    estadoVehiculo?: boolean
    kilometrajeRetorno?: boolean
    cargosAdicionales?: boolean
    observaciones?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contrato?: boolean | ContratoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["devolucion"]>

  export type DevolucionSelectScalar = {
    id?: boolean
    contratoId?: boolean
    fechaDevolucion?: boolean
    estadoVehiculo?: boolean
    kilometrajeRetorno?: boolean
    cargosAdicionales?: boolean
    observaciones?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DevolucionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contratoId" | "fechaDevolucion" | "estadoVehiculo" | "kilometrajeRetorno" | "cargosAdicionales" | "observaciones" | "createdAt" | "updatedAt", ExtArgs["result"]["devolucion"]>
  export type DevolucionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contrato?: boolean | ContratoDefaultArgs<ExtArgs>
  }
  export type DevolucionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contrato?: boolean | ContratoDefaultArgs<ExtArgs>
  }
  export type DevolucionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contrato?: boolean | ContratoDefaultArgs<ExtArgs>
  }

  export type $DevolucionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Devolucion"
    objects: {
      contrato: Prisma.$ContratoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      contratoId: number
      fechaDevolucion: Date
      estadoVehiculo: string
      kilometrajeRetorno: number
      cargosAdicionales: number
      observaciones: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["devolucion"]>
    composites: {}
  }

  type DevolucionGetPayload<S extends boolean | null | undefined | DevolucionDefaultArgs> = $Result.GetResult<Prisma.$DevolucionPayload, S>

  type DevolucionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DevolucionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DevolucionCountAggregateInputType | true
    }

  export interface DevolucionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Devolucion'], meta: { name: 'Devolucion' } }
    /**
     * Find zero or one Devolucion that matches the filter.
     * @param {DevolucionFindUniqueArgs} args - Arguments to find a Devolucion
     * @example
     * // Get one Devolucion
     * const devolucion = await prisma.devolucion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DevolucionFindUniqueArgs>(args: SelectSubset<T, DevolucionFindUniqueArgs<ExtArgs>>): Prisma__DevolucionClient<$Result.GetResult<Prisma.$DevolucionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Devolucion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DevolucionFindUniqueOrThrowArgs} args - Arguments to find a Devolucion
     * @example
     * // Get one Devolucion
     * const devolucion = await prisma.devolucion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DevolucionFindUniqueOrThrowArgs>(args: SelectSubset<T, DevolucionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DevolucionClient<$Result.GetResult<Prisma.$DevolucionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Devolucion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevolucionFindFirstArgs} args - Arguments to find a Devolucion
     * @example
     * // Get one Devolucion
     * const devolucion = await prisma.devolucion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DevolucionFindFirstArgs>(args?: SelectSubset<T, DevolucionFindFirstArgs<ExtArgs>>): Prisma__DevolucionClient<$Result.GetResult<Prisma.$DevolucionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Devolucion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevolucionFindFirstOrThrowArgs} args - Arguments to find a Devolucion
     * @example
     * // Get one Devolucion
     * const devolucion = await prisma.devolucion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DevolucionFindFirstOrThrowArgs>(args?: SelectSubset<T, DevolucionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DevolucionClient<$Result.GetResult<Prisma.$DevolucionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devolucions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevolucionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devolucions
     * const devolucions = await prisma.devolucion.findMany()
     * 
     * // Get first 10 Devolucions
     * const devolucions = await prisma.devolucion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const devolucionWithIdOnly = await prisma.devolucion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DevolucionFindManyArgs>(args?: SelectSubset<T, DevolucionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevolucionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Devolucion.
     * @param {DevolucionCreateArgs} args - Arguments to create a Devolucion.
     * @example
     * // Create one Devolucion
     * const Devolucion = await prisma.devolucion.create({
     *   data: {
     *     // ... data to create a Devolucion
     *   }
     * })
     * 
     */
    create<T extends DevolucionCreateArgs>(args: SelectSubset<T, DevolucionCreateArgs<ExtArgs>>): Prisma__DevolucionClient<$Result.GetResult<Prisma.$DevolucionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devolucions.
     * @param {DevolucionCreateManyArgs} args - Arguments to create many Devolucions.
     * @example
     * // Create many Devolucions
     * const devolucion = await prisma.devolucion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DevolucionCreateManyArgs>(args?: SelectSubset<T, DevolucionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devolucions and returns the data saved in the database.
     * @param {DevolucionCreateManyAndReturnArgs} args - Arguments to create many Devolucions.
     * @example
     * // Create many Devolucions
     * const devolucion = await prisma.devolucion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devolucions and only return the `id`
     * const devolucionWithIdOnly = await prisma.devolucion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DevolucionCreateManyAndReturnArgs>(args?: SelectSubset<T, DevolucionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevolucionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Devolucion.
     * @param {DevolucionDeleteArgs} args - Arguments to delete one Devolucion.
     * @example
     * // Delete one Devolucion
     * const Devolucion = await prisma.devolucion.delete({
     *   where: {
     *     // ... filter to delete one Devolucion
     *   }
     * })
     * 
     */
    delete<T extends DevolucionDeleteArgs>(args: SelectSubset<T, DevolucionDeleteArgs<ExtArgs>>): Prisma__DevolucionClient<$Result.GetResult<Prisma.$DevolucionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Devolucion.
     * @param {DevolucionUpdateArgs} args - Arguments to update one Devolucion.
     * @example
     * // Update one Devolucion
     * const devolucion = await prisma.devolucion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DevolucionUpdateArgs>(args: SelectSubset<T, DevolucionUpdateArgs<ExtArgs>>): Prisma__DevolucionClient<$Result.GetResult<Prisma.$DevolucionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devolucions.
     * @param {DevolucionDeleteManyArgs} args - Arguments to filter Devolucions to delete.
     * @example
     * // Delete a few Devolucions
     * const { count } = await prisma.devolucion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DevolucionDeleteManyArgs>(args?: SelectSubset<T, DevolucionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devolucions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevolucionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devolucions
     * const devolucion = await prisma.devolucion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DevolucionUpdateManyArgs>(args: SelectSubset<T, DevolucionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devolucions and returns the data updated in the database.
     * @param {DevolucionUpdateManyAndReturnArgs} args - Arguments to update many Devolucions.
     * @example
     * // Update many Devolucions
     * const devolucion = await prisma.devolucion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Devolucions and only return the `id`
     * const devolucionWithIdOnly = await prisma.devolucion.updateManyAndReturn({
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
    updateManyAndReturn<T extends DevolucionUpdateManyAndReturnArgs>(args: SelectSubset<T, DevolucionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevolucionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Devolucion.
     * @param {DevolucionUpsertArgs} args - Arguments to update or create a Devolucion.
     * @example
     * // Update or create a Devolucion
     * const devolucion = await prisma.devolucion.upsert({
     *   create: {
     *     // ... data to create a Devolucion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Devolucion we want to update
     *   }
     * })
     */
    upsert<T extends DevolucionUpsertArgs>(args: SelectSubset<T, DevolucionUpsertArgs<ExtArgs>>): Prisma__DevolucionClient<$Result.GetResult<Prisma.$DevolucionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devolucions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevolucionCountArgs} args - Arguments to filter Devolucions to count.
     * @example
     * // Count the number of Devolucions
     * const count = await prisma.devolucion.count({
     *   where: {
     *     // ... the filter for the Devolucions we want to count
     *   }
     * })
    **/
    count<T extends DevolucionCountArgs>(
      args?: Subset<T, DevolucionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DevolucionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Devolucion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevolucionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DevolucionAggregateArgs>(args: Subset<T, DevolucionAggregateArgs>): Prisma.PrismaPromise<GetDevolucionAggregateType<T>>

    /**
     * Group by Devolucion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevolucionGroupByArgs} args - Group by arguments.
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
      T extends DevolucionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DevolucionGroupByArgs['orderBy'] }
        : { orderBy?: DevolucionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DevolucionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDevolucionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Devolucion model
   */
  readonly fields: DevolucionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Devolucion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DevolucionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contrato<T extends ContratoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContratoDefaultArgs<ExtArgs>>): Prisma__ContratoClient<$Result.GetResult<Prisma.$ContratoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Devolucion model
   */
  interface DevolucionFieldRefs {
    readonly id: FieldRef<"Devolucion", 'Int'>
    readonly contratoId: FieldRef<"Devolucion", 'Int'>
    readonly fechaDevolucion: FieldRef<"Devolucion", 'DateTime'>
    readonly estadoVehiculo: FieldRef<"Devolucion", 'String'>
    readonly kilometrajeRetorno: FieldRef<"Devolucion", 'Int'>
    readonly cargosAdicionales: FieldRef<"Devolucion", 'Float'>
    readonly observaciones: FieldRef<"Devolucion", 'String'>
    readonly createdAt: FieldRef<"Devolucion", 'DateTime'>
    readonly updatedAt: FieldRef<"Devolucion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Devolucion findUnique
   */
  export type DevolucionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucion
     */
    select?: DevolucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucion
     */
    omit?: DevolucionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucionInclude<ExtArgs> | null
    /**
     * Filter, which Devolucion to fetch.
     */
    where: DevolucionWhereUniqueInput
  }

  /**
   * Devolucion findUniqueOrThrow
   */
  export type DevolucionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucion
     */
    select?: DevolucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucion
     */
    omit?: DevolucionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucionInclude<ExtArgs> | null
    /**
     * Filter, which Devolucion to fetch.
     */
    where: DevolucionWhereUniqueInput
  }

  /**
   * Devolucion findFirst
   */
  export type DevolucionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucion
     */
    select?: DevolucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucion
     */
    omit?: DevolucionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucionInclude<ExtArgs> | null
    /**
     * Filter, which Devolucion to fetch.
     */
    where?: DevolucionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devolucions to fetch.
     */
    orderBy?: DevolucionOrderByWithRelationInput | DevolucionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devolucions.
     */
    cursor?: DevolucionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devolucions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devolucions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devolucions.
     */
    distinct?: DevolucionScalarFieldEnum | DevolucionScalarFieldEnum[]
  }

  /**
   * Devolucion findFirstOrThrow
   */
  export type DevolucionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucion
     */
    select?: DevolucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucion
     */
    omit?: DevolucionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucionInclude<ExtArgs> | null
    /**
     * Filter, which Devolucion to fetch.
     */
    where?: DevolucionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devolucions to fetch.
     */
    orderBy?: DevolucionOrderByWithRelationInput | DevolucionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devolucions.
     */
    cursor?: DevolucionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devolucions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devolucions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devolucions.
     */
    distinct?: DevolucionScalarFieldEnum | DevolucionScalarFieldEnum[]
  }

  /**
   * Devolucion findMany
   */
  export type DevolucionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucion
     */
    select?: DevolucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucion
     */
    omit?: DevolucionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucionInclude<ExtArgs> | null
    /**
     * Filter, which Devolucions to fetch.
     */
    where?: DevolucionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devolucions to fetch.
     */
    orderBy?: DevolucionOrderByWithRelationInput | DevolucionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devolucions.
     */
    cursor?: DevolucionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devolucions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devolucions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devolucions.
     */
    distinct?: DevolucionScalarFieldEnum | DevolucionScalarFieldEnum[]
  }

  /**
   * Devolucion create
   */
  export type DevolucionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucion
     */
    select?: DevolucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucion
     */
    omit?: DevolucionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucionInclude<ExtArgs> | null
    /**
     * The data needed to create a Devolucion.
     */
    data: XOR<DevolucionCreateInput, DevolucionUncheckedCreateInput>
  }

  /**
   * Devolucion createMany
   */
  export type DevolucionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devolucions.
     */
    data: DevolucionCreateManyInput | DevolucionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Devolucion createManyAndReturn
   */
  export type DevolucionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucion
     */
    select?: DevolucionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucion
     */
    omit?: DevolucionOmit<ExtArgs> | null
    /**
     * The data used to create many Devolucions.
     */
    data: DevolucionCreateManyInput | DevolucionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Devolucion update
   */
  export type DevolucionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucion
     */
    select?: DevolucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucion
     */
    omit?: DevolucionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucionInclude<ExtArgs> | null
    /**
     * The data needed to update a Devolucion.
     */
    data: XOR<DevolucionUpdateInput, DevolucionUncheckedUpdateInput>
    /**
     * Choose, which Devolucion to update.
     */
    where: DevolucionWhereUniqueInput
  }

  /**
   * Devolucion updateMany
   */
  export type DevolucionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devolucions.
     */
    data: XOR<DevolucionUpdateManyMutationInput, DevolucionUncheckedUpdateManyInput>
    /**
     * Filter which Devolucions to update
     */
    where?: DevolucionWhereInput
    /**
     * Limit how many Devolucions to update.
     */
    limit?: number
  }

  /**
   * Devolucion updateManyAndReturn
   */
  export type DevolucionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucion
     */
    select?: DevolucionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucion
     */
    omit?: DevolucionOmit<ExtArgs> | null
    /**
     * The data used to update Devolucions.
     */
    data: XOR<DevolucionUpdateManyMutationInput, DevolucionUncheckedUpdateManyInput>
    /**
     * Filter which Devolucions to update
     */
    where?: DevolucionWhereInput
    /**
     * Limit how many Devolucions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Devolucion upsert
   */
  export type DevolucionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucion
     */
    select?: DevolucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucion
     */
    omit?: DevolucionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucionInclude<ExtArgs> | null
    /**
     * The filter to search for the Devolucion to update in case it exists.
     */
    where: DevolucionWhereUniqueInput
    /**
     * In case the Devolucion found by the `where` argument doesn't exist, create a new Devolucion with this data.
     */
    create: XOR<DevolucionCreateInput, DevolucionUncheckedCreateInput>
    /**
     * In case the Devolucion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DevolucionUpdateInput, DevolucionUncheckedUpdateInput>
  }

  /**
   * Devolucion delete
   */
  export type DevolucionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucion
     */
    select?: DevolucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucion
     */
    omit?: DevolucionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucionInclude<ExtArgs> | null
    /**
     * Filter which Devolucion to delete.
     */
    where: DevolucionWhereUniqueInput
  }

  /**
   * Devolucion deleteMany
   */
  export type DevolucionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devolucions to delete
     */
    where?: DevolucionWhereInput
    /**
     * Limit how many Devolucions to delete.
     */
    limit?: number
  }

  /**
   * Devolucion without action
   */
  export type DevolucionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devolucion
     */
    select?: DevolucionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devolucion
     */
    omit?: DevolucionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevolucionInclude<ExtArgs> | null
  }


  /**
   * Model Mantenimiento
   */

  export type AggregateMantenimiento = {
    _count: MantenimientoCountAggregateOutputType | null
    _avg: MantenimientoAvgAggregateOutputType | null
    _sum: MantenimientoSumAggregateOutputType | null
    _min: MantenimientoMinAggregateOutputType | null
    _max: MantenimientoMaxAggregateOutputType | null
  }

  export type MantenimientoAvgAggregateOutputType = {
    id: number | null
    vehiculoId: number | null
    costo: number | null
  }

  export type MantenimientoSumAggregateOutputType = {
    id: number | null
    vehiculoId: number | null
    costo: number | null
  }

  export type MantenimientoMinAggregateOutputType = {
    id: number | null
    vehiculoId: number | null
    tipo: $Enums.TipoMantenimiento | null
    descripcion: string | null
    costo: number | null
    fecha: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MantenimientoMaxAggregateOutputType = {
    id: number | null
    vehiculoId: number | null
    tipo: $Enums.TipoMantenimiento | null
    descripcion: string | null
    costo: number | null
    fecha: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MantenimientoCountAggregateOutputType = {
    id: number
    vehiculoId: number
    tipo: number
    descripcion: number
    costo: number
    fecha: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MantenimientoAvgAggregateInputType = {
    id?: true
    vehiculoId?: true
    costo?: true
  }

  export type MantenimientoSumAggregateInputType = {
    id?: true
    vehiculoId?: true
    costo?: true
  }

  export type MantenimientoMinAggregateInputType = {
    id?: true
    vehiculoId?: true
    tipo?: true
    descripcion?: true
    costo?: true
    fecha?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MantenimientoMaxAggregateInputType = {
    id?: true
    vehiculoId?: true
    tipo?: true
    descripcion?: true
    costo?: true
    fecha?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MantenimientoCountAggregateInputType = {
    id?: true
    vehiculoId?: true
    tipo?: true
    descripcion?: true
    costo?: true
    fecha?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MantenimientoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mantenimiento to aggregate.
     */
    where?: MantenimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mantenimientos to fetch.
     */
    orderBy?: MantenimientoOrderByWithRelationInput | MantenimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MantenimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mantenimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mantenimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mantenimientos
    **/
    _count?: true | MantenimientoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MantenimientoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MantenimientoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MantenimientoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MantenimientoMaxAggregateInputType
  }

  export type GetMantenimientoAggregateType<T extends MantenimientoAggregateArgs> = {
        [P in keyof T & keyof AggregateMantenimiento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMantenimiento[P]>
      : GetScalarType<T[P], AggregateMantenimiento[P]>
  }




  export type MantenimientoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MantenimientoWhereInput
    orderBy?: MantenimientoOrderByWithAggregationInput | MantenimientoOrderByWithAggregationInput[]
    by: MantenimientoScalarFieldEnum[] | MantenimientoScalarFieldEnum
    having?: MantenimientoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MantenimientoCountAggregateInputType | true
    _avg?: MantenimientoAvgAggregateInputType
    _sum?: MantenimientoSumAggregateInputType
    _min?: MantenimientoMinAggregateInputType
    _max?: MantenimientoMaxAggregateInputType
  }

  export type MantenimientoGroupByOutputType = {
    id: number
    vehiculoId: number
    tipo: $Enums.TipoMantenimiento
    descripcion: string
    costo: number
    fecha: Date
    createdAt: Date
    updatedAt: Date
    _count: MantenimientoCountAggregateOutputType | null
    _avg: MantenimientoAvgAggregateOutputType | null
    _sum: MantenimientoSumAggregateOutputType | null
    _min: MantenimientoMinAggregateOutputType | null
    _max: MantenimientoMaxAggregateOutputType | null
  }

  type GetMantenimientoGroupByPayload<T extends MantenimientoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MantenimientoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MantenimientoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MantenimientoGroupByOutputType[P]>
            : GetScalarType<T[P], MantenimientoGroupByOutputType[P]>
        }
      >
    >


  export type MantenimientoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehiculoId?: boolean
    tipo?: boolean
    descripcion?: boolean
    costo?: boolean
    fecha?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mantenimiento"]>

  export type MantenimientoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehiculoId?: boolean
    tipo?: boolean
    descripcion?: boolean
    costo?: boolean
    fecha?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mantenimiento"]>

  export type MantenimientoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehiculoId?: boolean
    tipo?: boolean
    descripcion?: boolean
    costo?: boolean
    fecha?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mantenimiento"]>

  export type MantenimientoSelectScalar = {
    id?: boolean
    vehiculoId?: boolean
    tipo?: boolean
    descripcion?: boolean
    costo?: boolean
    fecha?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MantenimientoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehiculoId" | "tipo" | "descripcion" | "costo" | "fecha" | "createdAt" | "updatedAt", ExtArgs["result"]["mantenimiento"]>
  export type MantenimientoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
  }
  export type MantenimientoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
  }
  export type MantenimientoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
  }

  export type $MantenimientoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mantenimiento"
    objects: {
      vehiculo: Prisma.$VehiculoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      vehiculoId: number
      tipo: $Enums.TipoMantenimiento
      descripcion: string
      costo: number
      fecha: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mantenimiento"]>
    composites: {}
  }

  type MantenimientoGetPayload<S extends boolean | null | undefined | MantenimientoDefaultArgs> = $Result.GetResult<Prisma.$MantenimientoPayload, S>

  type MantenimientoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MantenimientoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MantenimientoCountAggregateInputType | true
    }

  export interface MantenimientoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mantenimiento'], meta: { name: 'Mantenimiento' } }
    /**
     * Find zero or one Mantenimiento that matches the filter.
     * @param {MantenimientoFindUniqueArgs} args - Arguments to find a Mantenimiento
     * @example
     * // Get one Mantenimiento
     * const mantenimiento = await prisma.mantenimiento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MantenimientoFindUniqueArgs>(args: SelectSubset<T, MantenimientoFindUniqueArgs<ExtArgs>>): Prisma__MantenimientoClient<$Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mantenimiento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MantenimientoFindUniqueOrThrowArgs} args - Arguments to find a Mantenimiento
     * @example
     * // Get one Mantenimiento
     * const mantenimiento = await prisma.mantenimiento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MantenimientoFindUniqueOrThrowArgs>(args: SelectSubset<T, MantenimientoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MantenimientoClient<$Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mantenimiento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MantenimientoFindFirstArgs} args - Arguments to find a Mantenimiento
     * @example
     * // Get one Mantenimiento
     * const mantenimiento = await prisma.mantenimiento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MantenimientoFindFirstArgs>(args?: SelectSubset<T, MantenimientoFindFirstArgs<ExtArgs>>): Prisma__MantenimientoClient<$Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mantenimiento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MantenimientoFindFirstOrThrowArgs} args - Arguments to find a Mantenimiento
     * @example
     * // Get one Mantenimiento
     * const mantenimiento = await prisma.mantenimiento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MantenimientoFindFirstOrThrowArgs>(args?: SelectSubset<T, MantenimientoFindFirstOrThrowArgs<ExtArgs>>): Prisma__MantenimientoClient<$Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mantenimientos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MantenimientoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mantenimientos
     * const mantenimientos = await prisma.mantenimiento.findMany()
     * 
     * // Get first 10 Mantenimientos
     * const mantenimientos = await prisma.mantenimiento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mantenimientoWithIdOnly = await prisma.mantenimiento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MantenimientoFindManyArgs>(args?: SelectSubset<T, MantenimientoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mantenimiento.
     * @param {MantenimientoCreateArgs} args - Arguments to create a Mantenimiento.
     * @example
     * // Create one Mantenimiento
     * const Mantenimiento = await prisma.mantenimiento.create({
     *   data: {
     *     // ... data to create a Mantenimiento
     *   }
     * })
     * 
     */
    create<T extends MantenimientoCreateArgs>(args: SelectSubset<T, MantenimientoCreateArgs<ExtArgs>>): Prisma__MantenimientoClient<$Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mantenimientos.
     * @param {MantenimientoCreateManyArgs} args - Arguments to create many Mantenimientos.
     * @example
     * // Create many Mantenimientos
     * const mantenimiento = await prisma.mantenimiento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MantenimientoCreateManyArgs>(args?: SelectSubset<T, MantenimientoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mantenimientos and returns the data saved in the database.
     * @param {MantenimientoCreateManyAndReturnArgs} args - Arguments to create many Mantenimientos.
     * @example
     * // Create many Mantenimientos
     * const mantenimiento = await prisma.mantenimiento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mantenimientos and only return the `id`
     * const mantenimientoWithIdOnly = await prisma.mantenimiento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MantenimientoCreateManyAndReturnArgs>(args?: SelectSubset<T, MantenimientoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mantenimiento.
     * @param {MantenimientoDeleteArgs} args - Arguments to delete one Mantenimiento.
     * @example
     * // Delete one Mantenimiento
     * const Mantenimiento = await prisma.mantenimiento.delete({
     *   where: {
     *     // ... filter to delete one Mantenimiento
     *   }
     * })
     * 
     */
    delete<T extends MantenimientoDeleteArgs>(args: SelectSubset<T, MantenimientoDeleteArgs<ExtArgs>>): Prisma__MantenimientoClient<$Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mantenimiento.
     * @param {MantenimientoUpdateArgs} args - Arguments to update one Mantenimiento.
     * @example
     * // Update one Mantenimiento
     * const mantenimiento = await prisma.mantenimiento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MantenimientoUpdateArgs>(args: SelectSubset<T, MantenimientoUpdateArgs<ExtArgs>>): Prisma__MantenimientoClient<$Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mantenimientos.
     * @param {MantenimientoDeleteManyArgs} args - Arguments to filter Mantenimientos to delete.
     * @example
     * // Delete a few Mantenimientos
     * const { count } = await prisma.mantenimiento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MantenimientoDeleteManyArgs>(args?: SelectSubset<T, MantenimientoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mantenimientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MantenimientoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mantenimientos
     * const mantenimiento = await prisma.mantenimiento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MantenimientoUpdateManyArgs>(args: SelectSubset<T, MantenimientoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mantenimientos and returns the data updated in the database.
     * @param {MantenimientoUpdateManyAndReturnArgs} args - Arguments to update many Mantenimientos.
     * @example
     * // Update many Mantenimientos
     * const mantenimiento = await prisma.mantenimiento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mantenimientos and only return the `id`
     * const mantenimientoWithIdOnly = await prisma.mantenimiento.updateManyAndReturn({
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
    updateManyAndReturn<T extends MantenimientoUpdateManyAndReturnArgs>(args: SelectSubset<T, MantenimientoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mantenimiento.
     * @param {MantenimientoUpsertArgs} args - Arguments to update or create a Mantenimiento.
     * @example
     * // Update or create a Mantenimiento
     * const mantenimiento = await prisma.mantenimiento.upsert({
     *   create: {
     *     // ... data to create a Mantenimiento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mantenimiento we want to update
     *   }
     * })
     */
    upsert<T extends MantenimientoUpsertArgs>(args: SelectSubset<T, MantenimientoUpsertArgs<ExtArgs>>): Prisma__MantenimientoClient<$Result.GetResult<Prisma.$MantenimientoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mantenimientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MantenimientoCountArgs} args - Arguments to filter Mantenimientos to count.
     * @example
     * // Count the number of Mantenimientos
     * const count = await prisma.mantenimiento.count({
     *   where: {
     *     // ... the filter for the Mantenimientos we want to count
     *   }
     * })
    **/
    count<T extends MantenimientoCountArgs>(
      args?: Subset<T, MantenimientoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MantenimientoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mantenimiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MantenimientoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MantenimientoAggregateArgs>(args: Subset<T, MantenimientoAggregateArgs>): Prisma.PrismaPromise<GetMantenimientoAggregateType<T>>

    /**
     * Group by Mantenimiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MantenimientoGroupByArgs} args - Group by arguments.
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
      T extends MantenimientoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MantenimientoGroupByArgs['orderBy'] }
        : { orderBy?: MantenimientoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MantenimientoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMantenimientoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mantenimiento model
   */
  readonly fields: MantenimientoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mantenimiento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MantenimientoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehiculo<T extends VehiculoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehiculoDefaultArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Mantenimiento model
   */
  interface MantenimientoFieldRefs {
    readonly id: FieldRef<"Mantenimiento", 'Int'>
    readonly vehiculoId: FieldRef<"Mantenimiento", 'Int'>
    readonly tipo: FieldRef<"Mantenimiento", 'TipoMantenimiento'>
    readonly descripcion: FieldRef<"Mantenimiento", 'String'>
    readonly costo: FieldRef<"Mantenimiento", 'Float'>
    readonly fecha: FieldRef<"Mantenimiento", 'DateTime'>
    readonly createdAt: FieldRef<"Mantenimiento", 'DateTime'>
    readonly updatedAt: FieldRef<"Mantenimiento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mantenimiento findUnique
   */
  export type MantenimientoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mantenimiento
     */
    select?: MantenimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mantenimiento
     */
    omit?: MantenimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MantenimientoInclude<ExtArgs> | null
    /**
     * Filter, which Mantenimiento to fetch.
     */
    where: MantenimientoWhereUniqueInput
  }

  /**
   * Mantenimiento findUniqueOrThrow
   */
  export type MantenimientoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mantenimiento
     */
    select?: MantenimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mantenimiento
     */
    omit?: MantenimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MantenimientoInclude<ExtArgs> | null
    /**
     * Filter, which Mantenimiento to fetch.
     */
    where: MantenimientoWhereUniqueInput
  }

  /**
   * Mantenimiento findFirst
   */
  export type MantenimientoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mantenimiento
     */
    select?: MantenimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mantenimiento
     */
    omit?: MantenimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MantenimientoInclude<ExtArgs> | null
    /**
     * Filter, which Mantenimiento to fetch.
     */
    where?: MantenimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mantenimientos to fetch.
     */
    orderBy?: MantenimientoOrderByWithRelationInput | MantenimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mantenimientos.
     */
    cursor?: MantenimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mantenimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mantenimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mantenimientos.
     */
    distinct?: MantenimientoScalarFieldEnum | MantenimientoScalarFieldEnum[]
  }

  /**
   * Mantenimiento findFirstOrThrow
   */
  export type MantenimientoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mantenimiento
     */
    select?: MantenimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mantenimiento
     */
    omit?: MantenimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MantenimientoInclude<ExtArgs> | null
    /**
     * Filter, which Mantenimiento to fetch.
     */
    where?: MantenimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mantenimientos to fetch.
     */
    orderBy?: MantenimientoOrderByWithRelationInput | MantenimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mantenimientos.
     */
    cursor?: MantenimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mantenimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mantenimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mantenimientos.
     */
    distinct?: MantenimientoScalarFieldEnum | MantenimientoScalarFieldEnum[]
  }

  /**
   * Mantenimiento findMany
   */
  export type MantenimientoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mantenimiento
     */
    select?: MantenimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mantenimiento
     */
    omit?: MantenimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MantenimientoInclude<ExtArgs> | null
    /**
     * Filter, which Mantenimientos to fetch.
     */
    where?: MantenimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mantenimientos to fetch.
     */
    orderBy?: MantenimientoOrderByWithRelationInput | MantenimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mantenimientos.
     */
    cursor?: MantenimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mantenimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mantenimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mantenimientos.
     */
    distinct?: MantenimientoScalarFieldEnum | MantenimientoScalarFieldEnum[]
  }

  /**
   * Mantenimiento create
   */
  export type MantenimientoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mantenimiento
     */
    select?: MantenimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mantenimiento
     */
    omit?: MantenimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MantenimientoInclude<ExtArgs> | null
    /**
     * The data needed to create a Mantenimiento.
     */
    data: XOR<MantenimientoCreateInput, MantenimientoUncheckedCreateInput>
  }

  /**
   * Mantenimiento createMany
   */
  export type MantenimientoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mantenimientos.
     */
    data: MantenimientoCreateManyInput | MantenimientoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mantenimiento createManyAndReturn
   */
  export type MantenimientoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mantenimiento
     */
    select?: MantenimientoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mantenimiento
     */
    omit?: MantenimientoOmit<ExtArgs> | null
    /**
     * The data used to create many Mantenimientos.
     */
    data: MantenimientoCreateManyInput | MantenimientoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MantenimientoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mantenimiento update
   */
  export type MantenimientoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mantenimiento
     */
    select?: MantenimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mantenimiento
     */
    omit?: MantenimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MantenimientoInclude<ExtArgs> | null
    /**
     * The data needed to update a Mantenimiento.
     */
    data: XOR<MantenimientoUpdateInput, MantenimientoUncheckedUpdateInput>
    /**
     * Choose, which Mantenimiento to update.
     */
    where: MantenimientoWhereUniqueInput
  }

  /**
   * Mantenimiento updateMany
   */
  export type MantenimientoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mantenimientos.
     */
    data: XOR<MantenimientoUpdateManyMutationInput, MantenimientoUncheckedUpdateManyInput>
    /**
     * Filter which Mantenimientos to update
     */
    where?: MantenimientoWhereInput
    /**
     * Limit how many Mantenimientos to update.
     */
    limit?: number
  }

  /**
   * Mantenimiento updateManyAndReturn
   */
  export type MantenimientoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mantenimiento
     */
    select?: MantenimientoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mantenimiento
     */
    omit?: MantenimientoOmit<ExtArgs> | null
    /**
     * The data used to update Mantenimientos.
     */
    data: XOR<MantenimientoUpdateManyMutationInput, MantenimientoUncheckedUpdateManyInput>
    /**
     * Filter which Mantenimientos to update
     */
    where?: MantenimientoWhereInput
    /**
     * Limit how many Mantenimientos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MantenimientoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mantenimiento upsert
   */
  export type MantenimientoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mantenimiento
     */
    select?: MantenimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mantenimiento
     */
    omit?: MantenimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MantenimientoInclude<ExtArgs> | null
    /**
     * The filter to search for the Mantenimiento to update in case it exists.
     */
    where: MantenimientoWhereUniqueInput
    /**
     * In case the Mantenimiento found by the `where` argument doesn't exist, create a new Mantenimiento with this data.
     */
    create: XOR<MantenimientoCreateInput, MantenimientoUncheckedCreateInput>
    /**
     * In case the Mantenimiento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MantenimientoUpdateInput, MantenimientoUncheckedUpdateInput>
  }

  /**
   * Mantenimiento delete
   */
  export type MantenimientoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mantenimiento
     */
    select?: MantenimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mantenimiento
     */
    omit?: MantenimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MantenimientoInclude<ExtArgs> | null
    /**
     * Filter which Mantenimiento to delete.
     */
    where: MantenimientoWhereUniqueInput
  }

  /**
   * Mantenimiento deleteMany
   */
  export type MantenimientoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mantenimientos to delete
     */
    where?: MantenimientoWhereInput
    /**
     * Limit how many Mantenimientos to delete.
     */
    limit?: number
  }

  /**
   * Mantenimiento without action
   */
  export type MantenimientoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mantenimiento
     */
    select?: MantenimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mantenimiento
     */
    omit?: MantenimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MantenimientoInclude<ExtArgs> | null
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


  export const VehiculoScalarFieldEnum: {
    id: 'id',
    marca: 'marca',
    modelo: 'modelo',
    anio: 'anio',
    placa: 'placa',
    tipo: 'tipo',
    estado: 'estado',
    precioPorDia: 'precioPorDia',
    kilometraje: 'kilometraje',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VehiculoScalarFieldEnum = (typeof VehiculoScalarFieldEnum)[keyof typeof VehiculoScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nombres: 'nombres',
    apellidos: 'apellidos',
    documentoIdentidad: 'documentoIdentidad',
    licenciaConduccion: 'licenciaConduccion',
    correo: 'correo',
    telefono: 'telefono',
    direccion: 'direccion',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const ReservaScalarFieldEnum: {
    id: 'id',
    clienteId: 'clienteId',
    vehiculoId: 'vehiculoId',
    fechaInicio: 'fechaInicio',
    fechaFin: 'fechaFin',
    estado: 'estado',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReservaScalarFieldEnum = (typeof ReservaScalarFieldEnum)[keyof typeof ReservaScalarFieldEnum]


  export const ContratoScalarFieldEnum: {
    id: 'id',
    reservaId: 'reservaId',
    fechaEntrega: 'fechaEntrega',
    valorTotal: 'valorTotal',
    condiciones: 'condiciones',
    estado: 'estado',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContratoScalarFieldEnum = (typeof ContratoScalarFieldEnum)[keyof typeof ContratoScalarFieldEnum]


  export const DevolucionScalarFieldEnum: {
    id: 'id',
    contratoId: 'contratoId',
    fechaDevolucion: 'fechaDevolucion',
    estadoVehiculo: 'estadoVehiculo',
    kilometrajeRetorno: 'kilometrajeRetorno',
    cargosAdicionales: 'cargosAdicionales',
    observaciones: 'observaciones',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DevolucionScalarFieldEnum = (typeof DevolucionScalarFieldEnum)[keyof typeof DevolucionScalarFieldEnum]


  export const MantenimientoScalarFieldEnum: {
    id: 'id',
    vehiculoId: 'vehiculoId',
    tipo: 'tipo',
    descripcion: 'descripcion',
    costo: 'costo',
    fecha: 'fecha',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MantenimientoScalarFieldEnum = (typeof MantenimientoScalarFieldEnum)[keyof typeof MantenimientoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'TipoVehiculo'
   */
  export type EnumTipoVehiculoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoVehiculo'>
    


  /**
   * Reference to a field of type 'TipoVehiculo[]'
   */
  export type ListEnumTipoVehiculoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoVehiculo[]'>
    


  /**
   * Reference to a field of type 'EstadoVehiculo'
   */
  export type EnumEstadoVehiculoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoVehiculo'>
    


  /**
   * Reference to a field of type 'EstadoVehiculo[]'
   */
  export type ListEnumEstadoVehiculoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoVehiculo[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'EstadoReserva'
   */
  export type EnumEstadoReservaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoReserva'>
    


  /**
   * Reference to a field of type 'EstadoReserva[]'
   */
  export type ListEnumEstadoReservaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoReserva[]'>
    


  /**
   * Reference to a field of type 'EstadoContrato'
   */
  export type EnumEstadoContratoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoContrato'>
    


  /**
   * Reference to a field of type 'EstadoContrato[]'
   */
  export type ListEnumEstadoContratoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoContrato[]'>
    


  /**
   * Reference to a field of type 'TipoMantenimiento'
   */
  export type EnumTipoMantenimientoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoMantenimiento'>
    


  /**
   * Reference to a field of type 'TipoMantenimiento[]'
   */
  export type ListEnumTipoMantenimientoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoMantenimiento[]'>
    
  /**
   * Deep Input Types
   */


  export type VehiculoWhereInput = {
    AND?: VehiculoWhereInput | VehiculoWhereInput[]
    OR?: VehiculoWhereInput[]
    NOT?: VehiculoWhereInput | VehiculoWhereInput[]
    id?: IntFilter<"Vehiculo"> | number
    marca?: StringFilter<"Vehiculo"> | string
    modelo?: StringFilter<"Vehiculo"> | string
    anio?: IntFilter<"Vehiculo"> | number
    placa?: StringFilter<"Vehiculo"> | string
    tipo?: EnumTipoVehiculoFilter<"Vehiculo"> | $Enums.TipoVehiculo
    estado?: EnumEstadoVehiculoFilter<"Vehiculo"> | $Enums.EstadoVehiculo
    precioPorDia?: FloatFilter<"Vehiculo"> | number
    kilometraje?: IntFilter<"Vehiculo"> | number
    createdAt?: DateTimeFilter<"Vehiculo"> | Date | string
    updatedAt?: DateTimeFilter<"Vehiculo"> | Date | string
    reservas?: ReservaListRelationFilter
    mantenimientos?: MantenimientoListRelationFilter
  }

  export type VehiculoOrderByWithRelationInput = {
    id?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    placa?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    precioPorDia?: SortOrder
    kilometraje?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reservas?: ReservaOrderByRelationAggregateInput
    mantenimientos?: MantenimientoOrderByRelationAggregateInput
  }

  export type VehiculoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    placa?: string
    AND?: VehiculoWhereInput | VehiculoWhereInput[]
    OR?: VehiculoWhereInput[]
    NOT?: VehiculoWhereInput | VehiculoWhereInput[]
    marca?: StringFilter<"Vehiculo"> | string
    modelo?: StringFilter<"Vehiculo"> | string
    anio?: IntFilter<"Vehiculo"> | number
    tipo?: EnumTipoVehiculoFilter<"Vehiculo"> | $Enums.TipoVehiculo
    estado?: EnumEstadoVehiculoFilter<"Vehiculo"> | $Enums.EstadoVehiculo
    precioPorDia?: FloatFilter<"Vehiculo"> | number
    kilometraje?: IntFilter<"Vehiculo"> | number
    createdAt?: DateTimeFilter<"Vehiculo"> | Date | string
    updatedAt?: DateTimeFilter<"Vehiculo"> | Date | string
    reservas?: ReservaListRelationFilter
    mantenimientos?: MantenimientoListRelationFilter
  }, "id" | "placa">

  export type VehiculoOrderByWithAggregationInput = {
    id?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    placa?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    precioPorDia?: SortOrder
    kilometraje?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VehiculoCountOrderByAggregateInput
    _avg?: VehiculoAvgOrderByAggregateInput
    _max?: VehiculoMaxOrderByAggregateInput
    _min?: VehiculoMinOrderByAggregateInput
    _sum?: VehiculoSumOrderByAggregateInput
  }

  export type VehiculoScalarWhereWithAggregatesInput = {
    AND?: VehiculoScalarWhereWithAggregatesInput | VehiculoScalarWhereWithAggregatesInput[]
    OR?: VehiculoScalarWhereWithAggregatesInput[]
    NOT?: VehiculoScalarWhereWithAggregatesInput | VehiculoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vehiculo"> | number
    marca?: StringWithAggregatesFilter<"Vehiculo"> | string
    modelo?: StringWithAggregatesFilter<"Vehiculo"> | string
    anio?: IntWithAggregatesFilter<"Vehiculo"> | number
    placa?: StringWithAggregatesFilter<"Vehiculo"> | string
    tipo?: EnumTipoVehiculoWithAggregatesFilter<"Vehiculo"> | $Enums.TipoVehiculo
    estado?: EnumEstadoVehiculoWithAggregatesFilter<"Vehiculo"> | $Enums.EstadoVehiculo
    precioPorDia?: FloatWithAggregatesFilter<"Vehiculo"> | number
    kilometraje?: IntWithAggregatesFilter<"Vehiculo"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Vehiculo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vehiculo"> | Date | string
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: IntFilter<"Cliente"> | number
    nombres?: StringFilter<"Cliente"> | string
    apellidos?: StringFilter<"Cliente"> | string
    documentoIdentidad?: StringFilter<"Cliente"> | string
    licenciaConduccion?: StringFilter<"Cliente"> | string
    correo?: StringFilter<"Cliente"> | string
    telefono?: StringFilter<"Cliente"> | string
    direccion?: StringNullableFilter<"Cliente"> | string | null
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
    reservas?: ReservaListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    documentoIdentidad?: SortOrder
    licenciaConduccion?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reservas?: ReservaOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    documentoIdentidad?: string
    licenciaConduccion?: string
    correo?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nombres?: StringFilter<"Cliente"> | string
    apellidos?: StringFilter<"Cliente"> | string
    telefono?: StringFilter<"Cliente"> | string
    direccion?: StringNullableFilter<"Cliente"> | string | null
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
    reservas?: ReservaListRelationFilter
  }, "id" | "documentoIdentidad" | "licenciaConduccion" | "correo">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    documentoIdentidad?: SortOrder
    licenciaConduccion?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cliente"> | number
    nombres?: StringWithAggregatesFilter<"Cliente"> | string
    apellidos?: StringWithAggregatesFilter<"Cliente"> | string
    documentoIdentidad?: StringWithAggregatesFilter<"Cliente"> | string
    licenciaConduccion?: StringWithAggregatesFilter<"Cliente"> | string
    correo?: StringWithAggregatesFilter<"Cliente"> | string
    telefono?: StringWithAggregatesFilter<"Cliente"> | string
    direccion?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
  }

  export type ReservaWhereInput = {
    AND?: ReservaWhereInput | ReservaWhereInput[]
    OR?: ReservaWhereInput[]
    NOT?: ReservaWhereInput | ReservaWhereInput[]
    id?: IntFilter<"Reserva"> | number
    clienteId?: IntFilter<"Reserva"> | number
    vehiculoId?: IntFilter<"Reserva"> | number
    fechaInicio?: DateTimeFilter<"Reserva"> | Date | string
    fechaFin?: DateTimeFilter<"Reserva"> | Date | string
    estado?: EnumEstadoReservaFilter<"Reserva"> | $Enums.EstadoReserva
    createdAt?: DateTimeFilter<"Reserva"> | Date | string
    updatedAt?: DateTimeFilter<"Reserva"> | Date | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    vehiculo?: XOR<VehiculoScalarRelationFilter, VehiculoWhereInput>
    contrato?: XOR<ContratoNullableScalarRelationFilter, ContratoWhereInput> | null
  }

  export type ReservaOrderByWithRelationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    vehiculoId?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    vehiculo?: VehiculoOrderByWithRelationInput
    contrato?: ContratoOrderByWithRelationInput
  }

  export type ReservaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReservaWhereInput | ReservaWhereInput[]
    OR?: ReservaWhereInput[]
    NOT?: ReservaWhereInput | ReservaWhereInput[]
    clienteId?: IntFilter<"Reserva"> | number
    vehiculoId?: IntFilter<"Reserva"> | number
    fechaInicio?: DateTimeFilter<"Reserva"> | Date | string
    fechaFin?: DateTimeFilter<"Reserva"> | Date | string
    estado?: EnumEstadoReservaFilter<"Reserva"> | $Enums.EstadoReserva
    createdAt?: DateTimeFilter<"Reserva"> | Date | string
    updatedAt?: DateTimeFilter<"Reserva"> | Date | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    vehiculo?: XOR<VehiculoScalarRelationFilter, VehiculoWhereInput>
    contrato?: XOR<ContratoNullableScalarRelationFilter, ContratoWhereInput> | null
  }, "id">

  export type ReservaOrderByWithAggregationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    vehiculoId?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReservaCountOrderByAggregateInput
    _avg?: ReservaAvgOrderByAggregateInput
    _max?: ReservaMaxOrderByAggregateInput
    _min?: ReservaMinOrderByAggregateInput
    _sum?: ReservaSumOrderByAggregateInput
  }

  export type ReservaScalarWhereWithAggregatesInput = {
    AND?: ReservaScalarWhereWithAggregatesInput | ReservaScalarWhereWithAggregatesInput[]
    OR?: ReservaScalarWhereWithAggregatesInput[]
    NOT?: ReservaScalarWhereWithAggregatesInput | ReservaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reserva"> | number
    clienteId?: IntWithAggregatesFilter<"Reserva"> | number
    vehiculoId?: IntWithAggregatesFilter<"Reserva"> | number
    fechaInicio?: DateTimeWithAggregatesFilter<"Reserva"> | Date | string
    fechaFin?: DateTimeWithAggregatesFilter<"Reserva"> | Date | string
    estado?: EnumEstadoReservaWithAggregatesFilter<"Reserva"> | $Enums.EstadoReserva
    createdAt?: DateTimeWithAggregatesFilter<"Reserva"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reserva"> | Date | string
  }

  export type ContratoWhereInput = {
    AND?: ContratoWhereInput | ContratoWhereInput[]
    OR?: ContratoWhereInput[]
    NOT?: ContratoWhereInput | ContratoWhereInput[]
    id?: IntFilter<"Contrato"> | number
    reservaId?: IntFilter<"Contrato"> | number
    fechaEntrega?: DateTimeFilter<"Contrato"> | Date | string
    valorTotal?: FloatFilter<"Contrato"> | number
    condiciones?: StringNullableFilter<"Contrato"> | string | null
    estado?: EnumEstadoContratoFilter<"Contrato"> | $Enums.EstadoContrato
    createdAt?: DateTimeFilter<"Contrato"> | Date | string
    updatedAt?: DateTimeFilter<"Contrato"> | Date | string
    reserva?: XOR<ReservaScalarRelationFilter, ReservaWhereInput>
    devolucion?: XOR<DevolucionNullableScalarRelationFilter, DevolucionWhereInput> | null
  }

  export type ContratoOrderByWithRelationInput = {
    id?: SortOrder
    reservaId?: SortOrder
    fechaEntrega?: SortOrder
    valorTotal?: SortOrder
    condiciones?: SortOrderInput | SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reserva?: ReservaOrderByWithRelationInput
    devolucion?: DevolucionOrderByWithRelationInput
  }

  export type ContratoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    reservaId?: number
    AND?: ContratoWhereInput | ContratoWhereInput[]
    OR?: ContratoWhereInput[]
    NOT?: ContratoWhereInput | ContratoWhereInput[]
    fechaEntrega?: DateTimeFilter<"Contrato"> | Date | string
    valorTotal?: FloatFilter<"Contrato"> | number
    condiciones?: StringNullableFilter<"Contrato"> | string | null
    estado?: EnumEstadoContratoFilter<"Contrato"> | $Enums.EstadoContrato
    createdAt?: DateTimeFilter<"Contrato"> | Date | string
    updatedAt?: DateTimeFilter<"Contrato"> | Date | string
    reserva?: XOR<ReservaScalarRelationFilter, ReservaWhereInput>
    devolucion?: XOR<DevolucionNullableScalarRelationFilter, DevolucionWhereInput> | null
  }, "id" | "reservaId">

  export type ContratoOrderByWithAggregationInput = {
    id?: SortOrder
    reservaId?: SortOrder
    fechaEntrega?: SortOrder
    valorTotal?: SortOrder
    condiciones?: SortOrderInput | SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContratoCountOrderByAggregateInput
    _avg?: ContratoAvgOrderByAggregateInput
    _max?: ContratoMaxOrderByAggregateInput
    _min?: ContratoMinOrderByAggregateInput
    _sum?: ContratoSumOrderByAggregateInput
  }

  export type ContratoScalarWhereWithAggregatesInput = {
    AND?: ContratoScalarWhereWithAggregatesInput | ContratoScalarWhereWithAggregatesInput[]
    OR?: ContratoScalarWhereWithAggregatesInput[]
    NOT?: ContratoScalarWhereWithAggregatesInput | ContratoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contrato"> | number
    reservaId?: IntWithAggregatesFilter<"Contrato"> | number
    fechaEntrega?: DateTimeWithAggregatesFilter<"Contrato"> | Date | string
    valorTotal?: FloatWithAggregatesFilter<"Contrato"> | number
    condiciones?: StringNullableWithAggregatesFilter<"Contrato"> | string | null
    estado?: EnumEstadoContratoWithAggregatesFilter<"Contrato"> | $Enums.EstadoContrato
    createdAt?: DateTimeWithAggregatesFilter<"Contrato"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contrato"> | Date | string
  }

  export type DevolucionWhereInput = {
    AND?: DevolucionWhereInput | DevolucionWhereInput[]
    OR?: DevolucionWhereInput[]
    NOT?: DevolucionWhereInput | DevolucionWhereInput[]
    id?: IntFilter<"Devolucion"> | number
    contratoId?: IntFilter<"Devolucion"> | number
    fechaDevolucion?: DateTimeFilter<"Devolucion"> | Date | string
    estadoVehiculo?: StringFilter<"Devolucion"> | string
    kilometrajeRetorno?: IntFilter<"Devolucion"> | number
    cargosAdicionales?: FloatFilter<"Devolucion"> | number
    observaciones?: StringNullableFilter<"Devolucion"> | string | null
    createdAt?: DateTimeFilter<"Devolucion"> | Date | string
    updatedAt?: DateTimeFilter<"Devolucion"> | Date | string
    contrato?: XOR<ContratoScalarRelationFilter, ContratoWhereInput>
  }

  export type DevolucionOrderByWithRelationInput = {
    id?: SortOrder
    contratoId?: SortOrder
    fechaDevolucion?: SortOrder
    estadoVehiculo?: SortOrder
    kilometrajeRetorno?: SortOrder
    cargosAdicionales?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contrato?: ContratoOrderByWithRelationInput
  }

  export type DevolucionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    contratoId?: number
    AND?: DevolucionWhereInput | DevolucionWhereInput[]
    OR?: DevolucionWhereInput[]
    NOT?: DevolucionWhereInput | DevolucionWhereInput[]
    fechaDevolucion?: DateTimeFilter<"Devolucion"> | Date | string
    estadoVehiculo?: StringFilter<"Devolucion"> | string
    kilometrajeRetorno?: IntFilter<"Devolucion"> | number
    cargosAdicionales?: FloatFilter<"Devolucion"> | number
    observaciones?: StringNullableFilter<"Devolucion"> | string | null
    createdAt?: DateTimeFilter<"Devolucion"> | Date | string
    updatedAt?: DateTimeFilter<"Devolucion"> | Date | string
    contrato?: XOR<ContratoScalarRelationFilter, ContratoWhereInput>
  }, "id" | "contratoId">

  export type DevolucionOrderByWithAggregationInput = {
    id?: SortOrder
    contratoId?: SortOrder
    fechaDevolucion?: SortOrder
    estadoVehiculo?: SortOrder
    kilometrajeRetorno?: SortOrder
    cargosAdicionales?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DevolucionCountOrderByAggregateInput
    _avg?: DevolucionAvgOrderByAggregateInput
    _max?: DevolucionMaxOrderByAggregateInput
    _min?: DevolucionMinOrderByAggregateInput
    _sum?: DevolucionSumOrderByAggregateInput
  }

  export type DevolucionScalarWhereWithAggregatesInput = {
    AND?: DevolucionScalarWhereWithAggregatesInput | DevolucionScalarWhereWithAggregatesInput[]
    OR?: DevolucionScalarWhereWithAggregatesInput[]
    NOT?: DevolucionScalarWhereWithAggregatesInput | DevolucionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Devolucion"> | number
    contratoId?: IntWithAggregatesFilter<"Devolucion"> | number
    fechaDevolucion?: DateTimeWithAggregatesFilter<"Devolucion"> | Date | string
    estadoVehiculo?: StringWithAggregatesFilter<"Devolucion"> | string
    kilometrajeRetorno?: IntWithAggregatesFilter<"Devolucion"> | number
    cargosAdicionales?: FloatWithAggregatesFilter<"Devolucion"> | number
    observaciones?: StringNullableWithAggregatesFilter<"Devolucion"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Devolucion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Devolucion"> | Date | string
  }

  export type MantenimientoWhereInput = {
    AND?: MantenimientoWhereInput | MantenimientoWhereInput[]
    OR?: MantenimientoWhereInput[]
    NOT?: MantenimientoWhereInput | MantenimientoWhereInput[]
    id?: IntFilter<"Mantenimiento"> | number
    vehiculoId?: IntFilter<"Mantenimiento"> | number
    tipo?: EnumTipoMantenimientoFilter<"Mantenimiento"> | $Enums.TipoMantenimiento
    descripcion?: StringFilter<"Mantenimiento"> | string
    costo?: FloatFilter<"Mantenimiento"> | number
    fecha?: DateTimeFilter<"Mantenimiento"> | Date | string
    createdAt?: DateTimeFilter<"Mantenimiento"> | Date | string
    updatedAt?: DateTimeFilter<"Mantenimiento"> | Date | string
    vehiculo?: XOR<VehiculoScalarRelationFilter, VehiculoWhereInput>
  }

  export type MantenimientoOrderByWithRelationInput = {
    id?: SortOrder
    vehiculoId?: SortOrder
    tipo?: SortOrder
    descripcion?: SortOrder
    costo?: SortOrder
    fecha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehiculo?: VehiculoOrderByWithRelationInput
  }

  export type MantenimientoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MantenimientoWhereInput | MantenimientoWhereInput[]
    OR?: MantenimientoWhereInput[]
    NOT?: MantenimientoWhereInput | MantenimientoWhereInput[]
    vehiculoId?: IntFilter<"Mantenimiento"> | number
    tipo?: EnumTipoMantenimientoFilter<"Mantenimiento"> | $Enums.TipoMantenimiento
    descripcion?: StringFilter<"Mantenimiento"> | string
    costo?: FloatFilter<"Mantenimiento"> | number
    fecha?: DateTimeFilter<"Mantenimiento"> | Date | string
    createdAt?: DateTimeFilter<"Mantenimiento"> | Date | string
    updatedAt?: DateTimeFilter<"Mantenimiento"> | Date | string
    vehiculo?: XOR<VehiculoScalarRelationFilter, VehiculoWhereInput>
  }, "id">

  export type MantenimientoOrderByWithAggregationInput = {
    id?: SortOrder
    vehiculoId?: SortOrder
    tipo?: SortOrder
    descripcion?: SortOrder
    costo?: SortOrder
    fecha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MantenimientoCountOrderByAggregateInput
    _avg?: MantenimientoAvgOrderByAggregateInput
    _max?: MantenimientoMaxOrderByAggregateInput
    _min?: MantenimientoMinOrderByAggregateInput
    _sum?: MantenimientoSumOrderByAggregateInput
  }

  export type MantenimientoScalarWhereWithAggregatesInput = {
    AND?: MantenimientoScalarWhereWithAggregatesInput | MantenimientoScalarWhereWithAggregatesInput[]
    OR?: MantenimientoScalarWhereWithAggregatesInput[]
    NOT?: MantenimientoScalarWhereWithAggregatesInput | MantenimientoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mantenimiento"> | number
    vehiculoId?: IntWithAggregatesFilter<"Mantenimiento"> | number
    tipo?: EnumTipoMantenimientoWithAggregatesFilter<"Mantenimiento"> | $Enums.TipoMantenimiento
    descripcion?: StringWithAggregatesFilter<"Mantenimiento"> | string
    costo?: FloatWithAggregatesFilter<"Mantenimiento"> | number
    fecha?: DateTimeWithAggregatesFilter<"Mantenimiento"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Mantenimiento"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Mantenimiento"> | Date | string
  }

  export type VehiculoCreateInput = {
    marca: string
    modelo: string
    anio: number
    placa: string
    tipo: $Enums.TipoVehiculo
    estado?: $Enums.EstadoVehiculo
    precioPorDia: number
    kilometraje?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reservas?: ReservaCreateNestedManyWithoutVehiculoInput
    mantenimientos?: MantenimientoCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoUncheckedCreateInput = {
    id?: number
    marca: string
    modelo: string
    anio: number
    placa: string
    tipo: $Enums.TipoVehiculo
    estado?: $Enums.EstadoVehiculo
    precioPorDia: number
    kilometraje?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reservas?: ReservaUncheckedCreateNestedManyWithoutVehiculoInput
    mantenimientos?: MantenimientoUncheckedCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoUpdateInput = {
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoVehiculoFieldUpdateOperationsInput | $Enums.TipoVehiculo
    estado?: EnumEstadoVehiculoFieldUpdateOperationsInput | $Enums.EstadoVehiculo
    precioPorDia?: FloatFieldUpdateOperationsInput | number
    kilometraje?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUpdateManyWithoutVehiculoNestedInput
    mantenimientos?: MantenimientoUpdateManyWithoutVehiculoNestedInput
  }

  export type VehiculoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoVehiculoFieldUpdateOperationsInput | $Enums.TipoVehiculo
    estado?: EnumEstadoVehiculoFieldUpdateOperationsInput | $Enums.EstadoVehiculo
    precioPorDia?: FloatFieldUpdateOperationsInput | number
    kilometraje?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUncheckedUpdateManyWithoutVehiculoNestedInput
    mantenimientos?: MantenimientoUncheckedUpdateManyWithoutVehiculoNestedInput
  }

  export type VehiculoCreateManyInput = {
    id?: number
    marca: string
    modelo: string
    anio: number
    placa: string
    tipo: $Enums.TipoVehiculo
    estado?: $Enums.EstadoVehiculo
    precioPorDia: number
    kilometraje?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehiculoUpdateManyMutationInput = {
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoVehiculoFieldUpdateOperationsInput | $Enums.TipoVehiculo
    estado?: EnumEstadoVehiculoFieldUpdateOperationsInput | $Enums.EstadoVehiculo
    precioPorDia?: FloatFieldUpdateOperationsInput | number
    kilometraje?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehiculoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoVehiculoFieldUpdateOperationsInput | $Enums.TipoVehiculo
    estado?: EnumEstadoVehiculoFieldUpdateOperationsInput | $Enums.EstadoVehiculo
    precioPorDia?: FloatFieldUpdateOperationsInput | number
    kilometraje?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteCreateInput = {
    nombres: string
    apellidos: string
    documentoIdentidad: string
    licenciaConduccion: string
    correo: string
    telefono: string
    direccion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservas?: ReservaCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: number
    nombres: string
    apellidos: string
    documentoIdentidad: string
    licenciaConduccion: string
    correo: string
    telefono: string
    direccion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservas?: ReservaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    licenciaConduccion?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    licenciaConduccion?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: number
    nombres: string
    apellidos: string
    documentoIdentidad: string
    licenciaConduccion: string
    correo: string
    telefono: string
    direccion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteUpdateManyMutationInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    licenciaConduccion?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    licenciaConduccion?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaCreateInput = {
    fechaInicio: Date | string
    fechaFin: Date | string
    estado?: $Enums.EstadoReserva
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutReservasInput
    vehiculo: VehiculoCreateNestedOneWithoutReservasInput
    contrato?: ContratoCreateNestedOneWithoutReservaInput
  }

  export type ReservaUncheckedCreateInput = {
    id?: number
    clienteId: number
    vehiculoId: number
    fechaInicio: Date | string
    fechaFin: Date | string
    estado?: $Enums.EstadoReserva
    createdAt?: Date | string
    updatedAt?: Date | string
    contrato?: ContratoUncheckedCreateNestedOneWithoutReservaInput
  }

  export type ReservaUpdateInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutReservasNestedInput
    vehiculo?: VehiculoUpdateOneRequiredWithoutReservasNestedInput
    contrato?: ContratoUpdateOneWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    vehiculoId?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contrato?: ContratoUncheckedUpdateOneWithoutReservaNestedInput
  }

  export type ReservaCreateManyInput = {
    id?: number
    clienteId: number
    vehiculoId: number
    fechaInicio: Date | string
    fechaFin: Date | string
    estado?: $Enums.EstadoReserva
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservaUpdateManyMutationInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    vehiculoId?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContratoCreateInput = {
    fechaEntrega: Date | string
    valorTotal: number
    condiciones?: string | null
    estado?: $Enums.EstadoContrato
    createdAt?: Date | string
    updatedAt?: Date | string
    reserva: ReservaCreateNestedOneWithoutContratoInput
    devolucion?: DevolucionCreateNestedOneWithoutContratoInput
  }

  export type ContratoUncheckedCreateInput = {
    id?: number
    reservaId: number
    fechaEntrega: Date | string
    valorTotal: number
    condiciones?: string | null
    estado?: $Enums.EstadoContrato
    createdAt?: Date | string
    updatedAt?: Date | string
    devolucion?: DevolucionUncheckedCreateNestedOneWithoutContratoInput
  }

  export type ContratoUpdateInput = {
    fechaEntrega?: DateTimeFieldUpdateOperationsInput | Date | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    condiciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoContratoFieldUpdateOperationsInput | $Enums.EstadoContrato
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reserva?: ReservaUpdateOneRequiredWithoutContratoNestedInput
    devolucion?: DevolucionUpdateOneWithoutContratoNestedInput
  }

  export type ContratoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reservaId?: IntFieldUpdateOperationsInput | number
    fechaEntrega?: DateTimeFieldUpdateOperationsInput | Date | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    condiciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoContratoFieldUpdateOperationsInput | $Enums.EstadoContrato
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devolucion?: DevolucionUncheckedUpdateOneWithoutContratoNestedInput
  }

  export type ContratoCreateManyInput = {
    id?: number
    reservaId: number
    fechaEntrega: Date | string
    valorTotal: number
    condiciones?: string | null
    estado?: $Enums.EstadoContrato
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContratoUpdateManyMutationInput = {
    fechaEntrega?: DateTimeFieldUpdateOperationsInput | Date | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    condiciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoContratoFieldUpdateOperationsInput | $Enums.EstadoContrato
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContratoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reservaId?: IntFieldUpdateOperationsInput | number
    fechaEntrega?: DateTimeFieldUpdateOperationsInput | Date | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    condiciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoContratoFieldUpdateOperationsInput | $Enums.EstadoContrato
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DevolucionCreateInput = {
    fechaDevolucion?: Date | string
    estadoVehiculo: string
    kilometrajeRetorno: number
    cargosAdicionales?: number
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contrato: ContratoCreateNestedOneWithoutDevolucionInput
  }

  export type DevolucionUncheckedCreateInput = {
    id?: number
    contratoId: number
    fechaDevolucion?: Date | string
    estadoVehiculo: string
    kilometrajeRetorno: number
    cargosAdicionales?: number
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DevolucionUpdateInput = {
    fechaDevolucion?: DateTimeFieldUpdateOperationsInput | Date | string
    estadoVehiculo?: StringFieldUpdateOperationsInput | string
    kilometrajeRetorno?: IntFieldUpdateOperationsInput | number
    cargosAdicionales?: FloatFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contrato?: ContratoUpdateOneRequiredWithoutDevolucionNestedInput
  }

  export type DevolucionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    contratoId?: IntFieldUpdateOperationsInput | number
    fechaDevolucion?: DateTimeFieldUpdateOperationsInput | Date | string
    estadoVehiculo?: StringFieldUpdateOperationsInput | string
    kilometrajeRetorno?: IntFieldUpdateOperationsInput | number
    cargosAdicionales?: FloatFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DevolucionCreateManyInput = {
    id?: number
    contratoId: number
    fechaDevolucion?: Date | string
    estadoVehiculo: string
    kilometrajeRetorno: number
    cargosAdicionales?: number
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DevolucionUpdateManyMutationInput = {
    fechaDevolucion?: DateTimeFieldUpdateOperationsInput | Date | string
    estadoVehiculo?: StringFieldUpdateOperationsInput | string
    kilometrajeRetorno?: IntFieldUpdateOperationsInput | number
    cargosAdicionales?: FloatFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DevolucionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    contratoId?: IntFieldUpdateOperationsInput | number
    fechaDevolucion?: DateTimeFieldUpdateOperationsInput | Date | string
    estadoVehiculo?: StringFieldUpdateOperationsInput | string
    kilometrajeRetorno?: IntFieldUpdateOperationsInput | number
    cargosAdicionales?: FloatFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MantenimientoCreateInput = {
    tipo: $Enums.TipoMantenimiento
    descripcion: string
    costo: number
    fecha: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    vehiculo: VehiculoCreateNestedOneWithoutMantenimientosInput
  }

  export type MantenimientoUncheckedCreateInput = {
    id?: number
    vehiculoId: number
    tipo: $Enums.TipoMantenimiento
    descripcion: string
    costo: number
    fecha: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MantenimientoUpdateInput = {
    tipo?: EnumTipoMantenimientoFieldUpdateOperationsInput | $Enums.TipoMantenimiento
    descripcion?: StringFieldUpdateOperationsInput | string
    costo?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehiculo?: VehiculoUpdateOneRequiredWithoutMantenimientosNestedInput
  }

  export type MantenimientoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehiculoId?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoMantenimientoFieldUpdateOperationsInput | $Enums.TipoMantenimiento
    descripcion?: StringFieldUpdateOperationsInput | string
    costo?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MantenimientoCreateManyInput = {
    id?: number
    vehiculoId: number
    tipo: $Enums.TipoMantenimiento
    descripcion: string
    costo: number
    fecha: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MantenimientoUpdateManyMutationInput = {
    tipo?: EnumTipoMantenimientoFieldUpdateOperationsInput | $Enums.TipoMantenimiento
    descripcion?: StringFieldUpdateOperationsInput | string
    costo?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MantenimientoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehiculoId?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoMantenimientoFieldUpdateOperationsInput | $Enums.TipoMantenimiento
    descripcion?: StringFieldUpdateOperationsInput | string
    costo?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumTipoVehiculoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoVehiculo | EnumTipoVehiculoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoVehiculo[] | ListEnumTipoVehiculoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoVehiculo[] | ListEnumTipoVehiculoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoVehiculoFilter<$PrismaModel> | $Enums.TipoVehiculo
  }

  export type EnumEstadoVehiculoFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoVehiculo | EnumEstadoVehiculoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoVehiculo[] | ListEnumEstadoVehiculoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoVehiculo[] | ListEnumEstadoVehiculoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoVehiculoFilter<$PrismaModel> | $Enums.EstadoVehiculo
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

  export type ReservaListRelationFilter = {
    every?: ReservaWhereInput
    some?: ReservaWhereInput
    none?: ReservaWhereInput
  }

  export type MantenimientoListRelationFilter = {
    every?: MantenimientoWhereInput
    some?: MantenimientoWhereInput
    none?: MantenimientoWhereInput
  }

  export type ReservaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MantenimientoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehiculoCountOrderByAggregateInput = {
    id?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    placa?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    precioPorDia?: SortOrder
    kilometraje?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehiculoAvgOrderByAggregateInput = {
    id?: SortOrder
    anio?: SortOrder
    precioPorDia?: SortOrder
    kilometraje?: SortOrder
  }

  export type VehiculoMaxOrderByAggregateInput = {
    id?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    placa?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    precioPorDia?: SortOrder
    kilometraje?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehiculoMinOrderByAggregateInput = {
    id?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    anio?: SortOrder
    placa?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    precioPorDia?: SortOrder
    kilometraje?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehiculoSumOrderByAggregateInput = {
    id?: SortOrder
    anio?: SortOrder
    precioPorDia?: SortOrder
    kilometraje?: SortOrder
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

  export type EnumTipoVehiculoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoVehiculo | EnumTipoVehiculoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoVehiculo[] | ListEnumTipoVehiculoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoVehiculo[] | ListEnumTipoVehiculoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoVehiculoWithAggregatesFilter<$PrismaModel> | $Enums.TipoVehiculo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoVehiculoFilter<$PrismaModel>
    _max?: NestedEnumTipoVehiculoFilter<$PrismaModel>
  }

  export type EnumEstadoVehiculoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoVehiculo | EnumEstadoVehiculoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoVehiculo[] | ListEnumEstadoVehiculoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoVehiculo[] | ListEnumEstadoVehiculoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoVehiculoWithAggregatesFilter<$PrismaModel> | $Enums.EstadoVehiculo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoVehiculoFilter<$PrismaModel>
    _max?: NestedEnumEstadoVehiculoFilter<$PrismaModel>
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    documentoIdentidad?: SortOrder
    licenciaConduccion?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    documentoIdentidad?: SortOrder
    licenciaConduccion?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    documentoIdentidad?: SortOrder
    licenciaConduccion?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumEstadoReservaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoReserva | EnumEstadoReservaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoReserva[] | ListEnumEstadoReservaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoReserva[] | ListEnumEstadoReservaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoReservaFilter<$PrismaModel> | $Enums.EstadoReserva
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type VehiculoScalarRelationFilter = {
    is?: VehiculoWhereInput
    isNot?: VehiculoWhereInput
  }

  export type ContratoNullableScalarRelationFilter = {
    is?: ContratoWhereInput | null
    isNot?: ContratoWhereInput | null
  }

  export type ReservaCountOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    vehiculoId?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservaAvgOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    vehiculoId?: SortOrder
  }

  export type ReservaMaxOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    vehiculoId?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservaMinOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    vehiculoId?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservaSumOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    vehiculoId?: SortOrder
  }

  export type EnumEstadoReservaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoReserva | EnumEstadoReservaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoReserva[] | ListEnumEstadoReservaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoReserva[] | ListEnumEstadoReservaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoReservaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoReserva
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoReservaFilter<$PrismaModel>
    _max?: NestedEnumEstadoReservaFilter<$PrismaModel>
  }

  export type EnumEstadoContratoFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoContrato | EnumEstadoContratoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoContrato[] | ListEnumEstadoContratoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoContrato[] | ListEnumEstadoContratoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoContratoFilter<$PrismaModel> | $Enums.EstadoContrato
  }

  export type ReservaScalarRelationFilter = {
    is?: ReservaWhereInput
    isNot?: ReservaWhereInput
  }

  export type DevolucionNullableScalarRelationFilter = {
    is?: DevolucionWhereInput | null
    isNot?: DevolucionWhereInput | null
  }

  export type ContratoCountOrderByAggregateInput = {
    id?: SortOrder
    reservaId?: SortOrder
    fechaEntrega?: SortOrder
    valorTotal?: SortOrder
    condiciones?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContratoAvgOrderByAggregateInput = {
    id?: SortOrder
    reservaId?: SortOrder
    valorTotal?: SortOrder
  }

  export type ContratoMaxOrderByAggregateInput = {
    id?: SortOrder
    reservaId?: SortOrder
    fechaEntrega?: SortOrder
    valorTotal?: SortOrder
    condiciones?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContratoMinOrderByAggregateInput = {
    id?: SortOrder
    reservaId?: SortOrder
    fechaEntrega?: SortOrder
    valorTotal?: SortOrder
    condiciones?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContratoSumOrderByAggregateInput = {
    id?: SortOrder
    reservaId?: SortOrder
    valorTotal?: SortOrder
  }

  export type EnumEstadoContratoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoContrato | EnumEstadoContratoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoContrato[] | ListEnumEstadoContratoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoContrato[] | ListEnumEstadoContratoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoContratoWithAggregatesFilter<$PrismaModel> | $Enums.EstadoContrato
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoContratoFilter<$PrismaModel>
    _max?: NestedEnumEstadoContratoFilter<$PrismaModel>
  }

  export type ContratoScalarRelationFilter = {
    is?: ContratoWhereInput
    isNot?: ContratoWhereInput
  }

  export type DevolucionCountOrderByAggregateInput = {
    id?: SortOrder
    contratoId?: SortOrder
    fechaDevolucion?: SortOrder
    estadoVehiculo?: SortOrder
    kilometrajeRetorno?: SortOrder
    cargosAdicionales?: SortOrder
    observaciones?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DevolucionAvgOrderByAggregateInput = {
    id?: SortOrder
    contratoId?: SortOrder
    kilometrajeRetorno?: SortOrder
    cargosAdicionales?: SortOrder
  }

  export type DevolucionMaxOrderByAggregateInput = {
    id?: SortOrder
    contratoId?: SortOrder
    fechaDevolucion?: SortOrder
    estadoVehiculo?: SortOrder
    kilometrajeRetorno?: SortOrder
    cargosAdicionales?: SortOrder
    observaciones?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DevolucionMinOrderByAggregateInput = {
    id?: SortOrder
    contratoId?: SortOrder
    fechaDevolucion?: SortOrder
    estadoVehiculo?: SortOrder
    kilometrajeRetorno?: SortOrder
    cargosAdicionales?: SortOrder
    observaciones?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DevolucionSumOrderByAggregateInput = {
    id?: SortOrder
    contratoId?: SortOrder
    kilometrajeRetorno?: SortOrder
    cargosAdicionales?: SortOrder
  }

  export type EnumTipoMantenimientoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMantenimiento | EnumTipoMantenimientoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMantenimiento[] | ListEnumTipoMantenimientoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMantenimiento[] | ListEnumTipoMantenimientoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMantenimientoFilter<$PrismaModel> | $Enums.TipoMantenimiento
  }

  export type MantenimientoCountOrderByAggregateInput = {
    id?: SortOrder
    vehiculoId?: SortOrder
    tipo?: SortOrder
    descripcion?: SortOrder
    costo?: SortOrder
    fecha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MantenimientoAvgOrderByAggregateInput = {
    id?: SortOrder
    vehiculoId?: SortOrder
    costo?: SortOrder
  }

  export type MantenimientoMaxOrderByAggregateInput = {
    id?: SortOrder
    vehiculoId?: SortOrder
    tipo?: SortOrder
    descripcion?: SortOrder
    costo?: SortOrder
    fecha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MantenimientoMinOrderByAggregateInput = {
    id?: SortOrder
    vehiculoId?: SortOrder
    tipo?: SortOrder
    descripcion?: SortOrder
    costo?: SortOrder
    fecha?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MantenimientoSumOrderByAggregateInput = {
    id?: SortOrder
    vehiculoId?: SortOrder
    costo?: SortOrder
  }

  export type EnumTipoMantenimientoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMantenimiento | EnumTipoMantenimientoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMantenimiento[] | ListEnumTipoMantenimientoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMantenimiento[] | ListEnumTipoMantenimientoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMantenimientoWithAggregatesFilter<$PrismaModel> | $Enums.TipoMantenimiento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoMantenimientoFilter<$PrismaModel>
    _max?: NestedEnumTipoMantenimientoFilter<$PrismaModel>
  }

  export type ReservaCreateNestedManyWithoutVehiculoInput = {
    create?: XOR<ReservaCreateWithoutVehiculoInput, ReservaUncheckedCreateWithoutVehiculoInput> | ReservaCreateWithoutVehiculoInput[] | ReservaUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutVehiculoInput | ReservaCreateOrConnectWithoutVehiculoInput[]
    createMany?: ReservaCreateManyVehiculoInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type MantenimientoCreateNestedManyWithoutVehiculoInput = {
    create?: XOR<MantenimientoCreateWithoutVehiculoInput, MantenimientoUncheckedCreateWithoutVehiculoInput> | MantenimientoCreateWithoutVehiculoInput[] | MantenimientoUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: MantenimientoCreateOrConnectWithoutVehiculoInput | MantenimientoCreateOrConnectWithoutVehiculoInput[]
    createMany?: MantenimientoCreateManyVehiculoInputEnvelope
    connect?: MantenimientoWhereUniqueInput | MantenimientoWhereUniqueInput[]
  }

  export type ReservaUncheckedCreateNestedManyWithoutVehiculoInput = {
    create?: XOR<ReservaCreateWithoutVehiculoInput, ReservaUncheckedCreateWithoutVehiculoInput> | ReservaCreateWithoutVehiculoInput[] | ReservaUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutVehiculoInput | ReservaCreateOrConnectWithoutVehiculoInput[]
    createMany?: ReservaCreateManyVehiculoInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type MantenimientoUncheckedCreateNestedManyWithoutVehiculoInput = {
    create?: XOR<MantenimientoCreateWithoutVehiculoInput, MantenimientoUncheckedCreateWithoutVehiculoInput> | MantenimientoCreateWithoutVehiculoInput[] | MantenimientoUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: MantenimientoCreateOrConnectWithoutVehiculoInput | MantenimientoCreateOrConnectWithoutVehiculoInput[]
    createMany?: MantenimientoCreateManyVehiculoInputEnvelope
    connect?: MantenimientoWhereUniqueInput | MantenimientoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumTipoVehiculoFieldUpdateOperationsInput = {
    set?: $Enums.TipoVehiculo
  }

  export type EnumEstadoVehiculoFieldUpdateOperationsInput = {
    set?: $Enums.EstadoVehiculo
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReservaUpdateManyWithoutVehiculoNestedInput = {
    create?: XOR<ReservaCreateWithoutVehiculoInput, ReservaUncheckedCreateWithoutVehiculoInput> | ReservaCreateWithoutVehiculoInput[] | ReservaUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutVehiculoInput | ReservaCreateOrConnectWithoutVehiculoInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutVehiculoInput | ReservaUpsertWithWhereUniqueWithoutVehiculoInput[]
    createMany?: ReservaCreateManyVehiculoInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutVehiculoInput | ReservaUpdateWithWhereUniqueWithoutVehiculoInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutVehiculoInput | ReservaUpdateManyWithWhereWithoutVehiculoInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type MantenimientoUpdateManyWithoutVehiculoNestedInput = {
    create?: XOR<MantenimientoCreateWithoutVehiculoInput, MantenimientoUncheckedCreateWithoutVehiculoInput> | MantenimientoCreateWithoutVehiculoInput[] | MantenimientoUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: MantenimientoCreateOrConnectWithoutVehiculoInput | MantenimientoCreateOrConnectWithoutVehiculoInput[]
    upsert?: MantenimientoUpsertWithWhereUniqueWithoutVehiculoInput | MantenimientoUpsertWithWhereUniqueWithoutVehiculoInput[]
    createMany?: MantenimientoCreateManyVehiculoInputEnvelope
    set?: MantenimientoWhereUniqueInput | MantenimientoWhereUniqueInput[]
    disconnect?: MantenimientoWhereUniqueInput | MantenimientoWhereUniqueInput[]
    delete?: MantenimientoWhereUniqueInput | MantenimientoWhereUniqueInput[]
    connect?: MantenimientoWhereUniqueInput | MantenimientoWhereUniqueInput[]
    update?: MantenimientoUpdateWithWhereUniqueWithoutVehiculoInput | MantenimientoUpdateWithWhereUniqueWithoutVehiculoInput[]
    updateMany?: MantenimientoUpdateManyWithWhereWithoutVehiculoInput | MantenimientoUpdateManyWithWhereWithoutVehiculoInput[]
    deleteMany?: MantenimientoScalarWhereInput | MantenimientoScalarWhereInput[]
  }

  export type ReservaUncheckedUpdateManyWithoutVehiculoNestedInput = {
    create?: XOR<ReservaCreateWithoutVehiculoInput, ReservaUncheckedCreateWithoutVehiculoInput> | ReservaCreateWithoutVehiculoInput[] | ReservaUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutVehiculoInput | ReservaCreateOrConnectWithoutVehiculoInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutVehiculoInput | ReservaUpsertWithWhereUniqueWithoutVehiculoInput[]
    createMany?: ReservaCreateManyVehiculoInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutVehiculoInput | ReservaUpdateWithWhereUniqueWithoutVehiculoInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutVehiculoInput | ReservaUpdateManyWithWhereWithoutVehiculoInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type MantenimientoUncheckedUpdateManyWithoutVehiculoNestedInput = {
    create?: XOR<MantenimientoCreateWithoutVehiculoInput, MantenimientoUncheckedCreateWithoutVehiculoInput> | MantenimientoCreateWithoutVehiculoInput[] | MantenimientoUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: MantenimientoCreateOrConnectWithoutVehiculoInput | MantenimientoCreateOrConnectWithoutVehiculoInput[]
    upsert?: MantenimientoUpsertWithWhereUniqueWithoutVehiculoInput | MantenimientoUpsertWithWhereUniqueWithoutVehiculoInput[]
    createMany?: MantenimientoCreateManyVehiculoInputEnvelope
    set?: MantenimientoWhereUniqueInput | MantenimientoWhereUniqueInput[]
    disconnect?: MantenimientoWhereUniqueInput | MantenimientoWhereUniqueInput[]
    delete?: MantenimientoWhereUniqueInput | MantenimientoWhereUniqueInput[]
    connect?: MantenimientoWhereUniqueInput | MantenimientoWhereUniqueInput[]
    update?: MantenimientoUpdateWithWhereUniqueWithoutVehiculoInput | MantenimientoUpdateWithWhereUniqueWithoutVehiculoInput[]
    updateMany?: MantenimientoUpdateManyWithWhereWithoutVehiculoInput | MantenimientoUpdateManyWithWhereWithoutVehiculoInput[]
    deleteMany?: MantenimientoScalarWhereInput | MantenimientoScalarWhereInput[]
  }

  export type ReservaCreateNestedManyWithoutClienteInput = {
    create?: XOR<ReservaCreateWithoutClienteInput, ReservaUncheckedCreateWithoutClienteInput> | ReservaCreateWithoutClienteInput[] | ReservaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutClienteInput | ReservaCreateOrConnectWithoutClienteInput[]
    createMany?: ReservaCreateManyClienteInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type ReservaUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<ReservaCreateWithoutClienteInput, ReservaUncheckedCreateWithoutClienteInput> | ReservaCreateWithoutClienteInput[] | ReservaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutClienteInput | ReservaCreateOrConnectWithoutClienteInput[]
    createMany?: ReservaCreateManyClienteInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ReservaUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ReservaCreateWithoutClienteInput, ReservaUncheckedCreateWithoutClienteInput> | ReservaCreateWithoutClienteInput[] | ReservaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutClienteInput | ReservaCreateOrConnectWithoutClienteInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutClienteInput | ReservaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ReservaCreateManyClienteInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutClienteInput | ReservaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutClienteInput | ReservaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type ReservaUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<ReservaCreateWithoutClienteInput, ReservaUncheckedCreateWithoutClienteInput> | ReservaCreateWithoutClienteInput[] | ReservaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutClienteInput | ReservaCreateOrConnectWithoutClienteInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutClienteInput | ReservaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: ReservaCreateManyClienteInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutClienteInput | ReservaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutClienteInput | ReservaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutReservasInput = {
    create?: XOR<ClienteCreateWithoutReservasInput, ClienteUncheckedCreateWithoutReservasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutReservasInput
    connect?: ClienteWhereUniqueInput
  }

  export type VehiculoCreateNestedOneWithoutReservasInput = {
    create?: XOR<VehiculoCreateWithoutReservasInput, VehiculoUncheckedCreateWithoutReservasInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutReservasInput
    connect?: VehiculoWhereUniqueInput
  }

  export type ContratoCreateNestedOneWithoutReservaInput = {
    create?: XOR<ContratoCreateWithoutReservaInput, ContratoUncheckedCreateWithoutReservaInput>
    connectOrCreate?: ContratoCreateOrConnectWithoutReservaInput
    connect?: ContratoWhereUniqueInput
  }

  export type ContratoUncheckedCreateNestedOneWithoutReservaInput = {
    create?: XOR<ContratoCreateWithoutReservaInput, ContratoUncheckedCreateWithoutReservaInput>
    connectOrCreate?: ContratoCreateOrConnectWithoutReservaInput
    connect?: ContratoWhereUniqueInput
  }

  export type EnumEstadoReservaFieldUpdateOperationsInput = {
    set?: $Enums.EstadoReserva
  }

  export type ClienteUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<ClienteCreateWithoutReservasInput, ClienteUncheckedCreateWithoutReservasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutReservasInput
    upsert?: ClienteUpsertWithoutReservasInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutReservasInput, ClienteUpdateWithoutReservasInput>, ClienteUncheckedUpdateWithoutReservasInput>
  }

  export type VehiculoUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<VehiculoCreateWithoutReservasInput, VehiculoUncheckedCreateWithoutReservasInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutReservasInput
    upsert?: VehiculoUpsertWithoutReservasInput
    connect?: VehiculoWhereUniqueInput
    update?: XOR<XOR<VehiculoUpdateToOneWithWhereWithoutReservasInput, VehiculoUpdateWithoutReservasInput>, VehiculoUncheckedUpdateWithoutReservasInput>
  }

  export type ContratoUpdateOneWithoutReservaNestedInput = {
    create?: XOR<ContratoCreateWithoutReservaInput, ContratoUncheckedCreateWithoutReservaInput>
    connectOrCreate?: ContratoCreateOrConnectWithoutReservaInput
    upsert?: ContratoUpsertWithoutReservaInput
    disconnect?: ContratoWhereInput | boolean
    delete?: ContratoWhereInput | boolean
    connect?: ContratoWhereUniqueInput
    update?: XOR<XOR<ContratoUpdateToOneWithWhereWithoutReservaInput, ContratoUpdateWithoutReservaInput>, ContratoUncheckedUpdateWithoutReservaInput>
  }

  export type ContratoUncheckedUpdateOneWithoutReservaNestedInput = {
    create?: XOR<ContratoCreateWithoutReservaInput, ContratoUncheckedCreateWithoutReservaInput>
    connectOrCreate?: ContratoCreateOrConnectWithoutReservaInput
    upsert?: ContratoUpsertWithoutReservaInput
    disconnect?: ContratoWhereInput | boolean
    delete?: ContratoWhereInput | boolean
    connect?: ContratoWhereUniqueInput
    update?: XOR<XOR<ContratoUpdateToOneWithWhereWithoutReservaInput, ContratoUpdateWithoutReservaInput>, ContratoUncheckedUpdateWithoutReservaInput>
  }

  export type ReservaCreateNestedOneWithoutContratoInput = {
    create?: XOR<ReservaCreateWithoutContratoInput, ReservaUncheckedCreateWithoutContratoInput>
    connectOrCreate?: ReservaCreateOrConnectWithoutContratoInput
    connect?: ReservaWhereUniqueInput
  }

  export type DevolucionCreateNestedOneWithoutContratoInput = {
    create?: XOR<DevolucionCreateWithoutContratoInput, DevolucionUncheckedCreateWithoutContratoInput>
    connectOrCreate?: DevolucionCreateOrConnectWithoutContratoInput
    connect?: DevolucionWhereUniqueInput
  }

  export type DevolucionUncheckedCreateNestedOneWithoutContratoInput = {
    create?: XOR<DevolucionCreateWithoutContratoInput, DevolucionUncheckedCreateWithoutContratoInput>
    connectOrCreate?: DevolucionCreateOrConnectWithoutContratoInput
    connect?: DevolucionWhereUniqueInput
  }

  export type EnumEstadoContratoFieldUpdateOperationsInput = {
    set?: $Enums.EstadoContrato
  }

  export type ReservaUpdateOneRequiredWithoutContratoNestedInput = {
    create?: XOR<ReservaCreateWithoutContratoInput, ReservaUncheckedCreateWithoutContratoInput>
    connectOrCreate?: ReservaCreateOrConnectWithoutContratoInput
    upsert?: ReservaUpsertWithoutContratoInput
    connect?: ReservaWhereUniqueInput
    update?: XOR<XOR<ReservaUpdateToOneWithWhereWithoutContratoInput, ReservaUpdateWithoutContratoInput>, ReservaUncheckedUpdateWithoutContratoInput>
  }

  export type DevolucionUpdateOneWithoutContratoNestedInput = {
    create?: XOR<DevolucionCreateWithoutContratoInput, DevolucionUncheckedCreateWithoutContratoInput>
    connectOrCreate?: DevolucionCreateOrConnectWithoutContratoInput
    upsert?: DevolucionUpsertWithoutContratoInput
    disconnect?: DevolucionWhereInput | boolean
    delete?: DevolucionWhereInput | boolean
    connect?: DevolucionWhereUniqueInput
    update?: XOR<XOR<DevolucionUpdateToOneWithWhereWithoutContratoInput, DevolucionUpdateWithoutContratoInput>, DevolucionUncheckedUpdateWithoutContratoInput>
  }

  export type DevolucionUncheckedUpdateOneWithoutContratoNestedInput = {
    create?: XOR<DevolucionCreateWithoutContratoInput, DevolucionUncheckedCreateWithoutContratoInput>
    connectOrCreate?: DevolucionCreateOrConnectWithoutContratoInput
    upsert?: DevolucionUpsertWithoutContratoInput
    disconnect?: DevolucionWhereInput | boolean
    delete?: DevolucionWhereInput | boolean
    connect?: DevolucionWhereUniqueInput
    update?: XOR<XOR<DevolucionUpdateToOneWithWhereWithoutContratoInput, DevolucionUpdateWithoutContratoInput>, DevolucionUncheckedUpdateWithoutContratoInput>
  }

  export type ContratoCreateNestedOneWithoutDevolucionInput = {
    create?: XOR<ContratoCreateWithoutDevolucionInput, ContratoUncheckedCreateWithoutDevolucionInput>
    connectOrCreate?: ContratoCreateOrConnectWithoutDevolucionInput
    connect?: ContratoWhereUniqueInput
  }

  export type ContratoUpdateOneRequiredWithoutDevolucionNestedInput = {
    create?: XOR<ContratoCreateWithoutDevolucionInput, ContratoUncheckedCreateWithoutDevolucionInput>
    connectOrCreate?: ContratoCreateOrConnectWithoutDevolucionInput
    upsert?: ContratoUpsertWithoutDevolucionInput
    connect?: ContratoWhereUniqueInput
    update?: XOR<XOR<ContratoUpdateToOneWithWhereWithoutDevolucionInput, ContratoUpdateWithoutDevolucionInput>, ContratoUncheckedUpdateWithoutDevolucionInput>
  }

  export type VehiculoCreateNestedOneWithoutMantenimientosInput = {
    create?: XOR<VehiculoCreateWithoutMantenimientosInput, VehiculoUncheckedCreateWithoutMantenimientosInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutMantenimientosInput
    connect?: VehiculoWhereUniqueInput
  }

  export type EnumTipoMantenimientoFieldUpdateOperationsInput = {
    set?: $Enums.TipoMantenimiento
  }

  export type VehiculoUpdateOneRequiredWithoutMantenimientosNestedInput = {
    create?: XOR<VehiculoCreateWithoutMantenimientosInput, VehiculoUncheckedCreateWithoutMantenimientosInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutMantenimientosInput
    upsert?: VehiculoUpsertWithoutMantenimientosInput
    connect?: VehiculoWhereUniqueInput
    update?: XOR<XOR<VehiculoUpdateToOneWithWhereWithoutMantenimientosInput, VehiculoUpdateWithoutMantenimientosInput>, VehiculoUncheckedUpdateWithoutMantenimientosInput>
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

  export type NestedEnumTipoVehiculoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoVehiculo | EnumTipoVehiculoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoVehiculo[] | ListEnumTipoVehiculoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoVehiculo[] | ListEnumTipoVehiculoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoVehiculoFilter<$PrismaModel> | $Enums.TipoVehiculo
  }

  export type NestedEnumEstadoVehiculoFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoVehiculo | EnumEstadoVehiculoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoVehiculo[] | ListEnumEstadoVehiculoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoVehiculo[] | ListEnumEstadoVehiculoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoVehiculoFilter<$PrismaModel> | $Enums.EstadoVehiculo
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

  export type NestedEnumTipoVehiculoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoVehiculo | EnumTipoVehiculoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoVehiculo[] | ListEnumTipoVehiculoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoVehiculo[] | ListEnumTipoVehiculoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoVehiculoWithAggregatesFilter<$PrismaModel> | $Enums.TipoVehiculo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoVehiculoFilter<$PrismaModel>
    _max?: NestedEnumTipoVehiculoFilter<$PrismaModel>
  }

  export type NestedEnumEstadoVehiculoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoVehiculo | EnumEstadoVehiculoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoVehiculo[] | ListEnumEstadoVehiculoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoVehiculo[] | ListEnumEstadoVehiculoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoVehiculoWithAggregatesFilter<$PrismaModel> | $Enums.EstadoVehiculo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoVehiculoFilter<$PrismaModel>
    _max?: NestedEnumEstadoVehiculoFilter<$PrismaModel>
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

  export type NestedEnumEstadoReservaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoReserva | EnumEstadoReservaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoReserva[] | ListEnumEstadoReservaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoReserva[] | ListEnumEstadoReservaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoReservaFilter<$PrismaModel> | $Enums.EstadoReserva
  }

  export type NestedEnumEstadoReservaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoReserva | EnumEstadoReservaFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoReserva[] | ListEnumEstadoReservaFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoReserva[] | ListEnumEstadoReservaFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoReservaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoReserva
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoReservaFilter<$PrismaModel>
    _max?: NestedEnumEstadoReservaFilter<$PrismaModel>
  }

  export type NestedEnumEstadoContratoFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoContrato | EnumEstadoContratoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoContrato[] | ListEnumEstadoContratoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoContrato[] | ListEnumEstadoContratoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoContratoFilter<$PrismaModel> | $Enums.EstadoContrato
  }

  export type NestedEnumEstadoContratoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoContrato | EnumEstadoContratoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoContrato[] | ListEnumEstadoContratoFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoContrato[] | ListEnumEstadoContratoFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoContratoWithAggregatesFilter<$PrismaModel> | $Enums.EstadoContrato
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoContratoFilter<$PrismaModel>
    _max?: NestedEnumEstadoContratoFilter<$PrismaModel>
  }

  export type NestedEnumTipoMantenimientoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMantenimiento | EnumTipoMantenimientoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMantenimiento[] | ListEnumTipoMantenimientoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMantenimiento[] | ListEnumTipoMantenimientoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMantenimientoFilter<$PrismaModel> | $Enums.TipoMantenimiento
  }

  export type NestedEnumTipoMantenimientoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMantenimiento | EnumTipoMantenimientoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMantenimiento[] | ListEnumTipoMantenimientoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMantenimiento[] | ListEnumTipoMantenimientoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMantenimientoWithAggregatesFilter<$PrismaModel> | $Enums.TipoMantenimiento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoMantenimientoFilter<$PrismaModel>
    _max?: NestedEnumTipoMantenimientoFilter<$PrismaModel>
  }

  export type ReservaCreateWithoutVehiculoInput = {
    fechaInicio: Date | string
    fechaFin: Date | string
    estado?: $Enums.EstadoReserva
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutReservasInput
    contrato?: ContratoCreateNestedOneWithoutReservaInput
  }

  export type ReservaUncheckedCreateWithoutVehiculoInput = {
    id?: number
    clienteId: number
    fechaInicio: Date | string
    fechaFin: Date | string
    estado?: $Enums.EstadoReserva
    createdAt?: Date | string
    updatedAt?: Date | string
    contrato?: ContratoUncheckedCreateNestedOneWithoutReservaInput
  }

  export type ReservaCreateOrConnectWithoutVehiculoInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutVehiculoInput, ReservaUncheckedCreateWithoutVehiculoInput>
  }

  export type ReservaCreateManyVehiculoInputEnvelope = {
    data: ReservaCreateManyVehiculoInput | ReservaCreateManyVehiculoInput[]
    skipDuplicates?: boolean
  }

  export type MantenimientoCreateWithoutVehiculoInput = {
    tipo: $Enums.TipoMantenimiento
    descripcion: string
    costo: number
    fecha: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MantenimientoUncheckedCreateWithoutVehiculoInput = {
    id?: number
    tipo: $Enums.TipoMantenimiento
    descripcion: string
    costo: number
    fecha: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MantenimientoCreateOrConnectWithoutVehiculoInput = {
    where: MantenimientoWhereUniqueInput
    create: XOR<MantenimientoCreateWithoutVehiculoInput, MantenimientoUncheckedCreateWithoutVehiculoInput>
  }

  export type MantenimientoCreateManyVehiculoInputEnvelope = {
    data: MantenimientoCreateManyVehiculoInput | MantenimientoCreateManyVehiculoInput[]
    skipDuplicates?: boolean
  }

  export type ReservaUpsertWithWhereUniqueWithoutVehiculoInput = {
    where: ReservaWhereUniqueInput
    update: XOR<ReservaUpdateWithoutVehiculoInput, ReservaUncheckedUpdateWithoutVehiculoInput>
    create: XOR<ReservaCreateWithoutVehiculoInput, ReservaUncheckedCreateWithoutVehiculoInput>
  }

  export type ReservaUpdateWithWhereUniqueWithoutVehiculoInput = {
    where: ReservaWhereUniqueInput
    data: XOR<ReservaUpdateWithoutVehiculoInput, ReservaUncheckedUpdateWithoutVehiculoInput>
  }

  export type ReservaUpdateManyWithWhereWithoutVehiculoInput = {
    where: ReservaScalarWhereInput
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyWithoutVehiculoInput>
  }

  export type ReservaScalarWhereInput = {
    AND?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
    OR?: ReservaScalarWhereInput[]
    NOT?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
    id?: IntFilter<"Reserva"> | number
    clienteId?: IntFilter<"Reserva"> | number
    vehiculoId?: IntFilter<"Reserva"> | number
    fechaInicio?: DateTimeFilter<"Reserva"> | Date | string
    fechaFin?: DateTimeFilter<"Reserva"> | Date | string
    estado?: EnumEstadoReservaFilter<"Reserva"> | $Enums.EstadoReserva
    createdAt?: DateTimeFilter<"Reserva"> | Date | string
    updatedAt?: DateTimeFilter<"Reserva"> | Date | string
  }

  export type MantenimientoUpsertWithWhereUniqueWithoutVehiculoInput = {
    where: MantenimientoWhereUniqueInput
    update: XOR<MantenimientoUpdateWithoutVehiculoInput, MantenimientoUncheckedUpdateWithoutVehiculoInput>
    create: XOR<MantenimientoCreateWithoutVehiculoInput, MantenimientoUncheckedCreateWithoutVehiculoInput>
  }

  export type MantenimientoUpdateWithWhereUniqueWithoutVehiculoInput = {
    where: MantenimientoWhereUniqueInput
    data: XOR<MantenimientoUpdateWithoutVehiculoInput, MantenimientoUncheckedUpdateWithoutVehiculoInput>
  }

  export type MantenimientoUpdateManyWithWhereWithoutVehiculoInput = {
    where: MantenimientoScalarWhereInput
    data: XOR<MantenimientoUpdateManyMutationInput, MantenimientoUncheckedUpdateManyWithoutVehiculoInput>
  }

  export type MantenimientoScalarWhereInput = {
    AND?: MantenimientoScalarWhereInput | MantenimientoScalarWhereInput[]
    OR?: MantenimientoScalarWhereInput[]
    NOT?: MantenimientoScalarWhereInput | MantenimientoScalarWhereInput[]
    id?: IntFilter<"Mantenimiento"> | number
    vehiculoId?: IntFilter<"Mantenimiento"> | number
    tipo?: EnumTipoMantenimientoFilter<"Mantenimiento"> | $Enums.TipoMantenimiento
    descripcion?: StringFilter<"Mantenimiento"> | string
    costo?: FloatFilter<"Mantenimiento"> | number
    fecha?: DateTimeFilter<"Mantenimiento"> | Date | string
    createdAt?: DateTimeFilter<"Mantenimiento"> | Date | string
    updatedAt?: DateTimeFilter<"Mantenimiento"> | Date | string
  }

  export type ReservaCreateWithoutClienteInput = {
    fechaInicio: Date | string
    fechaFin: Date | string
    estado?: $Enums.EstadoReserva
    createdAt?: Date | string
    updatedAt?: Date | string
    vehiculo: VehiculoCreateNestedOneWithoutReservasInput
    contrato?: ContratoCreateNestedOneWithoutReservaInput
  }

  export type ReservaUncheckedCreateWithoutClienteInput = {
    id?: number
    vehiculoId: number
    fechaInicio: Date | string
    fechaFin: Date | string
    estado?: $Enums.EstadoReserva
    createdAt?: Date | string
    updatedAt?: Date | string
    contrato?: ContratoUncheckedCreateNestedOneWithoutReservaInput
  }

  export type ReservaCreateOrConnectWithoutClienteInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutClienteInput, ReservaUncheckedCreateWithoutClienteInput>
  }

  export type ReservaCreateManyClienteInputEnvelope = {
    data: ReservaCreateManyClienteInput | ReservaCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type ReservaUpsertWithWhereUniqueWithoutClienteInput = {
    where: ReservaWhereUniqueInput
    update: XOR<ReservaUpdateWithoutClienteInput, ReservaUncheckedUpdateWithoutClienteInput>
    create: XOR<ReservaCreateWithoutClienteInput, ReservaUncheckedCreateWithoutClienteInput>
  }

  export type ReservaUpdateWithWhereUniqueWithoutClienteInput = {
    where: ReservaWhereUniqueInput
    data: XOR<ReservaUpdateWithoutClienteInput, ReservaUncheckedUpdateWithoutClienteInput>
  }

  export type ReservaUpdateManyWithWhereWithoutClienteInput = {
    where: ReservaScalarWhereInput
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyWithoutClienteInput>
  }

  export type ClienteCreateWithoutReservasInput = {
    nombres: string
    apellidos: string
    documentoIdentidad: string
    licenciaConduccion: string
    correo: string
    telefono: string
    direccion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteUncheckedCreateWithoutReservasInput = {
    id?: number
    nombres: string
    apellidos: string
    documentoIdentidad: string
    licenciaConduccion: string
    correo: string
    telefono: string
    direccion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteCreateOrConnectWithoutReservasInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutReservasInput, ClienteUncheckedCreateWithoutReservasInput>
  }

  export type VehiculoCreateWithoutReservasInput = {
    marca: string
    modelo: string
    anio: number
    placa: string
    tipo: $Enums.TipoVehiculo
    estado?: $Enums.EstadoVehiculo
    precioPorDia: number
    kilometraje?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    mantenimientos?: MantenimientoCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoUncheckedCreateWithoutReservasInput = {
    id?: number
    marca: string
    modelo: string
    anio: number
    placa: string
    tipo: $Enums.TipoVehiculo
    estado?: $Enums.EstadoVehiculo
    precioPorDia: number
    kilometraje?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    mantenimientos?: MantenimientoUncheckedCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoCreateOrConnectWithoutReservasInput = {
    where: VehiculoWhereUniqueInput
    create: XOR<VehiculoCreateWithoutReservasInput, VehiculoUncheckedCreateWithoutReservasInput>
  }

  export type ContratoCreateWithoutReservaInput = {
    fechaEntrega: Date | string
    valorTotal: number
    condiciones?: string | null
    estado?: $Enums.EstadoContrato
    createdAt?: Date | string
    updatedAt?: Date | string
    devolucion?: DevolucionCreateNestedOneWithoutContratoInput
  }

  export type ContratoUncheckedCreateWithoutReservaInput = {
    id?: number
    fechaEntrega: Date | string
    valorTotal: number
    condiciones?: string | null
    estado?: $Enums.EstadoContrato
    createdAt?: Date | string
    updatedAt?: Date | string
    devolucion?: DevolucionUncheckedCreateNestedOneWithoutContratoInput
  }

  export type ContratoCreateOrConnectWithoutReservaInput = {
    where: ContratoWhereUniqueInput
    create: XOR<ContratoCreateWithoutReservaInput, ContratoUncheckedCreateWithoutReservaInput>
  }

  export type ClienteUpsertWithoutReservasInput = {
    update: XOR<ClienteUpdateWithoutReservasInput, ClienteUncheckedUpdateWithoutReservasInput>
    create: XOR<ClienteCreateWithoutReservasInput, ClienteUncheckedCreateWithoutReservasInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutReservasInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutReservasInput, ClienteUncheckedUpdateWithoutReservasInput>
  }

  export type ClienteUpdateWithoutReservasInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    licenciaConduccion?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateWithoutReservasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    licenciaConduccion?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehiculoUpsertWithoutReservasInput = {
    update: XOR<VehiculoUpdateWithoutReservasInput, VehiculoUncheckedUpdateWithoutReservasInput>
    create: XOR<VehiculoCreateWithoutReservasInput, VehiculoUncheckedCreateWithoutReservasInput>
    where?: VehiculoWhereInput
  }

  export type VehiculoUpdateToOneWithWhereWithoutReservasInput = {
    where?: VehiculoWhereInput
    data: XOR<VehiculoUpdateWithoutReservasInput, VehiculoUncheckedUpdateWithoutReservasInput>
  }

  export type VehiculoUpdateWithoutReservasInput = {
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoVehiculoFieldUpdateOperationsInput | $Enums.TipoVehiculo
    estado?: EnumEstadoVehiculoFieldUpdateOperationsInput | $Enums.EstadoVehiculo
    precioPorDia?: FloatFieldUpdateOperationsInput | number
    kilometraje?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mantenimientos?: MantenimientoUpdateManyWithoutVehiculoNestedInput
  }

  export type VehiculoUncheckedUpdateWithoutReservasInput = {
    id?: IntFieldUpdateOperationsInput | number
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoVehiculoFieldUpdateOperationsInput | $Enums.TipoVehiculo
    estado?: EnumEstadoVehiculoFieldUpdateOperationsInput | $Enums.EstadoVehiculo
    precioPorDia?: FloatFieldUpdateOperationsInput | number
    kilometraje?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mantenimientos?: MantenimientoUncheckedUpdateManyWithoutVehiculoNestedInput
  }

  export type ContratoUpsertWithoutReservaInput = {
    update: XOR<ContratoUpdateWithoutReservaInput, ContratoUncheckedUpdateWithoutReservaInput>
    create: XOR<ContratoCreateWithoutReservaInput, ContratoUncheckedCreateWithoutReservaInput>
    where?: ContratoWhereInput
  }

  export type ContratoUpdateToOneWithWhereWithoutReservaInput = {
    where?: ContratoWhereInput
    data: XOR<ContratoUpdateWithoutReservaInput, ContratoUncheckedUpdateWithoutReservaInput>
  }

  export type ContratoUpdateWithoutReservaInput = {
    fechaEntrega?: DateTimeFieldUpdateOperationsInput | Date | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    condiciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoContratoFieldUpdateOperationsInput | $Enums.EstadoContrato
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devolucion?: DevolucionUpdateOneWithoutContratoNestedInput
  }

  export type ContratoUncheckedUpdateWithoutReservaInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaEntrega?: DateTimeFieldUpdateOperationsInput | Date | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    condiciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoContratoFieldUpdateOperationsInput | $Enums.EstadoContrato
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devolucion?: DevolucionUncheckedUpdateOneWithoutContratoNestedInput
  }

  export type ReservaCreateWithoutContratoInput = {
    fechaInicio: Date | string
    fechaFin: Date | string
    estado?: $Enums.EstadoReserva
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutReservasInput
    vehiculo: VehiculoCreateNestedOneWithoutReservasInput
  }

  export type ReservaUncheckedCreateWithoutContratoInput = {
    id?: number
    clienteId: number
    vehiculoId: number
    fechaInicio: Date | string
    fechaFin: Date | string
    estado?: $Enums.EstadoReserva
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservaCreateOrConnectWithoutContratoInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutContratoInput, ReservaUncheckedCreateWithoutContratoInput>
  }

  export type DevolucionCreateWithoutContratoInput = {
    fechaDevolucion?: Date | string
    estadoVehiculo: string
    kilometrajeRetorno: number
    cargosAdicionales?: number
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DevolucionUncheckedCreateWithoutContratoInput = {
    id?: number
    fechaDevolucion?: Date | string
    estadoVehiculo: string
    kilometrajeRetorno: number
    cargosAdicionales?: number
    observaciones?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DevolucionCreateOrConnectWithoutContratoInput = {
    where: DevolucionWhereUniqueInput
    create: XOR<DevolucionCreateWithoutContratoInput, DevolucionUncheckedCreateWithoutContratoInput>
  }

  export type ReservaUpsertWithoutContratoInput = {
    update: XOR<ReservaUpdateWithoutContratoInput, ReservaUncheckedUpdateWithoutContratoInput>
    create: XOR<ReservaCreateWithoutContratoInput, ReservaUncheckedCreateWithoutContratoInput>
    where?: ReservaWhereInput
  }

  export type ReservaUpdateToOneWithWhereWithoutContratoInput = {
    where?: ReservaWhereInput
    data: XOR<ReservaUpdateWithoutContratoInput, ReservaUncheckedUpdateWithoutContratoInput>
  }

  export type ReservaUpdateWithoutContratoInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutReservasNestedInput
    vehiculo?: VehiculoUpdateOneRequiredWithoutReservasNestedInput
  }

  export type ReservaUncheckedUpdateWithoutContratoInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    vehiculoId?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DevolucionUpsertWithoutContratoInput = {
    update: XOR<DevolucionUpdateWithoutContratoInput, DevolucionUncheckedUpdateWithoutContratoInput>
    create: XOR<DevolucionCreateWithoutContratoInput, DevolucionUncheckedCreateWithoutContratoInput>
    where?: DevolucionWhereInput
  }

  export type DevolucionUpdateToOneWithWhereWithoutContratoInput = {
    where?: DevolucionWhereInput
    data: XOR<DevolucionUpdateWithoutContratoInput, DevolucionUncheckedUpdateWithoutContratoInput>
  }

  export type DevolucionUpdateWithoutContratoInput = {
    fechaDevolucion?: DateTimeFieldUpdateOperationsInput | Date | string
    estadoVehiculo?: StringFieldUpdateOperationsInput | string
    kilometrajeRetorno?: IntFieldUpdateOperationsInput | number
    cargosAdicionales?: FloatFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DevolucionUncheckedUpdateWithoutContratoInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaDevolucion?: DateTimeFieldUpdateOperationsInput | Date | string
    estadoVehiculo?: StringFieldUpdateOperationsInput | string
    kilometrajeRetorno?: IntFieldUpdateOperationsInput | number
    cargosAdicionales?: FloatFieldUpdateOperationsInput | number
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContratoCreateWithoutDevolucionInput = {
    fechaEntrega: Date | string
    valorTotal: number
    condiciones?: string | null
    estado?: $Enums.EstadoContrato
    createdAt?: Date | string
    updatedAt?: Date | string
    reserva: ReservaCreateNestedOneWithoutContratoInput
  }

  export type ContratoUncheckedCreateWithoutDevolucionInput = {
    id?: number
    reservaId: number
    fechaEntrega: Date | string
    valorTotal: number
    condiciones?: string | null
    estado?: $Enums.EstadoContrato
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContratoCreateOrConnectWithoutDevolucionInput = {
    where: ContratoWhereUniqueInput
    create: XOR<ContratoCreateWithoutDevolucionInput, ContratoUncheckedCreateWithoutDevolucionInput>
  }

  export type ContratoUpsertWithoutDevolucionInput = {
    update: XOR<ContratoUpdateWithoutDevolucionInput, ContratoUncheckedUpdateWithoutDevolucionInput>
    create: XOR<ContratoCreateWithoutDevolucionInput, ContratoUncheckedCreateWithoutDevolucionInput>
    where?: ContratoWhereInput
  }

  export type ContratoUpdateToOneWithWhereWithoutDevolucionInput = {
    where?: ContratoWhereInput
    data: XOR<ContratoUpdateWithoutDevolucionInput, ContratoUncheckedUpdateWithoutDevolucionInput>
  }

  export type ContratoUpdateWithoutDevolucionInput = {
    fechaEntrega?: DateTimeFieldUpdateOperationsInput | Date | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    condiciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoContratoFieldUpdateOperationsInput | $Enums.EstadoContrato
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reserva?: ReservaUpdateOneRequiredWithoutContratoNestedInput
  }

  export type ContratoUncheckedUpdateWithoutDevolucionInput = {
    id?: IntFieldUpdateOperationsInput | number
    reservaId?: IntFieldUpdateOperationsInput | number
    fechaEntrega?: DateTimeFieldUpdateOperationsInput | Date | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    condiciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoContratoFieldUpdateOperationsInput | $Enums.EstadoContrato
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehiculoCreateWithoutMantenimientosInput = {
    marca: string
    modelo: string
    anio: number
    placa: string
    tipo: $Enums.TipoVehiculo
    estado?: $Enums.EstadoVehiculo
    precioPorDia: number
    kilometraje?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reservas?: ReservaCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoUncheckedCreateWithoutMantenimientosInput = {
    id?: number
    marca: string
    modelo: string
    anio: number
    placa: string
    tipo: $Enums.TipoVehiculo
    estado?: $Enums.EstadoVehiculo
    precioPorDia: number
    kilometraje?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reservas?: ReservaUncheckedCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoCreateOrConnectWithoutMantenimientosInput = {
    where: VehiculoWhereUniqueInput
    create: XOR<VehiculoCreateWithoutMantenimientosInput, VehiculoUncheckedCreateWithoutMantenimientosInput>
  }

  export type VehiculoUpsertWithoutMantenimientosInput = {
    update: XOR<VehiculoUpdateWithoutMantenimientosInput, VehiculoUncheckedUpdateWithoutMantenimientosInput>
    create: XOR<VehiculoCreateWithoutMantenimientosInput, VehiculoUncheckedCreateWithoutMantenimientosInput>
    where?: VehiculoWhereInput
  }

  export type VehiculoUpdateToOneWithWhereWithoutMantenimientosInput = {
    where?: VehiculoWhereInput
    data: XOR<VehiculoUpdateWithoutMantenimientosInput, VehiculoUncheckedUpdateWithoutMantenimientosInput>
  }

  export type VehiculoUpdateWithoutMantenimientosInput = {
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoVehiculoFieldUpdateOperationsInput | $Enums.TipoVehiculo
    estado?: EnumEstadoVehiculoFieldUpdateOperationsInput | $Enums.EstadoVehiculo
    precioPorDia?: FloatFieldUpdateOperationsInput | number
    kilometraje?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUpdateManyWithoutVehiculoNestedInput
  }

  export type VehiculoUncheckedUpdateWithoutMantenimientosInput = {
    id?: IntFieldUpdateOperationsInput | number
    marca?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    anio?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoVehiculoFieldUpdateOperationsInput | $Enums.TipoVehiculo
    estado?: EnumEstadoVehiculoFieldUpdateOperationsInput | $Enums.EstadoVehiculo
    precioPorDia?: FloatFieldUpdateOperationsInput | number
    kilometraje?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUncheckedUpdateManyWithoutVehiculoNestedInput
  }

  export type ReservaCreateManyVehiculoInput = {
    id?: number
    clienteId: number
    fechaInicio: Date | string
    fechaFin: Date | string
    estado?: $Enums.EstadoReserva
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MantenimientoCreateManyVehiculoInput = {
    id?: number
    tipo: $Enums.TipoMantenimiento
    descripcion: string
    costo: number
    fecha: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservaUpdateWithoutVehiculoInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutReservasNestedInput
    contrato?: ContratoUpdateOneWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateWithoutVehiculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contrato?: ContratoUncheckedUpdateOneWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateManyWithoutVehiculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MantenimientoUpdateWithoutVehiculoInput = {
    tipo?: EnumTipoMantenimientoFieldUpdateOperationsInput | $Enums.TipoMantenimiento
    descripcion?: StringFieldUpdateOperationsInput | string
    costo?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MantenimientoUncheckedUpdateWithoutVehiculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoMantenimientoFieldUpdateOperationsInput | $Enums.TipoMantenimiento
    descripcion?: StringFieldUpdateOperationsInput | string
    costo?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MantenimientoUncheckedUpdateManyWithoutVehiculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoMantenimientoFieldUpdateOperationsInput | $Enums.TipoMantenimiento
    descripcion?: StringFieldUpdateOperationsInput | string
    costo?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaCreateManyClienteInput = {
    id?: number
    vehiculoId: number
    fechaInicio: Date | string
    fechaFin: Date | string
    estado?: $Enums.EstadoReserva
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservaUpdateWithoutClienteInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehiculo?: VehiculoUpdateOneRequiredWithoutReservasNestedInput
    contrato?: ContratoUpdateOneWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehiculoId?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contrato?: ContratoUncheckedUpdateOneWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehiculoId?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoReservaFieldUpdateOperationsInput | $Enums.EstadoReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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