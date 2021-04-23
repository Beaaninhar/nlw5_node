import { Request, Response } from 'express';
import { MessagesService } from '../services/MessagesService';


class MessagersController {

    async create (req: Request, res: Response): Promise<Response> {

        const { admin_id, text, user_id } = req.body;

        const messagesService = new MessagesService();

        const messagers = await messagesService.create({
            admin_id,
            text,
            user_id
        });
    
        return res.json(messagers);

    }

    async showByUser(req: Request, res: Response) {
        const { id } = req.params;

        const messagesService = new MessagesService();
        
        const list = await messagesService.listByUser(id);

        return res.json(list);
    }
}

export { MessagersController }