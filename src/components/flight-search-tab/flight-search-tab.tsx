import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'flight-search-tab',
  styleUrl: 'flight-search-tab.css',
  shadow: true,
})
export class FlightSearchTab {

  @Prop() tabname: string;
  @Prop() tabswitchname: string;
  @Prop() text: string;

  private getText(text): string {
    this.text = text;
    return this.text;
  }

  render() {
    return <a
        class="tab-switch" href={this.getText(this.tabswitchname)}>
        {this.getText(this.tabname)}
      </a>
    ;
  }

}
