import {
  Actions,
  React,
  TaskFactory,
  FocusedContentStore,
  FocusedContactsStore,
  Thread,
} from 'nylas-exports';

export default class ArchiveSimilar extends React.Component {
  static displayName = 'ArchiveSimilar';
  constructor(props) {
    super(props);
    this.state = this._getStateFromStores();
  }

  componentDidMount() {
    this.unsubscribeContent = FocusedContentStore.listen(this._onChange);
    this.unsubscribeContacts = FocusedContactsStore.listen(this._onChange);
  }

  componentWillUnmount() {
    this.unsubscribeContent();
    this.unsubscribeContacts();
  }

  _onChange = () => {
      console.log("updating..")
    this.setState(this._getStateFromStores());
    this.setState({similarEmails: this.getSimilarEmails()})
  }

  _getStateFromStores = () => {
    return {
      current: FocusedContentStore.focused('thread'),
      focusedContactThreads: FocusedContactsStore.focusedContactThreads(),
    };
  }

  archiveSimilar = () => {
    let {similarEmails} = this.state
    similarEmails.forEach(this.archiveEmail)
  }

  archiveEmail = (email) => {
    let tasks = TaskFactory.tasksForArchiving({
      threads: [email]
    })
    Actions.queueTasks(tasks)
    this.setState({similarEmails: []})
  }

  getButtonClassName = () => {
      let {similarEmails} = this.state

      let classes = ["btn"]
      if (similarEmails && similarEmails.length) {
          classes.push("active")
      }
      return classes.join(" ")
  }

  getSimilarEmails = () => {
    let {current, focusedContactThreads} = this.state

    return focusedContactThreads.filter(thread =>
      thread.categories.filter(cat => cat.name == "inbox").length &&
      thread.id != current.id
    )
  }

  render() {
    let {similarEmails} = this.state

    return (
      <div className="archive-similar">
          <button className={this.getButtonClassName()}
                  onClick={this.archiveSimilar}>
            Archive Similar ({similarEmails ? similarEmails.length : "..."})
          </button>
        </div>
    );
  }
}

ArchiveSimilar.containerStyles = {
  order: 1,
  flexShrink: 0,
};
