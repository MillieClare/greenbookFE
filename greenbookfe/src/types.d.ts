interface IReport {
  // id: number;
  companyName: string;
  country?: string;
  sector?: string;
  reviewer?: string;
  reviewLink?: string;
}

interface IFilterOptions {
  field: string;
  value: string;
}

type ReportState = {
  reports: IReport[];
  IFilterOptions: IFilterOptions;
};

type ReportAction = {
  type: string;
  report: IReport;
  filter?: IFilterOptions;
};

type ContextType = {
  reports: IReport[];
  // saveTodo: (todo: ITodo) => void;
  // updateTodo: (id: number) => void;
};
