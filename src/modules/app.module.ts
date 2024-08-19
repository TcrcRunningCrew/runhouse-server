import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from 'src/modules/common/database/database.entity';

import { CommonModule } from './common/common.module';
import { CrewModule } from './crew/crew.module';
import { ScheduleModule } from './schedule/schedule.module';
import { MemberModule } from './member/member.module';
import { AttendanceModule } from './attendance/attendance.module';
import { KakaoStrategy } from 'src/common/auth/kakao.strategy';

@Module({
  imports: [
    CommonModule,
    TypeOrmModule.forFeature(entities),
    CrewModule,
    ScheduleModule,
    MemberModule,
    AttendanceModule,
  ],
  controllers: [AppController],
  providers: [AppService, KakaoStrategy],
})
export class AppModule {}
