import { Router } from 'express';
import HealthRouter from './health';
import JobOfferRouter from './joboffer';

class MasterRouter {
  private _router = Router();
  private _healthRouter = HealthRouter;
  private _jobRouter = JobOfferRouter;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  private _configure() {
    this._router.use('/health', this._healthRouter);
    this._router.use('/joboffers', this._jobRouter);
  }
}

export = new MasterRouter().router;
