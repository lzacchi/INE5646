import { NextFunction, Request, Response, Router } from 'express';
import HealthController from '../controllers/health';

class HealthRouter {
  private _router = Router();
  private _controller = HealthController;

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

export = new HealthRouter().router;
