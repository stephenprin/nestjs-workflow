import { Exclude } from "class-transformer";

export interface UserDto {
    username: string;
    password: string;
}

export class serializeUserDto {
    username: string;

    @Exclude()
    password: string;

    constructor(partial: Partial<serializeUserDto>) {
        Object.assign(this, partial);
      }
}