import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { commentRepositry } from 'src/constants/entityRepositry';
import { Comment } from './comment.entity';

@Module({
  providers: [
    {
      provide: commentRepositry,
      useValue: Comment,
    },
    CommentService,
  ],
  controllers: [CommentController],
  exports: [commentRepositry],
})
export class CommentModule {}
