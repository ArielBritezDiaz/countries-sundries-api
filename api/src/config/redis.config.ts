import { Injectable } from '@nestjs/common';
import Redis, { RedisOptions } from 'ioredis';

@Injectable()
export class RedisService extends Redis {
  constructor(options?: RedisOptions) {
    super(options)

    this.events()
  }

  private events() {
    this.on('connect', () => {
      console.log('Redis connected')
    })

    this.on('error', (error) => {
      console.error('Redis error:', error)
    })

    this.on('close', () => {
      console.log('Redis connection closed')
    })

    this.on('reconnecting', () => {
      console.log('Redis reconnecting')
    })
  }
}