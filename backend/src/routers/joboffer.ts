import { NextFunction, Request, Response, Router } from 'express';
import JobOfferController from '../controllers/joboffer';

class JobOfferRouter {
  private _router = Router();
  private _controller = JobOfferController;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  private _configure() {
    this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
      res.status(200).json(this._controller.defaultMethod());
    });
  }
}

export = new JobOfferRouter().router;
