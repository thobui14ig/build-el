import { ChapterEntity } from 'src/chapter/chapter.entity';
import { FileEntity } from 'src/file/file.entity';
import { UserTopic } from 'src/user-topic/user_topic.entity';
export declare class TopicEntity {
    id: number;
    name: string;
    fileId: number;
    chapters: ChapterEntity[];
    file: FileEntity;
    userTopic: UserTopic;
}
