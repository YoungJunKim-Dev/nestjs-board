import { Board } from './board.model';
import { BoardsService } from './boards.service';
import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoards(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post('/')
  createBoard(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Board {
    console.log('title', title);
    console.log('description', description);
    return this.boardsService.createBoard(title, description);
  }
}
