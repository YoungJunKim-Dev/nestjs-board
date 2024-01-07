import { CreateBoardDto } from './dto/create-board.dto';
import { Board, BoardStatus } from './board.model';
import { BoardsService } from './boards.service';
import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Body,
  Param,
} from '@nestjs/common';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoards(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post('/')
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    console.log('title', createBoardDto.title);
    console.log('description', createBoardDto.description);
    return this.boardsService.createBoard(createBoardDto);
  }

  @Get('/:id')
  getBoardById(@Param('id') id: string): Board {
    return this.boardsService.getBoardById(id);
  }

  @Delete('/:id')
  deleteBoard(@Param('id') id: string) {
    this.boardsService.deleteBoard(id);
  }

  @Patch('/:id/status')
  updatedBoardStatus(
    @Param('id') id: string,
    @Body('status') status: BoardStatus,
  ): Board {
    return this.boardsService.updateBoardStatus(id, status);
  }
}
