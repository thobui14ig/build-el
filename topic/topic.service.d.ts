import { ChapterService } from './../chapter/chapter.service';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { Repository } from 'typeorm';
import { TopicEntity } from './topic.entity';
import { VariableService } from 'src/variable/variable.service';
export declare class TopicService {
    private repo;
    private readonly chapterService;
    private readonly variableService;
    constructor(repo: Repository<TopicEntity>, chapterService: ChapterService, variableService: VariableService);
    create(createTopicDto: CreateTopicDto): Promise<CreateTopicDto & TopicEntity>;
    findAllDesc(): Promise<TopicEntity[]>;
    findAll(userId: number): Promise<any[]>;
    findOne(id: number): Promise<TopicEntity>;
    getAll(): Promise<TopicEntity[]>;
    update(id: number, updateTopicDto: UpdateTopicDto): string;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    removeChaptersAndVariables(topicId: number): Promise<import("typeorm").DeleteResult>;
    getNextTopic(topicId: number): Promise<number>;
}
