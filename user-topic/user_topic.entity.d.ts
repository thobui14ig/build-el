import { TopicEntity } from 'src/topic/topic.entity';
export declare class UserTopic {
    id: number;
    userId: number;
    topicId: number;
    success: boolean;
    active: boolean;
    topic: TopicEntity;
}
