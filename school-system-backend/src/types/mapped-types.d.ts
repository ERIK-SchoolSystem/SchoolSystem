declare module '@nestjs/mapped-types' {
  import { Type } from '@nestjs/common';
  export function PartialType<T>(classRef: Type<T>): Type<Partial<T>>;
}
