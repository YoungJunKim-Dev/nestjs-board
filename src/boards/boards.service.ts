import { Board } from './board.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  private boards: Board[] = ['board1', 'board2'];

  getAllBoards(): Board[] {
    return this.boards;
  }
}
