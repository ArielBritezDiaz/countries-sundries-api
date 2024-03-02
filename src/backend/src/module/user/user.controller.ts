import { Controller, Res, Get, Query, HttpStatus, UsePipes, ValidationPipe, InternalServerErrorException, Version, Param, Body, Post } from '@nestjs/common'
import { Response } from 'express';
//Service import
import { UserService } from './user.service';
//DTO import
import { UserDTO } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(
    private readonly UserService: UserService,
  ) {}

  @Post('create')
  async createUser(
    @Res() res: Response,
    // @Query(new ValidationPipe({transform: true})) queryParams: UserDTO,
    @Body() body: UserDTO
  ) {
    try {
      const bodyReq: UserDTO = {...body}
      // console.log(bodyReq)

      const response = await this.UserService.createUser(bodyReq)
      console.log("response in front:", response)
      const statusAccount = !response ? 'You already have an account' : 'Account created successfully'
      return res.send(statusAccount)
    } catch(error) {
      console.log(error)
      throw new InternalServerErrorException()
    }
  }
}
